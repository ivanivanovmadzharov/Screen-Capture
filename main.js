const {app, BrowserWindow} = require('electron')

// Is app ready and initialized? Show the app window
app.whenReady().then(() => {
    const windwow = new BrowserWindow({
        frame: false,
        transparent: true,
    })
    windwow.loadFile('index.html')
})