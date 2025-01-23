import React from "react";
import BaseLayout from "../../Layouts/BaseLayout";
import { Typography } from "@material-tailwind/react";
import { Head } from "@inertiajs/react";

import FormFiltroPublicacoes from "../../Components/Form/FormFiltroPublicacoes";
import { SortableTable } from "@/Components/Tables/SortableTable";

const Documentos = ({
    empresas,
    entidade,
    exercicioDefault,
    exercicios,
    nomeUgDefault,
    ugDefault,
    publicacoes,
    grupos,
    url,
    dadosRequest,
}) => {
    return (
        <>
            <Head title={"Publicações"} />
            <BaseLayout>
                <div className="flex flex-col gap-4">
                    <FormFiltroPublicacoes
                        title="Publicações"
                        empresas={empresas}
                        entidade={entidade}
                        exercicioDefault={exercicioDefault}
                        exercicios={exercicios}
                        nomeUgDefault={nomeUgDefault}
                        ugDefault={ugDefault}
                        gruposSubgrupos={grupos}
                        routeFilter="documentos.index"
                        dadosRequest={dadosRequest}
                    />
                    <div className="w-full gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                        <SortableTable
                            tableData={publicacoes}
                            paginate={true}
                            urlPaginate={url}
                            routeName="documentos.show"
                            valueFieldParam="ID"
                            tableHeaders={[
                                "DETALHAR",
                                "TIPO",
                                "NÚMERO",
                                "ANO",
                                "DATA DOCUMENTO",
                                "DESCRIÇÃO",
                                "EMENTA",
                                "DATA PUBLICAÇÃO",
                            ]}
                            headerKeys={[
                                "NOME_SUBGRUPO",
                                "NUMERO",
                                "ANO",
                                "DATA",
                                "DESCRICAO",
                                "EMENTA",
                                "DTHRPUBLICADO",
                            ]}
                        />
                    </div>
                </div>
            </BaseLayout>
        </>
    );
};

export default Documentos;
