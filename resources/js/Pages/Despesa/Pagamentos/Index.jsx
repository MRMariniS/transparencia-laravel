import FormFiltroEmpenhos from "@/Components/Form/FormFiltroEmpenhos";
import { SortableTable } from "@/Components/Tables/SortableTable";
import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";
import { Head } from "@inertiajs/react";

const PagamentosIndex = ({
    pagamentos,
    empresas,
    elementos,
    exercicios,
    exercicioDefault,
    ugDefault,
    url,
}) => {
    return (
        <>
            <Head title="Pagamentos" />
            <BaseLayout>
                <div className="flex flex-col gap-4">
                    <FormFiltroEmpenhos
                        title="Pagamentos"
                        routeFilter="pagamento.filter"
                        empresas={empresas}
                        elementos={elementos}
                        exercicios={exercicios}
                        exercicioDefault={exercicioDefault}
                        ugDefault={ugDefault}
                    />
                    <div className="w-full bg-gray-50 dark:bg-blue-800 rounded-md">
                        <SortableTable
                            paginate={true}
                            urlPaginate={url}
                            tableData={pagamentos}
                            tableHeaders={[
                                "EMPENHO",
                                "TIPO",
                                "PARCELA",
                                "PROCESSO",
                                "NOME",
                                "CNPJ",
                                "ORD.PAGTO",
                                "DATA PAGTO",
                                "VALOR",
                            ]}
                            headerKeys={[
                                "NEMPG",
                                "TPEM",
                                "NUMSUB",
                                "PROC",
                                "NOME",
                                "INSMF",
                                "ORDPGSEQ",
                                "DTPAG",
                                "VAPAG",
                            ]}
                        />
                    </div>
                </div>
            </BaseLayout>
        </>
    );
};

export default PagamentosIndex;
