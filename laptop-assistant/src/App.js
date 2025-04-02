import React, { useState } from "react";
import { motion } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Sidebar from "./components/Sidebar";
import Commands from "./components/Commands"; // ✅ Import Commands Component

const MainContent = ({ section }) => {
  return (
    <motion.div
      key={section}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 text-black bg-light-pattern min-h-screen p-8"
    >
      <h1 className="text-4xl font-kanit">
        {section === "home" && "Home"}
        {section === "commands" && "Commands"}
        {section === "notes" && "Notes & Reminders"}
        {section === "meme" && "Meme Mode"}
        {section === "tracker" && "Productivity Tracker"}
        {section === "chatbot" && "Chatbot"}
        {section === "theme" && "Theme Settings"}
      </h1>

      <p className="font-raleway text-gray-600 mt-4">
        {section === "home" && "Welcome to your desktop assistant."}
        {section === "commands" && "Manage and execute various commands efficiently."}
        {section === "notes" && "Keep track of important notes and reminders."}
        {section === "meme" && "Relax and have fun with memes."}
        {section === "tracker" && "Monitor your productivity and progress."}
        {section === "chatbot" && "Interact with an AI chatbot for assistance."}
        {section === "theme" && "Customize your assistant’s appearance."}
      </p>

      {/* ✅ Show Commands component when 'commands' is active */}
      {section === "commands" && <Commands />}
    </motion.div>
  );
};

function App() {
  const [isSplashFinished, setIsSplashFinished] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="white">
      {!isSplashFinished ? (
        <SplashScreen onFinish={() => setIsSplashFinished(true)} />
      ) : (
        <div className="flex">
          <Sidebar onSelect={setActiveSection} />
          <MainContent section={activeSection} />
        </div>
      )}
    </div>
  );
}

export default App;
