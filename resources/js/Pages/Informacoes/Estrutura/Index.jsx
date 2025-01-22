import BaseLayout from "@/Layouts/BaseLayout";
import { Head, Link } from "@inertiajs/react";
import { Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import React from "react";

const Estratura = ({ tiposEstrutura, breadcrumbs }) => {
    console.log(tiposEstrutura, breadcrumbs);
    return (
        <>
            <Head title="Estrutura Organizacional" />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="flex flex-col w-full h-fit items-center justify-between gap-4">
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <div className="flex flex-col gap-2 text-justify indent-10">
                                <Typography
                                    variant="h4"
                                    className="text-xl indent-0 text-center"
                                >
                                    Estrutra Organizacional
                                </Typography>
                                <Typography>
                                A estrutura organizacional define a divisão de responsabilidades, funções e hierarquia entre os órgãos e entidades governamentais, visando a eficiência na administração dos recursos e serviços para a sociedade.
                                </Typography>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {tiposEstrutura.map((tipo) => (
                                <Menu>
                                    <MenuHandler>
                                        <Button className="w-full h-24 bg-gray-50 dark:bg-blue-800">
                                            {/* {grupo.GLYPH && (
                                                <img
                                                    src={`../../assets/images/${grupo.GLYPH}`}
                                                    alt={JSON.stringify(
                                                        grupo.GLYPH
                                                    )}
                                                />
                                            )} */}
                                            <Typography className="text-gray-800 dark:text-white font-semibold">
                                                {tipo.DESCRICAO}
                                            </Typography>
                                        </Button>
                                    </MenuHandler>
                                    <MenuList className="max-h-72">
                                        {tipo.estruturas.map((estrutura) => (
                                            <Link
                                                key={estrutura.CODIGO}
                                                href={'#'}
                                            >
                                                <MenuItem className="flex flex-row gap-2">
                                                    {estrutura.GLYPH && (
                                                        <img
                                                            src={`../../assets/images/${estrutura.GLYPH}`}
                                                            alt={JSON.stringify(
                                                                estrutura.GLYPH
                                                            )}
                                                            className="w-10 h-auto"
                                                        />
                                                    )}

                                                    <Typography className="text-gray-800 dark:text-white font-semibold">
                                                        {estrutura.DESCRICAO}
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
}

export default Estratura;