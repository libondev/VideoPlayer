import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  readFile: filePath => ipcRenderer.invoke('readFile', filePath),
  unLinkFile: filePath => ipcRenderer.invoke('unLinkFile', filePath),
  onFileDataEnd: callback => ipcRenderer.on('fileDataEnd', callback),
  onFileDataChunk: callback => ipcRenderer.on('fileDataChunk', callback),
  onFileDataError: callback => ipcRenderer.on('fileDataError', callback),
  writeFile: (buffer, fileName) => ipcRenderer.invoke('writeFile', buffer, fileName)
});
