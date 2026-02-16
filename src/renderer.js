const { ipcRenderer } = require('electron')

ipcRenderer.on('focus-unity', () => {
  const Iframe = document.getElementById('unityFrame')
  if (Iframe && Iframe.contentWindow) {
    Iframe.contentWindow.postMessage({ type: 'FOCUS_UNITY' }, '*')
  }
})