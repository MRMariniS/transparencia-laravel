import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import React from "react";
import { SortableTable } from "./SortableTable";

const PublicacoesAssociadas = ({ publicacoesData }) => {
    console.log(publicacoesData);
    return (
        <Card className="h-full w-full bg-gray-50 dark:bg-blue-800">
            <CardHeader
                floated={false}
                shadow={false}
                className="rounded-none bg-inherit"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <Typography
                            className="text-gray-800 dark:text-white"
                            variant="h5"
                        >
                            Publicações Associadas
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-y-auto overflow-x-hidden px-0">
                <SortableTable
                    dataTable={publicacoesData}
                    routeName="publicacao.show"
                    paramRoute="idpublicacao"
                    valueFieldParam="ID"
                    openInModal={true}
                    aplicacaoModal="publicacao"
                    tableHeader={["#", "DESCRIÇÃO", "ANO", "DATA", "EMENTA"]}
                    tableKeysObject={[
                        "DESCRICAO",
                        "ANO",
                        "DTHRPUBLICADO",
                        "EMENTA",
                    ]}
                />
            </CardBody>
        </Card>
    );
};

export default PublicacoesAssociadas;
