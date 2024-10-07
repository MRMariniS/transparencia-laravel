import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";
import { Head, usePage } from "@inertiajs/react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { SortableTable } from "../../../Components/SortableTable";
import CardHeaderTablePedido from "@/Components/CardHeaderTablePedido";

function EsicIndex() {
    const { props } = usePage();
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
                        <Card className="h-full w-full bg-gray-50 dark:bg-blue-800 ">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                className="rounded-none bg-inherit"
                            >
                                <CardHeaderTablePedido tabs={[
                                    {
                                        label: "Pedidos Coletivo",
                                        value: "coletivo",
                                        classes: "w-50"
                                    },
                                    {
                                        label: "Pedidos Desclassificados",
                                        value: "desclassificados",
                                        classes: "w-50"
                                    },
                                    {
                                        label: "Exportar PDF",
                                        value: "pdf",
                                        classes: "bg-red-500 text-white dark:text-white w-50"
                                    },
                                    {
                                        label: "Exportar Excel",
                                        value: "excel",
                                        classes: "bg-green-500 text-white dark:text-white w-50"
                                    },
                                ]} />
                            </CardHeader>
                            <CardBody className="overflow-y-auto overflow-x-hidden px-0">
                                <SortableTable
                                    dataTable={props.pedidos}
                                    tableHeader={["#", "PROTOCOLO", "OBJETIVO", "PEDIDO", "DATA PEDIDO", "STATUS"]}
                                    tableKeysObject={['PROTOCOLO', 'OBJETIVO', 'PEDIDO', 'DTHRPEDIDO', 'STATUS']}
                                    routeName="DetalharPedido"
                                    paramRoute="protocolo"
                                    valueFieldParam="PROTOCOLO"
                                    paginate={true}
                                />
                            </CardBody>
                        </Card>
                    </div>
                </BaseLayout>
            </div>
        </>
    );
}

export default EsicIndex;
