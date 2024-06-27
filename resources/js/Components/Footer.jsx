import { usePage } from "@inertiajs/react";

import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";

import Banners from "./Banners";
import DadosMunicipio from "./DadosMunicipio";
import RedesSociais from "./RedesSociais";

function Footer({ darkMode }) {
    const date = new Date();
    const { app } = usePage().props;

    return (
        <footer className="w-full h-fit px-4 py-2 flex flex-col justify-between items-center gap-2 bg-gray-50 dark:bg-blue-800">
            <div className="lg:container w-full h-fit flex flex-col justify-end items-center gap-2">
                <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center gap-4">
                    <img
                        src={darkMode ? logoWhite : logo}
                        className="w-20 h-auto"
                    />
                    <DadosMunicipio />
                </div>
                <div className="w-full h-fit flex flex-col lg:flex-row gap-4 justify-between items-center">
                    <RedesSociais />
                    <Banners orientation={"lg:flex-row"} />
                </div>
            </div>
            <div className="text-xs text-center">
                Copyright © Pública Tecnologia {date.getFullYear()}. Todos os
                direitos reservados. Versão {app.version}
            </div>
        </footer>
    );
}

export default Footer;
