import { Head, usePage } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";
import BaseLayout from "../Layouts/BaseLayout";
import { MenuDefault } from "../Components/MenuDefault";

export default function Welcome() {
    const { props } = usePage();
    console.log(props);

    return (
        <>
            <Head title="Welcome" />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="w-full h-full flex flex-col gap-4">
                        <img
                            src="../../assets/images/selo-prata-2024.jpg"
                            alt="selo-prata-2024"
                            className="block lg:hidden w-full h-auto rounded-md"
                        />
                        <div className="flex flex-row w-full h-fit items-center justify-between gap-4">
                            <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                                <div className="flex flex-col gap-2 text-justify indent-10">
                                    <Typography
                                        variant="h4"
                                        className="text-xl indent-0 text-center"
                                    >
                                        Bem-vindo ao Portal da Transparência
                                    </Typography>
                                    <Typography>
                                        Este espaço foi desenvolvido para
                                        proporcionar maior transparência e
                                        acesso às informações. É um canal pelo
                                        qual o cidadão pode acompanhar a
                                        execução financeira dos programas de
                                        governo. Estão disponíveis informações
                                        sobre os recursos públicos municipais
                                        arrecadados diretamente e dos recebidos
                                        em forma de transferência dos governos
                                        estadual e federal, bem como dados sobre
                                        os gastos realizados em compras ou
                                        contratação de obras e serviços.
                                    </Typography>
                                </div>
                                <img
                                    src="../../assets/images/selo-prata-2024.jpg"
                                    alt="selo-prata-2024"
                                    className="hidden lg:block w-72 h-auto rounded-md"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {props.menus.menuLateral.map((menu) => (
                                <MenuDefault key={menu.CODIGO} props={menu} />
                            ))}
                        </div>
                    </div>
                </BaseLayout>
            </div>
        </>
    );
}
