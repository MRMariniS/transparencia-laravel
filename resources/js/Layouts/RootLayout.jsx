import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    return (
        <div
            className={
                (darkMode ? "dark " : "") +
                "min-h-screen max-w-screen flex flex-1 flex-col justify-between items-center bg-white dark:bg-blue-900 text-gray-800 dark:text-white"
            }
        >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>{children}</main>
            <Footer darkMode={darkMode} />
        </div>
    );
}
