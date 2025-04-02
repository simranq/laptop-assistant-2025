const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

// Allowed commands (to prevent running unsafe system commands)
const allowedCommands = {
    "open_browser": "start msedge",
    "check_battery": "wmic path Win32_Battery get EstimatedChargeRemaining",
    "show_ip": "ipconfig",
    "check_time": "time /t",
    "open_documents": "start explorer",
};

// Root route
app.get("/", (req, res) => {
    res.send("Server is running. Use the /execute endpoint to run commands.");
});

// Command execution API
app.post("/execute", (req, res) => {
    const { commandKey } = req.body;

    // Check if command is allowed
    if (!allowedCommands[commandKey]) {
        return res.json({ output: "Invalid or unauthorized command." });
    }

    // Execute the allowed command
    exec(allowedCommands[commandKey], (error, stdout, stderr) => {
        if (error) {
            return res.json({ output: `Error: ${error.message}` });
        }
        if (stderr) {
            return res.json({ output: `Error: ${stderr}` });
        }
        res.json({ output: stdout.trim() });
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
