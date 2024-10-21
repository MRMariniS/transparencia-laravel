import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";
import { Head, usePage } from "@inertiajs/react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { SortableTable } from "../../../Components/SortableTable";
import CardHeaderTablePedido from "@/Components/CardHeaderTablePedido";
import { CardReadMore } from "@/Components/CardReadMore";

function EsicIndex() {
    const { props } = usePage();
    return (
        <>
            <Head title={"E-SIC"} />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="w-full h-full flex flex-col gap-4">
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            
                            <CardReadMore title={"Informação ao Cidado - E-SIC"} resumo={`O Sistema Eletrônico do Serviço de
                                    Informações ao Cidadão (e-SIC) permite que
                                    qualquer pessoa, física ou jurídica,
                                    encaminhe pedidos de acesso à informação...`} />
                            <CardReadMore title={"Ouvidoria - E-OUV"} resumo={`O e-Ouv é um canal para você apresentar sugestões, elogios, solicitações, reclamações e denúncias. No serviço público, a ouvidoria é uma espécie de “ponte” entre você e a Administração Pública...`} />
                            <CardReadMore title={"Proteção de Dados - LGPD"} resumo={`A Lei Geral de Proteção de Dados (LGPD) é uma legislação brasileira que tem como objetivo principal proteger os dados pessoais dos cidadãos...`} />
                        </div>
                        <Card className="h-full w-full bg-gray-50 dark:bg-blue-800 ">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                className="rounded-none bg-inherit"
                            >
                                <CardHeaderTablePedido
                                    tabs={[
                                        {
                                            label: "Pedidos Coletivo",
                                            value: "coletivo",
                                            classes: "w-50",
                                        },
                                        {
                                            label: "Pedidos Desclassificados",
                                            value: "desclassificados",
                                            classes: "w-50",
                                        },
                                    ]}
                                />
                            </CardHeader>
                            <CardBody className="overflow-y-auto overflow-x-hidden px-0">
                                <SortableTable
                                    dataTable={props.pedidos}
                                    tableHeader={[
                                        "#",
                                        "PROTOCOLO",
                                        "OBJETIVO",
                                        "PEDIDO",
                                        "DATA PEDIDO",
                                        "STATUS",
                                    ]}
                                    tableKeysObject={[
                                        "PROTOCOLO",
                                        "OBJETIVO",
                                        "PEDIDO",
                                        "DTHRPEDIDO",
                                        "STATUS",
                                    ]}
                                    routeName="esic.show"
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
