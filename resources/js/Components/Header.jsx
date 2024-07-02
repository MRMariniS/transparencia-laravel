import { Button, Typography } from "@material-tailwind/react";

import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";
import initialPage from "../../data/InitialPage";

import { Link } from "@inertiajs/react";
import HeaderButtons from "./HeaderButtons";
import LoginPopover from "./LoginPopover";
import { FaBars } from "react-icons/fa6";
import { useContext } from "react";
import { PropsContext } from "../Layouts/RootLayout";
import SelectDefault from "./SelectDefault";
import { SearchBar } from "./SearchBar";
import LogoTitle from "./LogoTitle";
import HeaderMenu from "./HeaderMenu";

function Header({ darkMode, setDarkMode }) {
    const { open, openDrawer } = useContext(PropsContext);

    return (
        <header className="w-full h-fit px-4 py-2 lg:px-8 flex flex-col justify-center items-center gap-2 bg-gray-50 dark:bg-blue-800">
            <nav className="w-full flex flex-row items-center">
                <LogoTitle logo={darkMode ? logoWhite : logo} />
                <div className="w-3/5 flex flex-row justify-between items-center gap-6">
                    <HeaderMenu menuSuperior={initialPage.menus.menuSuperior} />
                    <HeaderButtons
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                </div>
            </nav>
            <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-6">
                    <button
                        onClick={openDrawer}
                        className="hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg fill-gray-800 dark:fill-white hover:fill-white hover:dark:fill-gray-800"
                    >
                        <FaBars className="w-6 h-6 fill-inherit" />
                    </button>

                    <Typography className="text-2xl">
                        {initialPage.entidade[0].NOME}
                    </Typography>

                    <SelectDefault />
                </div>

                <SearchBar />
            </div>
        </header>
    );
}

export default Header;
