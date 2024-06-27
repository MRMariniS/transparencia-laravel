import { Link, Head } from "@inertiajs/react";
import { SidebarMenu } from "../Components/SidebarMenu";
import Banners from "../Components/Banners";
import { Typography } from "@material-tailwind/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <SidebarMenu />
                <div className="w-full h-full flex justify-between items-start p-10 gap-4">
                    <div className="w-1/2 h-full flex flex-col gap-4">
                        <div>
                            <img
                                src="../../assets/images/selo-prata-2024.jpg"
                                alt="selo-prata-2024"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-justify indent-10 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <Typography
                                variant="h4"
                                className="text-xl indent-0 text-center"
                            >
                                O que é o Portal da Transparência e como
                                funciona?
                            </Typography>
                            <Typography>
                                É um canal pelo qual o cidadão pode acompanhar a
                                execução financeira dos programas de governo.
                                Estão disponíveis informações sobre os recursos
                                públicos municipais arrecadados diretamente e
                                dos recebidos em forma de transferência dos
                                governos estadual e federal, bem como dados
                                sobre os gastos realizados em compras ou
                                contratação de obras e serviços.
                            </Typography>
                            <Typography>
                                Para dinamizar as consultas, de maneira geral,
                                as informações apresentadas neste portal
                                encontram-se segregadas por unidade gestora e
                                exercício, propiciando ao cidadão acesso mais
                                rápido e objetivo àquilo que busca saber. Para
                                acessar as informações, o cidadão deve informar
                                o exercício e a unidade gestora nos campos
                                respectivos e, em seguida, no menu lateral deste
                                portal, selecionar a opção correspondente ao
                                tipo de informação que deseja consultar.
                            </Typography>
                            <Typography>
                                Todavia, o cidadão também pode obter
                                informações, tais como receitas e despesas, de
                                maneira consolidada (totalizando todas as
                                unidades gestoras). Para tanto, basta acessar os
                                demonstrativos consolidados publicados neste
                                portal - disponíveis inclusive em versão para
                                impressão. Os demonstrativos consolidados são
                                relatórios elaborados conforme modelos definidos
                                em lei ou por órgãos de regulação e fiscalização
                                (STN/TCE). Dentre eles destacam-se os anexos da
                                LRF - RREO e RGF, Balancetes TCE/RO e Balanço
                                Anual. Todas estas opções encontram-se
                                disponíveis no menu lateral deste portal.
                            </Typography>
                            <Typography>
                                Fonte: Controladoria Municipal
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Banners orientation={"flex-col"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
