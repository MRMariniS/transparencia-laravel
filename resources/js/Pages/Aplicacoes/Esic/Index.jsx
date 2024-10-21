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
import PublicacoesAssociadas from "../../../Components/PublicacoesAssociadas";
import TabelaPedidos from "../../../Components/TabelaPedidos";

function EsicIndex() {
    const { props } = usePage();
    return (
        <>
            <Head title={"E-SIC"} />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="w-full h-full flex flex-col gap-4">
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <EnunciadoPedidos
                                title={"O que é o e-SIC?"}
                                resumo={
                                    "O Sistema Eletrônico do Serviço de Informações ao Cidadão (e-SIC) permite que qualquer pessoa, física ou jurídica, encaminhe pedidos de acesso à informação, acompanhe o prazo e receba a resposta da solicitação realizada para órgãos e entidades da administração. O cidadão ainda pode entrar com recursos e apresentar reclamações sem burocracia."
                                }
                                estruturasData={props.estruturas[0]}
                            />
                        </div>
                        <TabelaPedidos pedidosData={props.pedidos} />
                        <PublicacoesAssociadas
                            publicacoesData={props.publicacoes}
                        />
                    </div>
                </BaseLayout>
            </div>
        </>
    );
}

export default EsicIndex;
