import FormFiltroEmpenhos from "@/Components/Form/FormFiltroEmpenhos";
import { SortableTable } from "@/Components/Tables/SortableTable";
import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";

const LiquidacoesIndex = ({
    liquidacoes,
    empresas,
    elementos,
    exercicios,
    exercicioDefault,
    ugDefault,
    url,
}) => {
    return (
        <BaseLayout>
            <div className="flex flex-col gap-4">
                <FormFiltroEmpenhos
                    title="Liquidações"
                    routeFilter="liquidacao.filter"
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
                        tableData={liquidacoes}
                        tableHeaders={[
                            "EMPENHO",
                            "LIQUIDAÇÃO",
                            "ANO",
                            "TIPO",
                            "DATA",
                            "PROCESSO",
                            "NOME",
                            "CNPJ",
                            "LIQUIDADO",
                            "ANULADO",
                            "PAGO",
                        ]}
                        headerKeys={[
                            "NEMPG",
                            "NUMSUB",
                            "ANO",
                            "TPEM",
                            "DTLIQUIDACAO",
                            "PROC",
                            "NOME",
                            "INSMF",
                            "LIQUIDADO",
                            "ANULADO",
                            "PAGO",
                        ]}
                    />
                </div>
            </div>
        </BaseLayout>
    );
};

export default LiquidacoesIndex;
