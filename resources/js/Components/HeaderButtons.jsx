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
            <div className="flex justify-center items-center gap-5">
                <FaChartBar className="h-6 w-6  fill-gray-800 dark:fill-white" />
                <FaHeadset className="h-6 w-6  fill-gray-800 dark:fill-white" />
                <FaComment className="h-6 w-6  fill-gray-800 dark:fill-white" />
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <FaMoon className="h-6 w-6  fill-gray-800 dark:fill-white" />
                    ) : (
                        <FaSun className="h-6 w-6  fill-gray-800 dark:fill-white" />
                    )}
                </button>
                <LoginPopover darkMode={darkMode} />
            </div>
        </div>
    );
}

export default HeaderButtons;
