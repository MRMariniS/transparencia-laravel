import React from "react";

import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";
import Banners from "./Banners";
import DadosMunicipio from "./DadosMunicipio";
import RedesSociais from "./RedesSociais";
import { PropsContext } from "@/Layouts/RootLayout";
import { usePage } from "@inertiajs/react";

function Footer({ darkMode }) {
    const { props } = usePage();
    const empresa = props.empresas;

    return (
        <footer className="w-full h-fit px-4 py-2 flex flex-col justify-between items-center gap-2 bg-gray-50 dark:bg-blue-800">
            <div className="container w-full h-fit flex flex-col justify-end items-center gap-2">
                <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center gap-4">
                    <img
                        src={darkMode ? logoWhite : logo}
                        className="w-20 h-auto"
                    />
                    <DadosMunicipio empresa={empresa} />
                </div>
                <div className="w-full h-fit flex flex-col lg:flex-row gap-4 justify-between items-center">
                    <div className="w-full lg:w-1/4 h-fit flex flex-col gap-2 items-center">
                        <RedesSociais props={props} />
                    </div>

                    <div className="w-full lg:w-3/4 h-fit flex flex-col gap-2 items-center">
                        <Banners />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
