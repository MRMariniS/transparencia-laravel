import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { DrawerMenu } from "../Components/DrawerMenu";
import { BreadcrumbsWithIcon } from "../Components/BreadCrumbsWithIcon";
import { Link } from "@inertiajs/react";
import initialPage from "../../data/InitialPage";

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div
            className={
                (darkMode ? "dark " : "") +
                "min-h-screen max-w-screen flex flex-1 flex-col justify-between items-center bg-white dark:bg-blue-900 text-gray-800 dark:text-white"
            }
        >
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                open={open}
                setOpen={setOpen}
            />
            <DrawerMenu
                isDrawerOpen={open}
                openDrawer={openDrawer}
                closeDrawer={closeDrawer}
            />
            <main>{children}</main>
            <Footer darkMode={darkMode} />
        </div>
    );
}
