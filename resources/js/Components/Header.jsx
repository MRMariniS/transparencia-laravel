import {
    FaBars,
    FaChartBar,
    FaComment,
    FaHeadset,
    FaMagnifyingGlass,
    FaMoon,
    FaSun,
} from "react-icons/fa6";
import { Link } from "@inertiajs/react";

import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";

import LoginPopover from "@/Components/LoginPopover";
import SelectDefault from "./SelectDefault";

function Header({ darkMode, setDarkMode }) {
    return (
        <header className="w-full h-fit flex flex-col justify-center items-center bg-gray-50 dark:bg-blue-800">
            <nav className="w-full h-full flex flex-row justify-between items-center px-10 py-2">
                <div className="w-1/2 flex flex-col justify-start items-center">
                    <div className="w-full h-full flex flex-row justify-start items-center gap-4">
                        <Link href="/">
                            <img
                                src={darkMode ? logoWhite : logo}
                                className="w-16 h-auto"
                                alt="Brasão do município"
                            />
                        </Link>
                        <h1 className="text-3xl font-semibold uppercase">
                            Portal da Transparência
                        </h1>
                    </div>
                    <div className="w-full flex flex-row justify-start items-center gap-4">
                        <FaBars className="w-6 h-6" />
                        <h3 className="text-xl">Município de Modelândia</h3>
                        <SelectDefault darkMode={darkMode} />
                    </div>
                </div>

                <div className="w-1/2 flex flex-col justify-center items-end gap-2">
                    <div className="w-1/2 flex flex-row justify-between items-center gap-4">
                        <div className="flex justify-center items-center gap-5">
                            <FaChartBar className="h-6 w-6 fill-interaction-light dark:fill-interaction-dark" />
                            <FaHeadset className="h-6 w-6 fill-interaction-light dark:fill-interaction-dark" />
                            <FaComment className="h-6 w-6 fill-interaction-light dark:fill-interaction-dark" />
                            <button onClick={() => setDarkMode(!darkMode)}>
                                {darkMode ? (
                                    <FaMoon className="h-6 w-6 fill-gray-800 dark:fill-white" />
                                ) : (
                                    <FaSun className="h-6 w-6 fill-interaction-light dark:fill-interaction-dark" />
                                )}
                            </button>
                        </div>
                        <LoginPopover darkMode={darkMode} />
                    </div>

                    <div className="w-1/2 flex justify-between items-center rounded-lg text-base font-bold gap-2">
                        <input
                            className="h-full w-5/6 rounded-lg text-base bg-white dark:bg-blue-900 focus:outline-none border-white text-gray-800 dark:text-white"
                            type="search"
                            name="search"
                            placeholder="O que você procura?"
                        />
                        <button
                            className="interaction h-full w-1/6 flex justify-center items-center"
                            type="submit"
                        >
                            <FaMagnifyingGlass className="h-6 w-6 fill-interaction-light dark:fill-interaction-dark" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
