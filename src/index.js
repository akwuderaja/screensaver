const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
const {ipcMain} = require('electron')

// ipcMain.on('resize-window', (event, width, height) => {
//     let browserWindow = BrowserWindow.fromWebContents(event.sender)
//     browserWindow.setSize(width,height)
// })
app.on('ready', () => {
    // Register a shortcut listener for Ctrl + Shift + I
    globalShortcut.register('Control+Shift+I', () => {
        // When the user presses Ctrl + Shift + I, this function will get called
        // You can modify this function to do other things, but if you just want
        // to disable the shortcut, you can just return false
        return false;
    });
    globalShortcut.register('Esc', () => {
        app.quit()
    });
    globalShortcut.register('Space', () => {
        app.quit()
    });
    
    app.addListener("keydown", ()=>{app.quit()}, true);
    app.addListener("keyup", ()=>{app.quit()}, true);
    app.addListener("mousemove", ()=>{app.quit()}, true);
    
  var date0 = new Date(2023, 0, 1); // 1 Jan 2015
  var date1 = new Date(); 

  var numberOfDays = Math.ceil((date1 - date0) / 8.64e7);
  if(numberOfDays>= 7){
    app.quit();
    return;
  }
});
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame: false,
    show: true,
    // win.maximize();
    // win.show();
    fullscreen: true,
    acceptFirstMouse: true,
    alwaysOnTop: true,
    minimizable: false,
    icon: path.join(__dirname, 'images/logo.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: false,
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
    },
  });
  mainWindow.hookWindowMessage(0x200, () => {
    app.quit();
  });
  mainWindow.hookWindowMessage(0x202, () => {
    app.quit();
  });



  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
