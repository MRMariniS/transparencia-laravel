import React from "react";
import { Head } from "@inertiajs/react";
import BaseLayout from "@/Layouts/BaseLayout";
import {
    Button,
    Menu,
    MenuHandler,
    Typography,
} from "@material-tailwind/react";

const PublicacoesIndex = ({ grupos_subgrupos }) => {
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {grupos_subgrupos.map((grupo) => (
                                <Menu>
                                    <MenuHandler>
                                        <Button className="w-full h-24 bg-gray-50 dark:bg-blue-800">
                                            {grupo.GLYPH && (
                                                <img
                                                    src={`../../assets/images/${grupo.GLYPH}`}
                                                    alt={JSON.stringify(
                                                        grupo.GLYPH
                                                    )}
                                                />
                                            )}
                                            <Typography className="text-gray-800 dark:text-white font-semibold">
                                                {grupo.DESCRICAO}
                                            </Typography>
                                        </Button>
                                    </MenuHandler>
                                    <MenuList className="max-h-72">
                                        {grupo.subgrupo_grupo.map((sub) => (
                                            <Link
                                                key={sub.CODIGO}
                                                href={
                                                    sub.URL +
                                                    "?entidade=" +
                                                    entidadeRota
                                                }
                                            >
                                                <MenuItem className="flex flex-row gap-2">
                                                    {sub.GLYPH && (
                                                        <img
                                                            src={`../../assets/images/${sub.GLYPH}`}
                                                            alt={JSON.stringify(
                                                                sub.GLYPH
                                                            )}
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
                            ))}
                        </div>
                    </div>
                </BaseLayout>
            </div>
        </>
    );
};

export default PublicacoesIndex;
