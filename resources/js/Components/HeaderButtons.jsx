import React from "react";
import {
    FaComment,
    FaFileShield,
    FaHeadset,
    FaMoon,
    FaSun,
} from "react-icons/fa6";
import { Link } from "@inertiajs/react";
import { route } from "../../../vendor/tightenco/ziggy/src/js";

import LoginPopover from "./LoginPopover";

function HeaderButtons({ darkMode, setDarkMode }) {
    return (
        <div className="w-56 flex flex-row justify-between items-center gap-4">
            <div className="flex justify-center items-center gap-4">
                <Link
                    href={route("lgpd.index")}
                    className="hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg fill-gray-800 dark:fill-white hover:fill-white hover:dark:fill-gray-800"
                >
                    <FaFileShield className="h-6 w-6 fill-inherit" />
                </Link>
                <Link
                    href={route("eouv.index")}
                    className="hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg fill-gray-800 dark:fill-white hover:fill-white hover:dark:fill-gray-800"
                >
                    <FaHeadset className="h-6 w-6 fill-inherit" />
                </Link>

                <Link
                    href={route("esic.index")}
                    className="hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg fill-gray-800 dark:fill-white hover:fill-white hover:dark:fill-gray-800"
                >
                    <FaComment className="h-6 w-6 fill-inherit" />
                </Link>
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
