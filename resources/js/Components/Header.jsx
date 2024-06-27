import { useState } from "react";
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
import { Button } from "@material-tailwind/react";

import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";
import initialPage from "../../data/InitialPage";

import LoginPopover from "@/Components/LoginPopover";
import SelectDefault from "./SelectDefault";
import { DrawerMenu } from "./DrawerMenu";
import { BreadcrumbsWithIcon } from "./BreadCrumbsWithIcon";

DrawerMenu;

function Header({ darkMode, setDarkMode, open, setOpen }) {
    const drawerControl = () => setOpen(!open);
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
                        <Button
                            className="interaction rounded-full"
                            onClick={drawerControl}
                        >
                            <FaBars className="w-6 h-6" />
                        </Button>
                        <h3 className="text-xl">
                            {initialPage.entidade[0].NOME}
                        </h3>
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
            <div className="px-10 pb-2 w-full h-fit flex flex-row justify-between items-center">
                <BreadcrumbsWithIcon />
                <div className="flex flex-row justify-between items-center gap-4">
                    {initialPage.menus.menuSuperior.map((menu) => (
                        <Link key={menu.CODIGO} href="#" className="text-lg">
                            {menu.APRESENTACAO}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
