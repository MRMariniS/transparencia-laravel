import FormFiltroEmpenhos from "@/Components/Form/FormFiltroEmpenhos";
import { SortableTable } from "@/Components/SortableTable";
import { usePage } from "@inertiajs/react";
import React from "react";

const EmpenhosIndex = () => {
    const { props } = usePage();
    return (
        <>
            <FormFiltroEmpenhos />
            <div className="w-full gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4 mt-4">
                <SortableTable
                    dataTable={props.empenhos}
                    paginate={true}
                    tableHeader={[
                        "EMPENHO",
                        "ANO",
                        "TIPO",
                        "DATA",
                        "PROC",
                        "NOME",
                        "CNPJ",
                        "EMPENHADO",
                        "LIQUIDADO",
                        "PAGO"
                    ]}
                    tableKeysObject={[
                        "NEMPG",
                        "ANO_EMPENHO",
                        "TPEM",
                        "DTEMPENHO",
                        "PROC",
                        "NOME",
                        "INSMF",
                        "EMPENHADO",
                        "LIQUIDADO",
                        "PAGO"
                    ]}
                />
            </div>
        </>
    )
};

export default EmpenhosIndex;
