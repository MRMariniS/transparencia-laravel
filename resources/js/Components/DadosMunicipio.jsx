import React from "react";

import { Typography } from "@material-tailwind/react";

function DadosMunicipio({ empresa }) {
    return (
        <div className="flex flex-1 flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 flex flex-col justify-between items-start">
                <Typography variant="h5" className="text-2xl uppercase">
                    {empresa[0].NOME}
                </Typography>
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Gestor Responsável:
                    </Typography>
                    <Typography className="text-xl">
                        {empresa[0].NOME_AUTORID}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Gestor Cargo:
                    </Typography>
                    <Typography className="text-xl">
                        {empresa[0].CARGO_AUTORID}
                    </Typography>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-between items-start">
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Telefone:
                    </Typography>
                    <Typography className="text-xl">
                        {empresa[0].FONE}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Horário:
                    </Typography>
                    <Typography className="text-xl">....</Typography>
                </div>
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Endereço:
                    </Typography>
                    <Typography className="text-xl">
                        {empresa[0].ENDERECO}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default DadosMunicipio;
