const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server');

const {connect_db} = require('./db/initialize')
const dbModels = require('./db/models')
const {dummyData} = require('./db/dummyData')
const contactController = require('./db/controller/contactController')

const menu = require('./menu')
let win;


//Connect to mongoDB
connect_db()


function createWindow() {
    win = new BrowserWindow({ width: 1920, height: 1080, webPreferences : {
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


/* ----------- IPC COMMUNICATIONS ----------- */


ipcMain.handle('getContacts', async (event, arg) => {
    return await contactController.getAllContacts()
})

ipcMain.handle('updateContact', async (event, arg) => {
    return await contactController.updateContact(JSON.parse(arg))
})

ipcMain.handle('createContact', async (event, arg) => {
    return await contactController.createContact(JSON.parse(arg))
})

ipcMain.handle('deleteContact', async (event, arg) => {
    return await contactController.deleteContact(JSON.parse(arg))
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