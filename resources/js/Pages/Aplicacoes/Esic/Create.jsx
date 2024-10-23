import { Head, useForm, usePage } from "@inertiajs/react";
import BaseLayout from "../../../Layouts/BaseLayout";
import PedidoForm from "../../../Components/PedidoForm";

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
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div></div>
                    <PedidoForm />
                </BaseLayout>
            </div>
        </>
    );
};

export default EsicCreate;
