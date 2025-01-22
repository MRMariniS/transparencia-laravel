import React, { useContext } from "react";
import { Head, Link, router } from "@inertiajs/react";
import BaseLayout from "@/Layouts/BaseLayout";
import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography,
} from "@material-tailwind/react";
import { PropsContext } from "../../Layouts/RootLayout";

const PublicacoesIndex = ({ grupos_subgrupos }) => {
    const { darkMode } = useContext(PropsContext);

    return (
        <>
            <Head title="Painel de Grupos e Subgrupos de publicações" />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="flex flex-col w-full h-fit items-center justify-between gap-4">
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <div className="flex flex-col gap-2 text-justify indent-10">
                                <Typography
                                    variant="h4"
                                    className="text-xl indent-0 text-center"
                                >
                                    Grupos e Subgrupos de publicações
                                </Typography>
                                <Typography>
                                    Selecione a natureza de publicacões
                                </Typography>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-full h-fit gap-4 p-4 bg-gray-50 dark:bg-blue-800">
                            <Link
                                className="w-full h-24 flex justify-center items-center interaction-color rounded-lg"
                                key={"todas"}
                                href={route("documentos.index")}
                            >
                                <Typography className="text-inherit font-semibold">
                                    ACESSAR TODAS AS PUBLICAÇÕES
                                </Typography>
                            </Link>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {grupos_subgrupos.map((grupo) => (
                                    <Menu>
                                        <MenuHandler>
                                            <Button className="w-full h-24 interaction-color rounded-lg ">
                                                {grupo.GLYPH && (
                                                    <img
                                                        src={`../../assets/images/${grupo.GLYPH}`}
                                                        alt={JSON.stringify(
                                                            grupo.GLYPH
                                                        )}
                                                    />
                                                )}
                                                <Typography className="text-inherit font-semibold">
                                                    {grupo.DESCRICAO}
                                                </Typography>
                                            </Button>
                                        </MenuHandler>
                                        <MenuList
                                            className={`${
                                                darkMode ? "dark" : ""
                                            } flex flex-col gap-2 max-h-80 dark:bg-blue-900`}
                                        >
                                            {grupo.subgrupo_grupo.map((sub) => (
                                                <Link
                                                    key={sub.CODIGO}
                                                    href={"#"}
                                                >
                                                    <MenuItem className="flex flex-row gap-2 w-80 interaction-color">
                                                        {sub.GLYPH && (
                                                            <img
                                                                src={`../../assets/images/${sub.GLYPH}`}
                                                                alt={JSON.stringify(
                                                                    sub.GLYPH
                                                                )}
                                                                className="w-10 h-auto"
                                                            />
                                                        )}

                                                        <Typography className="text-inherit font-semibold">
                                                            {sub.DESCRICAO}
                                                        </Typography>
                                                    </MenuItem>
                                                </Link>
                                            ))}
                                        </MenuList>
                                    </Menu>
                                ))}
                            </div>
                        </div>
                    </div>
                </BaseLayout>
            </div>
        </>
    );
};

export default PublicacoesIndex;
