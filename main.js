console.log("Processo principal")

const { app, BrowserWindow, nativeTheme } = require('electron')

// Janela principal 
let win
const createWindow = () => {
    // a linha abaixo define o tema (claro ou escuro)
    nativeTheme.themeSource = 'dark' //se quiser tema claro colocar 'light'
    win = new BrowserWindow({
        width: 800,
        height: 600,
        //autoHideMenuBar: true,    //Minimizar a tela
        //minimizable: false,      //Não deixar diminuir a tela manualmente
        resizable: false
    })

    win.loadFile('./src/views/index.html')
}

// Iniciar a aplicação  
app.whenReady().then(() => {
    createWindow()
})

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})