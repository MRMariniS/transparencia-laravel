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
import EnunciadoPedidos from "../../../Components/EnunciadoPedidos";

function EouvIndex() {
    const { props } = usePage();
    return (
        <>
            <Head title={"E-SIC"} />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="w-full h-full flex flex-col gap-4">
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <EnunciadoPedidos
                                title={"Ouvidoria - E-OUV"}
                                resumo={`O e-Ouv é um canal para você apresentar sugestões, elogios, solicitações, reclamações e denúncias. No serviço público, a ouvidoria é uma espécie de “ponte” entre você e a Administração Pública...`}
                            />
                        </div>
                        <Card className="h-full w-full bg-gray-50 dark:bg-blue-800 mt-3">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                className="rounded-none bg-inherit"
                            >
                                <div className="mb-8 flex-col items-center justify-between gap-8">
                                    <Typography
                                        className="text-gray-800 dark:text-white mb-2"
                                        variant="h5"
                                        color="blue-gray"
                                    >
                                        {props.estruturas[0].DESCRICAO}
                                    </Typography>
                                    <Typography className="text-gray-800 dark:text-white">
                                        {props.estruturas[0].ATRIBUICOES}
                                    </Typography>
                                </div>
                            </CardHeader>
                            <CardBody className="overflow-y-auto overflow-x-hidden px-0">
                                <SortableTable
                                    dataTable={props.estruturas}
                                    tableHeader={[
                                        "DESCRIÇÃO",
                                        "EMAIL",
                                        "ENDERECO",
                                        "ATENDIMENTO",
                                    ]}
                                    tableKeysObject={[
                                        "DESCRICAO",
                                        "EMAIL",
                                        "ENDERECO",
                                        "HORARIO",
                                    ]}
                                />
                            </CardBody>
                        </Card>

                        <Card className="h-full w-full bg-gray-50 dark:bg-blue-800 mt-3">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                className="rounded-none bg-inherit"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Typography
                                            className="text-gray-800 dark:text-white mb-2"
                                            variant="h5"
                                            color="blue-gray"
                                        >
                                            Publicações -{" "}
                                            {
                                                props.estruturas[0]
                                                    .tipo_estrutura.DESCRICAO
                                            }
                                        </Typography>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody className="overflow-y-auto overflow-x-hidden px-0">
                                <SortableTable
                                    dataTable={props.publicacoes}
                                    routeName="publicacao.show"
                                    paramRoute="idpublicacao"
                                    valueFieldParam="ID"
                                    openInModal={true}
                                    aplicacaoModal="publicacao"
                                    tableHeader={[
                                        "#",
                                        "DESCRIÇÃO",
                                        "ANO",
                                        "PUBLICADO EM",
                                        "EMENTA",
                                    ]}
                                    tableKeysObject={[
                                        "DESCRICAO",
                                        "ANO",
                                        "DTHRPUBLICADO",
                                        "EMENTA",
                                    ]}
                                />
                            </CardBody>
                        </Card>

                        <Card className="h-full w-full bg-gray-50 dark:bg-blue-800 mt-3">
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

export default EouvIndex;
