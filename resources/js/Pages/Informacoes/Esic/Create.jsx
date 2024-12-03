import { Head, useForm, usePage } from "@inertiajs/react";
import BaseLayout from "../../../Layouts/BaseLayout";
import PedidoForm from "../../../Components/PedidoForm";
import { Typography } from "@material-tailwind/react";

const EsicCreate = () => {
    const { props } = usePage();

    const { data, setData, post, processing, errors } = useForm({
        nome: "",
        sexo: "",
        dtNascimento: "",
        entidade: "",
        estrutura: "",
        email: "",
        emailConfirmacao: "",
        telefone: "",
        cpf: "",
        escolaridade: "",
        profissao: "",
        objetivo: "",
        prioridade: "",
        pedido: "",
        arquivo: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/login");
    }

    return (
        <>
            <Head title="E-SIC - Novo Pedido" />
            <BaseLayout>
                <div className="flex flex-col w-screen h-fit p-4 gap-4 justify-between items-stretch bg-gray-50 dark:bg-blue-800 rounded-md">
                    <PedidoForm tipo="E-SIC" />
                </div>
            </BaseLayout>
        </>
    );
};

export default EsicCreate;
