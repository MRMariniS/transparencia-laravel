import { PropsContext } from "@/Layouts/RootLayout";
import { Link, router } from "@inertiajs/react";
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
    const { darkMode } = useContext(PropsContext);

    return (
        <Menu>
            {props.CODIGO == 10 ? (
                <>
                    <Link
                        className="w-full h-24 interaction-color flex justify-center items-center"
                        href={"aplicacoes/publicacoes?entidade=" + entidadeRota}
                    >
                        {props.GLYPH && (
                            <img
                                src={`../../assets/images/${props.GLYPH}`}
                                alt={JSON.stringify(props.GLYPH)}
                            />
                        )}
                        <Typography className="text-inherit font-semibold">
                            {props.APRESENTACAO}
                        </Typography>
                    </Link>
                </>
            ) : (
                <>
                    <MenuHandler>
                        <Button className="w-full h-24 interaction-color">
                            {props.GLYPH && (
                                <img
                                    src={`../../assets/images/${props.GLYPH}`}
                                    alt={JSON.stringify(props.GLYPH)}
                                />
                            )}
                            <Typography className="text-inherit font-semibold">
                                {props.APRESENTACAO}
                            </Typography>
                        </Button>
                    </MenuHandler>
                    <MenuList
                        className={`${
                            darkMode ? "dark" : ""
                        } flex flex-col gap-2 max-h-80 dark:bg-blue-900`}
                    >
                        {props.submenu.map((sub) => (
                            <Link
                                key={sub.CODIGO}
                                href={sub.URL + "?entidade=" + entidadeRota}
                            >
                                <MenuItem className="flex flex-row gap-2 interaction-color">
                                    {sub.GLYPH && (
                                        <img
                                            src={`../../assets/images/${sub.GLYPH}`}
                                            alt={JSON.stringify(sub.GLYPH)}
                                            className="w-10 h-auto"
                                        />
                                    )}

                                    <Typography className="text-inherit font-semibold">
                                        {sub.APRESENTACAO}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </MenuList>
                </>
            )}
        </Menu>
    );
}
