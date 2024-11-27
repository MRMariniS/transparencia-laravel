import { PropsContext } from "@/Layouts/RootLayout";
import { Link } from "@inertiajs/react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useContext } from "react";

export function MenuDefault({ props, entidadeRota }) {
    return (
        <Menu>
            <MenuHandler>
                <Button className="w-full h-24 bg-gray-50 dark:bg-blue-800">
                    {props.GLYPH && (
                        <img
                            src={`../../assets/images/${props.GLYPH}`}
                            alt={JSON.stringify(props.GLYPH)}
                        />
                    )}
                    <Typography className="text-gray-800 dark:text-white font-semibold">
                        {props.APRESENTACAO}
                    </Typography>
                </Button>
            </MenuHandler>
            <MenuList className="max-h-72">
                {props.submenu.map((sub) => (
                    <Link
                        key={sub.CODIGO}
                        href={sub.URL + "?entidade=" + entidadeRota}
                    >
                        <MenuItem className="flex flex-row gap-2">
                            {sub.GLYPH && (
                                <img
                                    src={`../../assets/images/${sub.GLYPH}`}
                                    alt={JSON.stringify(sub.GLYPH)}
                                    className="w-10 h-auto"
                                />
                            )}

                            <Typography className="text-gray-800 dark:text-white font-semibold">
                                {sub.APRESENTACAO}
                            </Typography>
                        </MenuItem>
                    </Link>
                ))}
            </MenuList>
        </Menu>
    );
}
