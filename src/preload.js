// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

window.addEventListener('mousemove', ()=>{
  window.close();
});
window.addEventListener('mouseclick', ()=>{
  window.close();
});

window.addEventListener('keydown', ()=>{
  window.close();
});

