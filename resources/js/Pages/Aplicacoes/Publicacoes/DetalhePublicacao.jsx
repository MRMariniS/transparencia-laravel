import { Head, router, usePage } from "@inertiajs/react";
import BaseLayout from "@/Layouts/BaseLayout";
import ListData from "@/Components/ListData";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { SortableTable } from "@/Components/SortableTable";
import { FaFilePdf } from "react-icons/fa6";
import AlertMessage from "@/Components/AlertMessage";
import { useMemo, useState } from "react";

const DetalhePublicacao = () => {
    const { props } = usePage();
    const error = Object.keys(props.errors).length > 0 ? props.errors : null;
    
    return (
        <>
            <Head title="Publicacao" />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout >
                    {props.publicacao.map((publicacao) => {
                        return (
                            <div className="w-full flex flex-col gap-4" key={publicacao.ID}>
                                <div className="w-full h-full flex flex-col gap-4">
                                    <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                                        <div className="flex gap-2 text-justify indent-10">
                                            <Typography
                                                variant="h5"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Publicação {publicacao.NUMERO}/{publicacao.ANO}
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {publicacao.DESCRICAO}
                                                </Typography>
                                            </Typography>

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col gap-4">
                                    <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                                        <div className="flex gap-2 text-justify indent-10">
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Ano
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {publicacao.ANO}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Data
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {publicacao.DATA}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Publicada em
                                                <Typography className="text-gray-800 dark:text-white">
                                                    {publicacao.DTHRPUBLICADO}
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
                                                Ementa
                                            </Typography>
                                            <Typography>
                                                {publicacao.EMENTA}
                                            </Typography>

                                            {publicacao.EMENTAHTML != '' ? (<>
                                                <Typography
                                                    variant="h6"
                                                    className="text-gray-800 dark:text-white"
                                                >
                                                    Detalhes da Ementa
                                                </Typography>
                                                <Typography
                                                    className="render-html"
                                                    dangerouslySetInnerHTML={{ __html: publicacao.EMENTAHTML }}
                                                />
                                            </>) : <></>}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col gap-4">
                                    <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                                        <div className="flex flex-col gap-2 text-justify indent-10 w-full">
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white"
                                            >
                                                Anexo(s)
                                            </Typography>

                                            {error ? (<AlertMessage title={"Error"} message={error.mensagem} />) : <></>}
                                            
                                            <SortableTable
                                                dataTable={publicacao.documentos}
                                                routeName=""
                                                paramRoute="iddoc"
                                                valueFieldParam="ID"
                                                newWindow={"_blank"}
                                                icon={<FaFilePdf />}
                                                tableHeader={[
                                                    "ANEXO",
                                                    "TIPO ANEXO",
                                                    "DESCRIÇÃO",
                                                    "PUBLICADO EM",
                                                ]}
                                                tableKeysObject={[
                                                    'TIPO',
                                                    'DESCRICAO',
                                                    'DTHRPUBLICADO',
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

export default DetalhePublicacao;
