import { Link, Head } from "@inertiajs/react";
import { SidebarMenu } from "../Components/SidebarMenu";
import Banners from "../Components/Banners";
import { Typography } from "@material-tailwind/react";
import { SearchBar } from "../Components/SearchBar";
import BaseLayout from "../Layouts/BaseLayout";
import initialPage from "../../data/InitialPage";
import { MenuDefault } from "../Components/MenuDefault";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="w-full h-full flex flex-row justify-between items-start">
                {/* <SidebarMenu /> */}
                <BaseLayout>
                    <div className="w-full lg:w-2/3 h-full flex flex-col gap-4">
                        <img
                            src="../../assets/images/selo-prata-2024.jpg"
                            alt="selo-prata-2024"
                            className="block lg:hidden w-full h-auto rounded-md"
                        />
                        <div className="flex flex-col gap-2 text-justify indent-10 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <Typography
                                variant="h4"
                                className="text-xl indent-0 text-center"
                            >
                                Bem-vindo ao Portal da Transparência
                            </Typography>
                            <Typography>
                                Este espaço foi desenvolvido para proporcionar
                                maior transparência e acesso às informações. É
                                um canal pelo qual o cidadão pode acompanhar a
                                execução financeira dos programas de governo.
                                Estão disponíveis informações sobre os recursos
                                públicos municipais arrecadados diretamente e
                                dos recebidos em forma de transferência dos
                                governos estadual e federal, bem como dados
                                sobre os gastos realizados em compras ou
                                contratação de obras e serviços.
                            </Typography>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {initialPage.menus.menuLateral.map((menu) => (
                                <MenuDefault key={menu.CODIGO} props={menu} />
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-row justify-between items-start w-1/3 gap-4">
                        <div className="flex flex-row justify-between items-start gap-4">
                            <div className="w-full flex flex-col gap-4">
                                <img
                                    src="../../assets/images/selo-prata-2024.jpg"
                                    alt="selo-prata-2024"
                                    className="w-full h-auto rounded-md"
                                />
                                <img
                                    src="../../assets/images/e-sic.png"
                                    alt="e-sic.png"
                                    className="w-full h-auto rounded-md"
                                />
                                <img
                                    src="../../assets/images/e-ouv.png"
                                    alt="e-ouv.png"
                                    className="w-full h-auto rounded-md"
                                />
                                <img
                                    src="../../assets/images/carta.jpg"
                                    alt="carta.jpg"
                                    className="w-full h-auto rounded-md"
                                />

                                {/* <Banners orientation={"flex-col"} /> */}
                            </div>
                        </div>
                    </div>
                </BaseLayout>
            </div>
        </>
    );
}
