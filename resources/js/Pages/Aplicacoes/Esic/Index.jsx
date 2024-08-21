import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";
import { Head, usePage } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";
import { SortableTable } from "../../../Components/SortableTable";

function EsicIndex() {
    const props = usePage();
    console.log(props);

    return (
        <>
            <Head title={props.url.split("/").pop().toUpperCase()} />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="w-full h-full flex flex-col gap-4">
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <div className="flex flex-col gap-2 text-justify indent-10">
                                <Typography
                                    variant="h4"
                                    className="text-xl indent-0 text-center"
                                >
                                    O que é o e-SIC?
                                </Typography>
                                <Typography>
                                    O Sistema Eletrônico do Serviço de
                                    Informações ao Cidadão (e-SIC) permite que
                                    qualquer pessoa, física ou jurídica,
                                    encaminhe pedidos de acesso à informação,
                                    acompanhe o prazo e receba a resposta da
                                    solicitação realizada para órgãos e
                                    entidades da administração. O cidadão ainda
                                    pode entrar com recursos e apresentar
                                    reclamações sem burocracia.
                                </Typography>
                            </div>
                        </div>
                        <SortableTable />
                    </div>
                </BaseLayout>
            </div>
        </>
    );
}

export default EsicIndex;
