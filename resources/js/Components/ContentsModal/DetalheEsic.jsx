import React from "react";

const DetalheEsic = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col gap-2 text-justify indent-10">
                <Typography
                    variant="h4"
                    className="text-xl indent-0 text-center"
                >
                    O que é o e-SIC?
                </Typography>
                <Typography>
                    O Sistema Eletrônico do Serviço de
                    Informações ao Cidadão (e-SIC) permite que
                    qualquer pessoa, física ou jurídica,
                    encaminhe pedidos de acesso à informação,
                    acompanhe o prazo e receba a resposta da
                    solicitação realizada para órgãos e
                    entidades da administração. O cidadão ainda
                    pode entrar com recursos e apresentar
                    reclamações sem burocracia.
                </Typography>
            </div>
        </>
    )
}

export default DetalheEsic;