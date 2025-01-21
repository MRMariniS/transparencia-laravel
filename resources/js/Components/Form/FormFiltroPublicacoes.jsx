import { useForm } from "@inertiajs/react";
import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";

import { PropsContext } from "../../Layouts/RootLayout";

import SelectAno from "../Selects/SelectAno";
import DatePicker from "../DatePicker";
import Checkbox from "../Checkbox";
import PopoverEntidade from "../Popover/PopoverEntidade";
import SelectFilter from "../Selects/SelectFilter";
import SelectGrupos from "../Selects/SelectGrupos";
import PopoverGrupos from "../Popover/PopoverGrupos";
import PopoverSubGrupos from "../Popover/PopoverSubgrupos";

const FormFiltroPublicacoes = ({
    title,
    empresas,
    entidade,
    exercicioDefault,
    exercicios,
    nomeUgDefault,
    routeFilter,
    ugDefault,
    gruposSubgrupos,
    dadosRequest,
}) => {
    const { darkMode } = useContext(PropsContext);

    const [exercicioSelecionado, setExercicioSelecionado] =
        useState(exercicioDefault);
    const [finalDate, setFinalDate] = useState("");
    const [initialDate, setInitialDate] = useState("");
    const [ugs, setUgs] = useState(empresas);
    const [grupoSelecionado, setGrupoSelecionado] = useState([]);
    const [subgrupoSelecionado, setSubgrupoSelecionado] = useState([]);
    const [subgrupos, setSubgrupos] = useState([]);

    const { data, setData, get, processing, errors } = useForm({
        exercicio: dadosRequest.exercicio ?? exercicioDefault,
        numero: dadosRequest.numero ?? "",
        empresa: dadosRequest.empresa ?? [ugDefault],
        dataInicial: dadosRequest.dataInicial ?? "",
        dataFinal: dadosRequest.dataInicial ?? "",
        ementa: dadosRequest.ementa ?? "",
        atualizado: dadosRequest.atualizado ?? "",
        grupos: dadosRequest.grupos ?? grupoSelecionado,
        subgrupos: dadosRequest.subgrupos ?? subgrupoSelecionado,
    });

    function submit(e) {
        e.preventDefault();
        get(route(`${routeFilter}`));
    }

    const filterOptions = [
        { value: "", label: "Todos" },
        { value: "S", label: "Sim" },
        { value: "N", label: "Não" },
    ];

    useEffect(() => {
        setData(
            "dataInicial",
            new Date(initialDate).toLocaleDateString("pt-BR")
        );
    }, [initialDate]);

    useEffect(() => {
        if (initialDate > finalDate) {
            alert("A data inicial não pode ser maior que a data final");
            setFinalDate(initialDate);
        } else {
            setData(
                "dataFinal",
                new Date(finalDate).toLocaleDateString("pt-BR")
            );
        }
    }, [finalDate]);

    useEffect(() => {
        handleChangeSubgrupo(data.grupos);
    }, [data.grupos]);

    const handleChangeSubgrupo = (gr) => {
        if (gr.length === 0) {
            setSubgrupos([]);
            return;
        }

        axios
            .post(route("grupo.subgrupos", { grupos: gr }))
            .then((res) => {
                setSubgrupos(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    function submit(e) {
        e.preventDefault();
        get(route(`${routeFilter}`));
    }

    useEffect(() => {
        setData("empresa", []);
        handleChangeExercicio(data.exercicio);
    }, [data.exercicio]);

    const handleChangeExercicio = (ex) => {
        axios.get(route("scpi.tabempresa", ex)).then((res) => {
            setUgs(res.data[0]);
            setData("exercicio", res.data.exercicio);
        });
    };

    return (
        <div className="w-full gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
            <Typography
                className="text-gray-800 dark:text-white mb-2"
                variant="h4"
                color="blue-gray"
            >
                {title}
            </Typography>
            <Typography
                className="text-gray-800 dark:text-white mb-2 mt-1 font-normal"
                color="gray"
            >
                Filtros personalizados de publicacoes
            </Typography>
            <form className="mt-4 w-full flex flex-col gap-2" onSubmit={submit}>
                <div className="w-full flex justify-start gap-2">
                    <SelectAno
                        exercicios={exercicios}
                        exercicioSelecionado={data.exercicio}
                        setExercicioSelecionado={setExercicioSelecionado}
                        setData={setData}
                        errors={errors}
                        data={data}
                    />
                    <Input
                        name="empresa"
                        color={darkMode ? "white" : "gray"}
                        className="w-full bg-white dark:bg-blue-900 focus:outline-none"
                        labelProps={{
                            className: "text-gray-800 dark:text-white",
                        }}
                        containerProps={{
                            className:
                                "bg-white dark:bg-blue-900 rounded-lg min-w-[16rem]",
                        }}
                        label="Entidade"
                        value={JSON.stringify(data.empresa)}
                        icon={
                            <PopoverEntidade
                                darkMode={darkMode}
                                ugs={ugs}
                                ugSelecionada={data.empresa}
                                setData={setData}
                            />
                        }
                        error={errors.empresa}
                        onChange={() => console.warn("Clique no botão +")}
                    />
                    <Input
                        name="publicacao"
                        color={darkMode ? "white" : "gray"}
                        className="bg-white dark:bg-blue-900 focus:outline-none"
                        labelProps={{
                            className: "text-gray-800 dark:text-white",
                        }}
                        containerProps={{
                            className:
                                "bg-white dark:bg-blue-900 rounded-lg min-w-[8rem]",
                        }}
                        value={data.numero}
                        inputMode="numeric"
                        label="Número"
                        onChange={(e) => setData("numero", e.target.value)}
                        error={errors.numero}
                    />
                    <DatePicker
                        classeHerdada=""
                        label="Data Inicial"
                        value={initialDate}
                        setValue={setInitialDate}
                        exercicio={data.exercicio}
                    />
                    <DatePicker
                        classeHerdada=""
                        label="Data Final"
                        value={finalDate}
                        setValue={setFinalDate}
                        exercicio={data.exercicio}
                    />
                    <div className="w-fit sm:w-auto flex items-end">
                        <Button
                            type="submit"
                            className="interaction w-32"
                            name="consultar"
                        >
                            Consultar
                        </Button>
                    </div>
                </div>
                <div className="w-full flex justify-start gap-2">
                    <Input
                        name="ementa"
                        color={darkMode ? "white" : "gray"}
                        className="bg-white dark:bg-blue-900 focus:outline-none"
                        labelProps={{
                            className: "text-gray-800 dark:text-white",
                        }}
                        containerProps={{
                            className:
                                "bg-white dark:bg-blue-900 rounded-lg min-w-[8rem]",
                        }}
                        value={data.ementa}
                        label="Ementa/Palavra-Chave"
                        onChange={(e) => setData("ementa", e.target.value)}
                        error={errors.ementa}
                    />
                    {/* <SelectGrupos
                        grupoSelecionado={data.grupos}
                        grupos={gruposSubgrupos}
                        setGrupoSelecionado={setData}
                    /> */}
                    <Input
                        name="grupo"
                        color={darkMode ? "white" : "gray"}
                        className="w-full bg-white dark:bg-blue-900 focus:outline-none"
                        labelProps={{
                            className: "text-gray-800 dark:text-white",
                        }}
                        containerProps={{
                            className:
                                "bg-white dark:bg-blue-900 rounded-lg min-w-[16rem]",
                        }}
                        label="Grupos"
                        value={JSON.stringify(data.grupos)}
                        icon={
                            <PopoverGrupos
                                darkMode={darkMode}
                                grupos={gruposSubgrupos}
                                grupoSelecionado={data.grupos}
                                setGrupoSelecionado={setData}
                            />
                        }
                        error={errors.grupos}
                        onChange={() => console.warn("Clique no botão +")}
                    />
                    <Input
                        name="subgrupo"
                        color={darkMode ? "white" : "gray"}
                        className="w-full bg-white dark:bg-blue-900 focus:outline-none"
                        labelProps={{
                            className: "text-gray-800 dark:text-white",
                        }}
                        containerProps={{
                            className:
                                "bg-white dark:bg-blue-900 rounded-lg min-w-[16rem]",
                        }}
                        label="Subgrupos"
                        value={JSON.stringify(data.subgrupos)}
                        icon={
                            <PopoverSubGrupos
                                darkMode={darkMode}
                                subgrupos={subgrupos}
                                subGrupoSelecionado={data.subgrupos}
                                setsubGrupoSelecionado={setData}
                            />
                        }
                        error={errors.subgrupos}
                        onChange={() => console.warn("Clique no botão +")}
                    />
                    <SelectFilter
                        selectName="atualizado"
                        selectLabel="Doc. Atualizado"
                        selectData={filterOptions}
                        selected={data.atualizado}
                        setData={setData}
                        errorsData={errors.atualizado}
                    />
                    <div className="w-fit sm:w-auto flex items-end">
                        <Button
                            type="button"
                            className="cancel w-32"
                            name="limpar"
                        >
                            Limpar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormFiltroPublicacoes;
