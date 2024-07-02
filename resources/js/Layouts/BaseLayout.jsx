import { usePage } from "@inertiajs/react";
import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa6";
import { PropsContext } from "./RootLayout";
import { SearchBar } from "../Components/SearchBar";
import SelectDefault from "../Components/SelectDefault";

function BaseLayout({ children }) {
    return (
        <div className="container py-4">
            <div className="lg:hidden flex flex-col items-center pb-4 gap-4">
                <div className="w-full lg:w-fit flex flex-row justify-start items-center gap-4">
                    <SelectDefault />
                </div>

                <SearchBar />
            </div>
            <div className="w-full h-full flex justify-between items-start gap-4">
                {children}
            </div>
        </div>
    );
}

export default BaseLayout;
