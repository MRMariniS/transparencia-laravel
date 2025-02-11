import React from "react";
import BaseLayout from "../../Layouts/BaseLayout";
import { Typography } from "@material-tailwind/react";
import { Head } from "@inertiajs/react";

import FormFiltroPublicacoes from "../../Components/Form/FormFiltroPublicacoes";
import { SortableTable } from "@/Components/Tables/SortableTable";
import Table from "@/Components/Tables/Table";

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
    const columns = [
        { label: "DETALHAR", accessor: "ID", sortable: false },
        { label: "TIPO", accessor: "NOME_SUBGRUPO", sortable: false },
        { label: "NÚMERO", accessor: "NUMERO", sortable: true },
        { label: "ANO", accessor: "ANO", sortable: false },
        { label: "DATA DOCUMENTO", accessor: "DATA", sortable: true },
        { label: "DESCRIÇÃO", accessor: "DESCRICAO", sortable: true },
        { label: "EMENTA", accessor: "EMENTA", sortable: false },
        { label: "DATA PUBLICAÇÃO", accessor: "DTHRPUBLICADO", sortable: true },
    ];

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
                        <Table
                            columns={columns}
                            data={publicacoes}
                            routeName="documentos.show"
                            paginate={true}
                            urlPaginate={url}
                        />
                    </div>
                </div>
            </BaseLayout>
        </>
    );
};

export default Documentos;
