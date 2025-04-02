import React, { useState } from "react";
import { Search, Terminal, Battery, Globe, Clock, FolderOpen } from "lucide-react";

const predefinedCommands = [
  { key: "open_browser", name: "Open Browser", icon: <Globe className="w-5 h-5 text-blue-500" /> },
  { key: "check_battery", name: "Check Battery", icon: <Battery className="w-5 h-5 text-green-500" /> },
  { key: "show_ip", name: "Show IP Address", icon: <Terminal className="w-5 h-5 text-gray-500" /> },
  { key: "check_time", name: "Check Time", icon: <Clock className="w-5 h-5 text-yellow-500" /> },
  { key: "open_documents", name: "Open Documents", icon: <FolderOpen className="w-5 h-5 text-purple-500" /> },
];

const pastelColors = [
  "bg-yellow-300 hover:bg-yellow-400",
  "bg-orange-300 hover:bg-orange-400",
  "bg-pink-300 hover:bg-pink-400",
  "bg-teal-300 hover:bg-teal-400",
  "bg-purple-300 hover:bg-purple-400",
];

const Commands = () => {
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState("");

  // Function to call Express API
  const runCommand = async (commandKey) => {
    setOutput("⌛ Running command...");

    try {
      const response = await fetch("http://localhost:5000/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commandKey }),
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      setOutput(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="p-6 font-raleway">
      {/* Search Bar */}
      <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 mb-4">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search commands..."
          className="w-full outline-none bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Command Buttons in a Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {predefinedCommands
          .filter((cmd) => cmd.name.toLowerCase().includes(search.toLowerCase()))
          .map((cmd, index) => (
            <button
              key={index}
              onClick={() => runCommand(cmd.key)}
              className={`p-4 rounded-lg text-white shadow-md transition-all flex items-center space-x-3 ${pastelColors[index % pastelColors.length]}`}
            >
              {cmd.icon}
              <span className="font-semibold">{cmd.name}</span>
            </button>
          ))}
      </div>

      {/* Command Output */}
      {output && (
        <div className="mt-4 p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700">
          <strong>Output:</strong>
          <pre className="mt-1 whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default Commands;
