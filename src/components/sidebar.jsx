import React, { useState } from "react";
import Appearance from "./appearance";
import {FaGreaterThan,FaLessThan} from "react-icons/fa"

const Sidebar = ({ theme, setTheme }) => {
    const [active, setActive] = useState("settings");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div className={`fixed top-0 z-48 h-screen transition-transform duration-300 ${isOpen ? "right-0 w-84" : "-right-84 w-0"} ${theme === "DARK" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} overflow-hidden`}>
                {isOpen && (
                    <div className="p-4">
                        <h1 className="text-2xl font-bold mb-4">Cartify</h1>
                        <hr className="mb-4" />

                        <div className="flex gap-2 space-y-2">
                            <button 
                                className={`py-2 px-4 rounded ${active === "settings" ? "bg-purple-600 text-white" : "hover:bg-gray-500"}`}
                                onClick={() => setActive("settings")}
                            >
                                Settings
                            </button>
                            <button 
                                className={`py-2 px-4 rounded ${active === "contact" ? "bg-purple-600 text-white" : "hover:bg-gray-500"}`}
                                onClick={() => setActive("contact")}
                            >
                                Contact Us
                            </button>
                            <button 
                                className={`py-2 px-4 rounded ${active === "help" ? "bg-purple-600 text-white" : "hover:bg-gray-500"}`}
                                onClick={() => setActive("help")}
                            >
                                Help
                            </button>
                        </div>

                        <div className="mt-4">
                            {active === "settings" && <Appearance theme={theme} setTheme={setTheme} />}
                            {active === "contact" && <h1 className="text-xl">Contact Us</h1>}
                            {active === "help" && <h1 className="text-xl">Help</h1>}
                        </div>
                    </div>
                )}
            </div>
            <div 
                className={`fixed top-20 z-48  transform -translate-y-1/2 p-3 rounded-l cursor-pointer transition-all duration-300 ${isOpen ? "right-84" : "right-0"} ${theme ==="DARK"?"bg-white":"bg-gray-400"}`}
                onClick={() => {setIsOpen(!isOpen)}}
            >
               {isOpen?<FaGreaterThan className="text-sm text-black"/>:<FaLessThan className="text-sm text-black"/>}
            </div>
        </div>
    );
};

export default Sidebar;
