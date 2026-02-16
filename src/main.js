const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const { keyboard, Key } = require("@nut-tree-fork/nut-js");

let mainWindow;

function FocusWindow(win) {
  win.setAlwaysOnTop(true)
  console.log("Try Focus")
  win.webContents.send('focus-unity')
  win.setFocusable(true)
  win.focus({steal: true})
  win.setFocusable(false)
  win.setSkipTaskbar(false)
}

function createWindow() {
  const win = new BrowserWindow({
    height: 500,
    maxHeight: 500,
    minHeight: 250,
    titleBarStyle: "hidden",
    focusable: false,
    minimizable: true,
    maximizable: false,

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  win.setAspectRatio(16 / 9)
  win.setAlwaysOnTop(true)
  win.loadFile('index.html')
  win.setSkipTaskbar(false)
  win.setIcon(path.join(__dirname, 'icon.ico'))

  win.on('restore', () => {
    FocusWindow(win)
  })

  mainWindow = win
}

var IsConfigOpen = false

function OpenConfig() {
  if (!mainWindow) { return; }
  if (IsConfigOpen) { return; }
  IsConfigOpen = true
  FocusWindow(mainWindow)
  const win = new BrowserWindow({
    height: 600,
    maxHeight: 600,
    minHeight: 600,
    resizable: false,
    minimizable: true,
    maximizable: false,
    title: "Settings",

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  win.setAspectRatio(5 / 8)
  win.loadFile('config-window.html')
  win.setSkipTaskbar(false)
  win.setIcon(path.join(__dirname, 'icon.ico'))
  win.setMenuBarVisibility(false)

  win.addListener("closed", () => {
    IsConfigOpen = false
    mainWindow.webContents.send('focus-unity')
  })
}

keyboard.config.autoDelayMs = 0;
keyboard.config.delay = 0;

async function HoldKey(msg) {
  if (msg == "manualDown") {
    await keyboard.pressKey(Key.V)
  } else if (msg == "manualUp") {
    await keyboard.releaseKey(Key.V)
  }
  if (msg == "hornDown") {
    await keyboard.pressKey(Key.H)
  } else if (msg == "hornUp") {
    await keyboard.releaseKey(Key.H)
  }
  if (msg == "sirenSwitch") {
    await keyboard.pressKey(Key.C)
    await keyboard.releaseKey(Key.C)
  }
  if (msg == "lightingSwitch") {
    await keyboard.pressKey(Key.X)
    await keyboard.releaseKey(Key.X)
  }
  if (msg == "trafficButton") {
    await keyboard.pressKey(Key.Z)
    await keyboard.releaseKey(Key.Z)
  }
}
ipcMain.on("unity-event", (event, msg) => {
  HoldKey(msg)
});

ipcMain.on("open-config", (event) => {
  OpenConfig()
});

ipcMain.on("window-control", (event, button) => {
  if (!mainWindow) { return; }
  if (button == "minimize") {
    mainWindow.setFocusable(true)
    mainWindow.setAlwaysOnTop(false)
    mainWindow.minimize()
  }
  if (button == "close") {
    app.quit()
  }
  if (button == "regainFocus") {
    FocusWindow(mainWindow)
  }
});

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})