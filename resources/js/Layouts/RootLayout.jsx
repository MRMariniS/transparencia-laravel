import { createContext, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { DrawerMenu } from "../Components/DrawerMenu";
import { usePage } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";

export const PropsContext = createContext();

export default function RootLayout({ children }) {

    const { app } = usePage().props;
    const {props} = usePage();

    const [darkMode, setDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    const [open, setOpen] = useState(false);
    const [poderSelecionado, setPoderSelecionado] = useState("executivo");

    const date = new Date();
    const poder = [
        { value: "executivo", nome: "Executivo" },
        { value: "legislativo", nome: "Legislativo" },
        { value: "instituto", nome: "Previdência" },
    ];

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const trocaPoder = (value) => setPoderSelecionado(value);

    return (
        <div
            className={
                (darkMode ? "dark " : "") +
                "min-h-screen max-w-screen flex flex-1 flex-col justify-between items-center bg-white dark:bg-blue-900 text-gray-800 dark:text-white"
            }
        >
            <PropsContext.Provider
                value={{
                    date,
                    open,
                    openDrawer,
                    closeDrawer,
                    poder,
                    poderSelecionado,
                    trocaPoder,
                    app,
                    props,
                    darkMode,
                    setDarkMode
                }}
            >
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <DrawerMenu
                    isDrawerOpen={open}
                    openDrawer={openDrawer}
                    closeDrawer={closeDrawer}
                />
                <main>{children}</main>
                <Footer darkMode={darkMode} />
                <div className="w-full h-fit py-1 bg-text-xs text-center bg-black">
                    <Typography className="text-white">
                        Copyright © Pública Tecnologia {date.getFullYear()}.
                        Todos os direitos reservados. Versão {app.version}
                    </Typography>
                </div>
            </PropsContext.Provider>
        </div>
    );
}
