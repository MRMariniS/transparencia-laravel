import React from "react";
import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";
import HeaderButtons from "./HeaderButtons";
import { FaBars } from "react-icons/fa6";
import { PropsContext } from "../Layouts/RootLayout";
import SelectDefault from "./SelectDefault";
import { SearchBar } from "./SearchBar";
import LogoTitle from "./LogoTitle";
import HeaderMenu from "./HeaderMenu";
import { usePage } from "@inertiajs/react";

function Header() {
    const { props } = usePage();
    const { openDrawer, darkMode, setDarkMode } =
        React.useContext(PropsContext);
    const empresa = props.empresas;
    const entidade = props.entidade;

    return (
        <header className="w-full h-fit px-4 py-2 lg:px-8 flex flex-col justify-center items-center gap-2 bg-gray-50 dark:bg-blue-800">
            <nav className="w-full flex flex-row items-center">
                <div className="w-full md:w-2/3 xl:w-2/5 flex flex-row justify-between items-center gap-2">
                    <button
                        onClick={openDrawer}
                        className="sm:hidden hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg fill-gray-800 dark:fill-white hover:fill-white hover:dark:fill-gray-800"
                    >
                        <FaBars className="w-6 h-6 fill-inherit" />
                    </button>
                    <LogoTitle
                        logo={darkMode ? logoWhite : logo}
                        empresa={empresa}
                    />
                </div>

                <div className="w-3/5 hidden xl:flex flex-row justify-end items-center gap-2">
                    {/* <div className="w-full hidden xl:flex flex-row justify-end items-center">
                        <HeaderMenu props={props} />
                    </div> */}
                    <HeaderButtons
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                </div>

                <div className="hidden w-1/3 md:flex flex-row justify-end items-center xl:hidden">
                    <HeaderButtons
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                </div>
            </nav>
            <div className="w-full flex flex-row items-center justify-between">
                <div className="w-full lg:w-1/2 flex flex-row justify-between lg:justify-start items-center gap-6">
                    <div className="w-full xl:w-2/3 flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-start items-center gap-4">
                            <button
                                onClick={openDrawer}
                                className="hidden sm:block p-1 rounded-lg interaction-color"
                            >
                                <FaBars className="w-6 h-6 fill-inherit" />
                            </button>
                            <div className="hidden sm:block">
                                <SelectDefault tipoempresa={empresa[0].TIPO} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden w-1/2 md:flex flex-row justify-end items-center">
                    <div className="xl:w-2/3">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
