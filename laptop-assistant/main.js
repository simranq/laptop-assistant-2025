const { app, BrowserWindow, ipcMain } = require("electron");
const { exec } = require("child_process");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,  // Allows React to communicate with Electron
    },
  });

  mainWindow.loadURL("http://localhost:3000");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

// Listen for "run-command" from React
ipcMain.on("run-command", (event, command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      event.reply("command-output", `❌ Error: ${error.message}`);
      return;
    }
    if (stderr) {
      event.reply("command-output", `⚠️ Warning: ${stderr}`);
      return;
    }
    event.reply("command-output", `✅ Output:\n${stdout}`);
  });
});
