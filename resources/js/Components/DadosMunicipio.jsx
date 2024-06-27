import React from "react";

import initialPage from "../../data/InitialPage";
import { Typography } from "@material-tailwind/react";

function DadosMunicipio() {
    return (
        <div className="flex flex-1 justify-between items-center">
            <div className="w-1/2 flex flex-col justify-between items-start">
                <Typography variant="h5" className="text-2xl uppercase">
                    {initialPage.entidade[0].NOME}
                </Typography>
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Gestor Responsável:
                    </Typography>
                    <Typography className="text-xl">
                        {initialPage.entidade[0].GESRESPONSAVEL}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Gestor Cargo:
                    </Typography>
                    <Typography className="text-xl">
                        {initialPage.entidade[0].GESCARGO}
                    </Typography>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-start">
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Telefone:
                    </Typography>
                    <Typography className="text-xl">
                        {initialPage.entidade[0].TELEFONE}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Horário:
                    </Typography>
                    <Typography className="text-xl">
                        {initialPage.entidade[0].HORARIO}
                    </Typography>
                </div>
                <div className="flex flex-row gap-2">
                    <Typography className="text-xl font-semibold">
                        Endereço:
                    </Typography>
                    <Typography className="text-xl">
                        {initialPage.entidade[0].ENDERECO}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default DadosMunicipio;
