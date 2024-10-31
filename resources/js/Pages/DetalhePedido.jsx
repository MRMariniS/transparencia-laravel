import { Head, usePage } from "@inertiajs/react";
import BaseLayout from "@/Layouts/BaseLayout";
import ListData from "@/Components/ListData";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { SortableTable } from "@/Components/Tables/SortableTable";

const DetalhePedido = () => {
    const { props } = usePage();
    return (
        <>
            <Head title="Detalhe Pedido" />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    {props.pedido.map((pedido) => {
                        return (
                            <div
                                className="w-full flex flex-col gap-4"
                                key={pedido.PROTOCOLO}
                            >
                                <div className="w-full h-full flex flex-col gap-4">
                                    <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                                        <div className="flex gap-2 text-justify indent-10">
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Protocolo
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {pedido.PROTOCOLO}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Data Pedido
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {pedido.DTHRPEDIDO}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Atualizado em
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {pedido.DTHRSTATUS}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Status
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {pedido.STATUS}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Objetivo
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {pedido.OBJETIVO}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Prioridade
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {pedido.PRIORIDADE}
                                                </Typography>
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col gap-4">
                                    <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                                        <div className="flex flex-col gap-2 text-justify indent-10">
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Pedido {pedido.PROTOCOLO}
                                            </Typography>
                                            <Typography>
                                                {pedido.PEDIDO}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col gap-4">
                                    <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                                        <div className="flex flex-col gap-2 text-justify indent-10 w-full">
                                            <Typography
                                                variant="h5"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Movimentação do Pedido
                                            </Typography>
                                            <SortableTable
                                                dataTable={pedido.movimento}
                                                routeName="publicacao.show"
                                                paramRoute="idpublicacao"
                                                valueFieldParam="ID_PUBLICACAO"
                                                openInModal={true}
                                                aplicacaoModal="publicacao"
                                                tableHeader={[
                                                    "PUBLICACÃO",
                                                    "SEQUÊNCIA",
                                                    "STATUS",
                                                    "DATA STATUS",
                                                    "RESPOSTA",
                                                    "DATA MOVIMENTO",
                                                ]}
                                                tableKeysObject={[
                                                    "SEQUENCIA",
                                                    "STATUS",
                                                    "DTHRSTATUS",
                                                    "RESPOSTA",
                                                    "DTHRMOVTO",
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </BaseLayout>
            </div>
        </>
    );
};

export default DetalhePedido;
