import React from "react";
import { FiSettings } from "react-icons/fi";
const Appearance = ({ theme, setTheme }) => {
    return (
        <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex gap-4 mb-4">
             <FiSettings className="mt-1"/>
            <p>Settings</p>
            </div>
            <h1 className="font-bold mb-4 text-xl">Appearance</h1>
            <div className="flex justify-between items-center">
                <p className="font-bold text-xl">Theme</p>
                <div className="flex space-x-4">
                    <button
                        className={`border border-gray-700 rounded-sm p-2 cursor-pointer ${
                            theme === "LIGHT" ? "bg-purple-700 text-white" : "hover:bg-purple-700"
                        }`}
                        onClick={() => setTheme("LIGHT")}
                    >
                        LIGHT
                    </button>
                    <button
                        className={`border border-gray-700 rounded-sm p-2 cursor-pointer ${
                            theme === "DARK" ? "bg-purple-700 text-white" : "hover:bg-purple-700"
                        }`}
                        onClick={() => setTheme("DARK")}
                    >
                        DARK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Appearance;
