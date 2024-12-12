import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";
import { Typography } from "@material-tailwind/react";
import { SortableTable } from "@/Components/Tables/SortableTable";

const PublicacoesIndex = ({ publicacoes }) => {
    console.log(publicacoes);
    return (
        <BaseLayout>
            <div>
                <SortableTable
                    tableData={publicacoes}
                    tableHeaders={[
                        "UG",
                        "ANO",
                        "DATA",
                        "DESCRICAO",
                        "EMENTA",
                        "NUMERO",
                        "DESCRIÇÃO",
                        "DATA PUBLICADO",
                    ]}
                    headerKeys={[
                        "UG",
                        "ANO",
                        "DATA",
                        "DESCRICAO",
                        "EMENTA",
                        "NUMERO",
                        "DESCRICAO",
                        "DTHRPUBLICADO",
                    ]}
                    paginate={true}
                />
            </div>
        </BaseLayout>
    );
};

export default PublicacoesIndex;
