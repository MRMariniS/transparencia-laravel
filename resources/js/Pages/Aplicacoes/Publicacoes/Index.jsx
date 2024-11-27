import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";
import { Typography } from "@material-tailwind/react";
import { Head } from "@inertiajs/react";

import FormFiltroPublicacoes from "../../../Components/Form/FormFiltroPublicacoes";

const PublicacoesIndex = ({
    empresas,
    entidade,
    exercicioDefault,
    exercicios,
    nomeUgDefault,
    ugDefault,
    publicacoes,
}) => {
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
                    />
                </div>
            </BaseLayout>
        </>
    );
};

export default PublicacoesIndex;
