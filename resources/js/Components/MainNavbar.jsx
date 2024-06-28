import React from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Card,
    Collapse,
} from "@material-tailwind/react";
import LogoTitle from "./LogoTitle";
import initialPage from "../../data/InitialPage";

import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";
import { Link } from "@inertiajs/react";
import LoginPopover from "./LoginPopover";
import HeaderButtons from "./HeaderButtons";
import { FaBars, FaX } from "react-icons/fa6";

export function MainNavbar({ darkMode, setDarkMode }) {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
        <Navbar className="top-0 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-gray-50 dark:bg-blue-800 border-none shadow-none">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <LogoTitle
                        logo={darkMode ? logoWhite : logo}
                        title={initialPage.entidade[0].NOME}
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="hidden lg:flex flex-row justify-center items-center gap-2">
                        <HeaderButtons
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                        />
                        <LoginPopover darkMode={darkMode} />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <FaX className="defaultIcon text-gray-800 dark:text-white" />
                        ) : (
                            <FaBars className="defaultIcon text-gray-800 dark:text-white" />
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                <div className="flex flex-row justify-center items-center gap-2">
                    <HeaderButtons
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                    <LoginPopover darkMode={darkMode} />
                </div>
            </Collapse>
        </Navbar>
    );
}
