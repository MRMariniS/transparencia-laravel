import FormFiltroEmpenhos from "@/Components/Form/FormFiltroEmpenhos";
import { SortableTable } from "@/Components/Tables/SortableTable";
import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";

const EmpenhosIndex = ({
    empenhos,
    empresas,
    elementos,
    exercicios,
    exercicioDefault,
    ugDefault,
}) => {
    return (
        <BaseLayout>
            <div className="flex flex-col gap-4">
                <FormFiltroEmpenhos
                    empresas={empresas}
                    elementos={elementos}
                    exercicios={exercicios}
                    exercicioDefault={exercicioDefault}
                    ugDefault={ugDefault}
                />
                <div className="w-full bg-gray-50 dark:bg-blue-800 rounded-md">
                    <SortableTable
                        paginate={true}
                        tableData={empenhos}
                        tableHeaders={[
                            "EMPENHO",
                            "ANO",
                            "TIPO",
                            "DATA",
                            "PROCESSO",
                            "NOME",
                            "CNPJ",
                            "EMPENHADO",
                            "LIQUIDADO",
                            "PAGO",
                        ]}
                        headerKeys={[
                            "NEMPG",
                            "ANO_EMPENHO",
                            "TPEM",
                            "DTEMPENHO",
                            "PROC",
                            "NOME",
                            "INSMF",
                            "EMPENHADO",
                            "LIQUIDADO",
                            "PAGO",
                        ]}
                    />
                </div>
            </div>
        </BaseLayout>
    );
};

export default EmpenhosIndex;
