import React from "react";
import { Home, TerminalSquare, StickyNote, Smile, BarChart, MessageSquare, Palette } from "lucide-react";

const Sidebar = ({ onSelect }) => {
    return (
        <div className="w-64 h-screen bg-white shadow-lg p-5 space-y-4 flex flex-col">
            <div className="relative inline-block rounded-full p-[2px] bg-gradient-to-r from-orange-500 via-pink-200 to-yellow-300 bg-[length:200%_200%] animate-gradient">
                <h2 className="text-xl font-bold font-kanit text-center text-gray-900 px-4 py-2 rounded-full bg-white">
                    Assistant
                </h2>
            </div>

            <nav className="space-y-4">
                <button onClick={() => onSelect("home")} className="flex items-center space-x-2 font-raleway text-gray-700 hover:text-black w-full text-left">
                    <Home className="w-5 h-5 text-orange-500" />
                    <span>Home</span>
                </button>

                <button onClick={() => onSelect("commands")} className="flex items-center space-x-2 font-raleway text-gray-700 hover:text-black w-full text-left">
                    <TerminalSquare className="w-5 h-5 text-pink-500" />
                    <span>Commands</span>
                </button>

                <button onClick={() => onSelect("notes")} className="flex items-center space-x-2 font-raleway text-gray-700 hover:text-black w-full text-left">
                    <StickyNote className="w-5 h-5 text-yellow-500" />
                    <span>Notes & Reminders</span>
                </button>

                <button onClick={() => onSelect("meme")} className="flex items-center space-x-2 font-raleway text-gray-700 hover:text-black w-full text-left">
                    <Smile className="w-5 h-5 text-orange-400" />
                    <span>Meme Mode</span>
                </button>

                <button onClick={() => onSelect("tracker")} className="flex items-center space-x-2 font-raleway text-gray-700 hover:text-black w-full text-left">
                    <BarChart className="w-5 h-5 text-pink-400" />
                    <span>Productivity Tracker</span>
                </button>

                <button onClick={() => onSelect("chatbot")} className="flex items-center space-x-2 font-raleway text-gray-700 hover:text-black w-full text-left">
                    <MessageSquare className="w-5 h-5 text-yellow-400" />
                    <span>Chatbot</span>
                </button>

                <button onClick={() => onSelect("theme")} className="flex items-center space-x-2 font-raleway text-gray-600 hover:text-gray-900 w-full text-left">
                    <Palette className="w-5 h-5 text-pink-500" />
                    <span>Theme</span>
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
