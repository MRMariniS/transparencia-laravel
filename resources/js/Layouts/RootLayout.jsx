import { createContext, useMemo, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { DrawerMenu } from "../Components/DrawerMenu";
import { usePage } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";

export const PropsContext = createContext();

export default function RootLayout({ children }) {
    const { props } = usePage();
    const entidadeRota = props.entidadeRota;
    const app = props.app;

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode")
            ? JSON.parse(localStorage.getItem("darkMode"))
            : window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    const [open, setOpen] = useState(false);

    useMemo(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const date = new Date();
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const contextValue = useMemo(
        () => ({
            date,
            open,
            openDrawer,
            closeDrawer,
            app,
            darkMode,
            setDarkMode,
        }),
        [date, open, props, darkMode]
    );

    return (
        <div
            className={
                (darkMode ? "dark " : "") +
                "min-h-screen max-w-screen flex flex-1 flex-col justify-between items-center bg-white dark:bg-blue-900 text-gray-800 dark:text-white"
            }
        >
            <PropsContext.Provider value={contextValue}>
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
