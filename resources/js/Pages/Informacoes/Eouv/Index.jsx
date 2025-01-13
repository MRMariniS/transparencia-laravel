import BaseLayout from "../../../Layouts/BaseLayout";
import { Head, usePage } from "@inertiajs/react";
import EnunciadoPedidos from "../../../Components/EnunciadoPedidos";
import TabelaPedidos from "../../../Components/TabelaPedidos";
import PublicacoesAssociadas from "../../../Components/PublicacoesAssociadas";

function EouvIndex({ pedidos }) {
    const { props } = usePage();
    return (
        <>
            <Head title={"E-OUV"} />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="w-full h-full flex flex-col gap-4">
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <EnunciadoPedidos
                                title={"O que é o e-Ouv?"}
                                resumo={
                                    "O e-Ouv é um canal para você apresentar sugestões, elogios, solicitações, reclamações e denúncias. No serviço público, a ouvidoria é uma espécie de “ponte” entre você e a Administração Pública (que são os órgãos, entidades e agentes públicos que trabalham nos diversos setores do governo federal, estadual e municipal). " +
                                    "O e-Ouv recebe as manifestações dos cidadãos, analisa, orienta e encaminha às áreas responsáveis pelo tratamento ou apuração do caso. "
                                }
                                estruturasData={props.estruturas[0]}
                            />
                        </div>
                        <TabelaPedidos pedidosData={pedidos} page={"eouv"} />
                        <PublicacoesAssociadas
                            publicacoesData={props.publicacoes}
                        />
                    </div>
                </BaseLayout>
            </div>
        </>
    );
}

export default EouvIndex;
