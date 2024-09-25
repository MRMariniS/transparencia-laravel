import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";
import { Head, usePage } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";
import { SortableTable } from "../../../Components/SortableTable";

function EsicIndex() {
    const { props } = usePage();
    console.log(props);
    return (
        <>
            <Head title={"E-SIC"} />
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
                        <SortableTable
                            dataTable={props.pedidos}
                            tableHeader={["ID", "OBJETIVO", "PEDIDO", "STATUS"]}
                            tabs={[
                                {
                                    label: "Todos",
                                    value: "todos",
                                },
                                {
                                    label: "Atendidos",
                                    value: "atendidos",
                                },
                                {
                                    label: "Pendentes",
                                    value: "pendentes",
                                },
                                {
                                    label: "Cancelados",
                                    value: "cancelados",
                                },
                                {
                                    label: "PDF",
                                    value: "pdf",
                                    classes: "bg-red-500 text-white dark:text-white"
                                },
                                {
                                    label: "Excel",
                                    value: "excel",
                                    classes: "bg-green-500 text-white dark:text-white"
                                },
                            ]}
                        />
                    </div>
                </BaseLayout>
            </div>
        </>
    );
}

export default EsicIndex;
