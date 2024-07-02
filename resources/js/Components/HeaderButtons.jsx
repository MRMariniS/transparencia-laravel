import React from "react";
import {
    FaChartBar,
    FaComment,
    FaHeadset,
    FaMoon,
    FaSun,
} from "react-icons/fa6";
import LoginPopover from "./LoginPopover";

function HeaderButtons({ darkMode, setDarkMode }) {
    return (
        <div className="w-56 flex flex-row justify-between items-center gap-4">
            <div className="flex justify-center items-center gap-4">
                <button className="hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg fill-gray-800 dark:fill-white hover:fill-white hover:dark:fill-gray-800">
                    <FaChartBar className="h-6 w-6 fill-inherit" />
                </button>
                <button className="hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg fill-gray-800 dark:fill-white hover:fill-white hover:dark:fill-gray-800">
                    <FaHeadset className="h-6 w-6 fill-inherit" />
                </button>
                <button className="hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg fill-gray-800 dark:fill-white hover:fill-white hover:dark:fill-gray-800">
                    <FaComment className="h-6 w-6 fill-inherit" />
                </button>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg fill-gray-800 dark:fill-white hover:fill-white hover:dark:fill-gray-800"
                >
                    {darkMode ? (
                        <FaMoon className="h-6 w-6 fill-inherit" />
                    ) : (
                        <FaSun className="h-6 w-6 fill-inherit" />
                    )}
                </button>
                <LoginPopover darkMode={darkMode} />
            </div>
        </div>
    );
}

export default HeaderButtons;
