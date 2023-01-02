// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// const {ipcRenderer} = require('electron');

// Right after the line where you changed the document.location
// ipcRenderer.send('resize-me-please')
// ipcRenderer.send('resize-window', 1280, 720)


window.addEventListender('mousemove', ()=>{
    window.close();
  });
  
  window.addEventListener('keyup', app.quit(), true)

