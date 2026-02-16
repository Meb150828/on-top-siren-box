const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronBridge", {
    sendFromUnity: (msg) => {
        ipcRenderer.send("unity-event", msg);
    },
    openConfig: () => {
        ipcRenderer.send("open-config");
    },
    windowControl: (button) => {
        ipcRenderer.send("window-control", button);
    }
});