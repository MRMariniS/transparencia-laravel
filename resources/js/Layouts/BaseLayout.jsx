import React, { useContext } from "react";
import { PropsContext } from "./RootLayout";
import { SearchBar } from "../Components/SearchBar";
import SelectDefault from "../Components/SelectDefault";
import HeaderButtons from "../Components/HeaderButtons";
import { BreadcrumbsWithIcon } from "../Components/BreadCrumbsWithIcon";
import { usePage } from "@inertiajs/react";
import HeaderMenu from "../Components/HeaderMenu";

function BaseLayout({ children }) {
    const { darkMode, setDarkMode } = useContext(PropsContext);
    const { props } = usePage();

    return (
        <div className="container py-4 px-4 md:px-0">
            <div className="md:hidden flex flex-col items-center pb-4 gap-4">
                <div className="w-full lg:w-fit sm:hidden flex flex-row justify-center items-center gap-4">
                    <HeaderButtons
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                </div>

                <div className="w-full lg:w-fit sm:hidden flex flex-row justify-start items-center gap-4">
                    <SelectDefault />
                </div>

                <div className="w-full">
                    <SearchBar />
                </div>
            </div>
            <div className="flex flex-row w-full h-fit justify-between items-center mb-4">
                <BreadcrumbsWithIcon />
                <HeaderMenu props={props} />
            </div>
            <div className="w-full h-full flex justify-between items-start gap-4">
                {children}
            </div>
        </div>
    );
}

export default BaseLayout;
