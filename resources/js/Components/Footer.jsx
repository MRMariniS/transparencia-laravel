import React from "react";

import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";

function Footer({ darkMode, setDarkMode }) {
    return (
        <footer className="w-full h-fit pb-2 flex flex-col justify-between items-center bg-gray-50 dark:bg-blue-800">
            <nav>
                <img
                    src={darkMode ? logoWhite : logo}
                    className="w-20 h-auto"
                />
            </nav>
        </footer>
    );
}

export default Footer;
