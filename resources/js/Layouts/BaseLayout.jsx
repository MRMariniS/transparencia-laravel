import { usePage } from "@inertiajs/react";
import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa6";
import { PropsContext } from "./RootLayout";
import { SearchBar } from "../Components/SearchBar";
import SelectDefault from "../Components/SelectDefault";
import HeaderButtons from "../Components/HeaderButtons";

function BaseLayout({ children }) {
    const { darkMode, setDarkMode } = useContext(PropsContext);

    return (
        <div className="container py-4 px-4 md:px-0">
            <div className="lg:hidden flex flex-col items-center pb-4 gap-4">
                <div className="w-full lg:w-fit sm:hidden flex flex-row justify-center items-center gap-4">
                    <HeaderButtons
                        darkMode={darkMode && darkMode}
                        setDarkMode={setDarkMode && setDarkMode}
                    />
                </div>

                <div className="w-full lg:w-fit sm:hidden flex flex-row justify-start items-center gap-4">
                    <SelectDefault />
                </div>

                <div className="w-full">
                    <SearchBar />
                </div>
            </div>
            <div className="w-full h-full flex justify-between items-start gap-4">
                {children}
            </div>
        </div>
    );
}

export default BaseLayout;
