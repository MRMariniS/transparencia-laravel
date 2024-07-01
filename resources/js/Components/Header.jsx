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

function Header({ darkMode, setDarkMode }) {
    const { open, openDrawer } = useContext(PropsContext);

    console.log(initialPage.entidade);
    const navList = (
        <ul className="w-full h-fit hidden lg:flex flex-row justify-end items-center gap-6">
            {initialPage.menus.menuSuperior.map((menu) => (
                <Link key={menu.CODIGO} href={menu.URL}>
                    <Typography
                        as="li"
                        className="text-lg text-gray-800 dark:text-white"
                    >
                        {menu.APRESENTACAO}
                    </Typography>
                </Link>
            ))}
        </ul>
    );

    return (
        <header className="w-full h-fit px-4 py-2 lg:px-8 flex flex-col justify-center items-center gap-2 bg-gray-50 dark:bg-blue-800">
            <nav className="w-full flex flex-row items-center">
                <div className="w-2/5 flex flex-row items-center gap-2">
                    <img
                        src={darkMode ? logoWhite : logo}
                        alt="Brasão do Município"
                        className="hidden lg:inline-block h-12 w-auto"
                    />
                    <Typography className="mr-4 uppercase text-3xl">
                        Portal da Transparência
                    </Typography>
                </div>
                <div className="w-3/5 flex flex-row justify-between items-center gap-6">
                    {navList}
                    <HeaderButtons
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                </div>
            </nav>
            <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-6">
                    <button onClick={openDrawer}>
                        <FaBars className="w-6 h-6" />
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
