const { Menu, shell } = require('electron')
const { BrowserWindow } = require('electron')

const template = [
    {
        label: 'File',
        submenu: [
            {
                label: 'new-contact',
                click() {
                    const window = BrowserWindow.getFocusedWindow();
                    window.webContents.send('new-contact', 'hehe')
                }
            }
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'About Editor Component',
                click() {
                }
            }]
    },
    {
        label: 'Debugging',
        submenu: [
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'reload' }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
module.exports = menu