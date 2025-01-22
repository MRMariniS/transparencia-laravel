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
        <div className="w-fit h-full p-2 flex flex-row justify-between items-center gap-4">
            <div className="flex justify-center items-center gap-2">
                <Link
                    href={route("lgpd.index")}
                    className="interaction-color p-1 rounded-lg"
                >
                    <FaFileShield className="h-6 w-6 fill-inherit" />
                </Link>
                <Link
                    href={route("eouv.index")}
                    className="interaction-color p-1 rounded-lg"
                >
                    <FaHeadset className="h-6 w-6 fill-inherit" />
                </Link>

                <Link
                    href={route("esic.index")}
                    className="interaction-color p-1 rounded-lg"
                >
                    <FaComment className="h-6 w-6 fill-inherit" />
                </Link>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="interaction-color p-1 rounded-lg"
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
