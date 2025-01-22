import { PropsContext } from "@/Layouts/RootLayout";
import { Link } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";

function HeaderMenu({ props }) {
    const menuSuperior = props.menus.menuSuperior;

    return (
        <ul className="w-fit h-full hidden lg:flex flex-row justify-center items-center gap-2">
            {menuSuperior.map((menu) => (
                <Link
                    key={menu.CODIGO}
                    href={menu.URL}
                    className="hover:interaction-color-hover py-1 px-2 rounded-lg "
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
