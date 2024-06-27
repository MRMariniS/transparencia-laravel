import { usePage } from "@inertiajs/react";
import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { PropsContext } from "./RootLayout";

function BaseLayout({ children }) {
    const { openDrawer } = useContext(PropsContext);

    return (
        <div>
            <div className="">
                <Button
                    className="interaction rounded-full"
                    onClick={openDrawer}
                >
                    <FaBars className="w-6 h-6" />
                </Button>
            </div>
            <div className="w-full h-full flex justify-between items-start p-4 lg:p-10 gap-4">
                {children}
            </div>
        </div>
    );
}

export default BaseLayout;
