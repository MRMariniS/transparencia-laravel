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
import { SearchBar } from "./SearchBar";
import { MainNavbar } from "./MainNavbar";

DrawerMenu;

function Header({ darkMode, setDarkMode, open, setOpen }) {
    const drawerControl = () => setOpen(!open);
    return (
        <header className="w-full h-fit flex flex-col justify-center items-center bg-gray-50 dark:bg-blue-800">
            <MainNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>
    );
}

export default Header;
