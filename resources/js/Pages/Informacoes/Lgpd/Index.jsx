import BaseLayout from "../../../Layouts/BaseLayout";
import { Head, usePage } from "@inertiajs/react";
import EnunciadoPedidos from "../../../Components/EnunciadoPedidos";
import TabelaPedidos from "../../../Components/TabelaPedidos";
import PublicacoesAssociadas from "../../../Components/PublicacoesAssociadas";

function LgpdIndex() {
    const { props } = usePage();
    return (
        <>
            <Head title={"LGPD"} />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="w-full h-full flex flex-col gap-4">
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <EnunciadoPedidos
                                title={"O que é LGPD?"}
                                resumo={
                                    "A Lei Geral de Proteção de Dados (LGPD) é uma legislação brasileira que tem como objetivo principal proteger os dados pessoais dos cidadãos e estabelecer diretrizes para o tratamento dessas informações por parte das organizações. Aprovada em 2018, a LGPD entrou em vigor em setembro de 2020." +
                                    "Foi inspirada no Regulamento Geral de Proteção de Dados (GDPR, na sigla em inglês), a ideia por trás da LGPD é garantir maior privacidade e segurança no uso de dados pessoais, além de estabelecer regras claras para o tratamento dessas informações."
                                }
                                estruturasData={props.estruturas[0]}
                            />
                        </div>
                        <TabelaPedidos pedidosData={props.pedidos} />
                        <PublicacoesAssociadas
                            publicacoesData={props.publicacoes}
                        />
                    </div>
                </BaseLayout>
            </div>
        </>
    );
}

export default LgpdIndex;
