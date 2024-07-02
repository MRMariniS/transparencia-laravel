import { Link } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";
import React from "react";

function HeaderMenu({ menuSuperior }) {
    return (
        <ul className="w-full h-fit hidden lg:flex flex-row justify-end items-center gap-6">
            {menuSuperior.map((menu) => (
                <Link
                    key={menu.CODIGO}
                    href={menu.URL}
                    className="hover:bg-blue-700 hover:dark:bg-sky-200 p-1 rounded-lg dark:text-white hover:text-white hover:dark:text-gray-800"
                >
                    <Typography
                        as="li"
                        className="text-lg text-gray-800 text-inherit"
                    >
                        {menu.APRESENTACAO}
                    </Typography>
                </Link>
            ))}
        </ul>
    );
}

export default HeaderMenu;
