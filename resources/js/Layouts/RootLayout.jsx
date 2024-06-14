import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    return (
        <div className="min-h-screen w-screen flex flex-1 flex-col justify-between items-center bg-white dark:bg-blue-900">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>{children}</main>
            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
}
