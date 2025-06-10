const { app, BrowserWindow, Menu, global } = require('electron')

//Set env
process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV !== 'production' ? true : false
console.log('process.platform')

let mainWindow

function createMainWindow () {
    mainWindow = new BrowserWindow( {
    title: 'ImageShrink',
        width: 500,
        height: 600,
        icon: './assets/icons/Icon_256x256.png',
    })

    mainWindow.loadFile('app/index.html')
}

app.on('ready', () => {
    createMainWindow()

    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)

    mainWindow.on('ready', () => mainWindow = null)
})

const menu = [
    {
        label: 'File',
        submenu: [
            {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+W',
            click: () => app.quit()
            },
        ],
    },
]