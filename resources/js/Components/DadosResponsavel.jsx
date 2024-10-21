import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

const DadosResponsavel = ({ estruturasData }) => {
    return (
        <Card className="h-full w-full bg-white dark:bg-blue-900">
            <CardBody className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
                <div className="flex flex-row gap-2 text-gray-800 dark:text-white">
                    <Typography variant="h6" className="uppercase text-xl">
                        Responsável:
                    </Typography>
                    <Typography className="text-xl">
                        {estruturasData.RESPONSAVEL}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2 text-gray-800 dark:text-white">
                    <Typography variant="h6" className="uppercase text-xl">
                        Cargo:
                    </Typography>
                    <Typography className="text-xl">
                        {estruturasData.CARGO}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2 text-gray-800 dark:text-white">
                    <Typography variant="h6" className="uppercase text-xl">
                        Endereço:
                    </Typography>
                    <Typography className="text-xl">
                        {estruturasData.ENDERECO}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2 text-gray-800 dark:text-white">
                    <Typography variant="h6" className="uppercase text-xl">
                        Horário:
                    </Typography>
                    <Typography className="text-xl">
                        {estruturasData.HORARIO}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2 text-gray-800 dark:text-white">
                    <Typography variant="h6" className="uppercase text-xl">
                        Telefone:
                    </Typography>
                    <Typography className="text-xl">
                        {estruturasData.TELEFONES}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2 text-gray-800 dark:text-white">
                    <Typography variant="h6" className="uppercase text-xl">
                        E-Mail:
                    </Typography>
                    <Typography className="text-xl">
                        {estruturasData.EMAIL}
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
};

export default DadosResponsavel;
