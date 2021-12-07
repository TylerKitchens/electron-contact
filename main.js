const { app, BrowserWindow, Menu, ipcMain } = require('electron')

const menu = require('./menu')
let win;

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600, webPreferences : {
        nodeIntegration: false,
        preload: __dirname + '/preload.js',
        contextIsolation: false,
    } });

    console.log(__dirname + '/preload.js')
    if (process.env.DEBUG) {
        win.loadURL(`http://localhost:3000`);
    } else {
        win.loadURL(`file://${__dirname}/build/index.html`);
    }
    win.on('closed', () => {
        win = null;
    });
}
app.on('ready', createWindow);

ipcMain.on('new-contact', (e, msg) => {
    console.log('do something')
})

Menu.setApplicationMenu(menu)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});