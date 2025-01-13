import { PropsContext } from "@/Layouts/RootLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";

import SelectAno from "../Selects/SelectAno";
import PopoverElementos from "../Popover/PopoverElementos";
import PopoverEntidade from "../Popover/PopoverEntidade";
import DatePicker from "../DatePicker";

const FormFiltroEmpenhos = ({
    title,
    empresas,
    routeFilter,
    elementos,
    exercicios,
    exercicioDefault,
    ugDefault,
}) => {
    const [initialDate, setInitialDate] = useState("");
    const [finalDate, setFinalDate] = useState("");

    const { data, setData, get, processing, errors } = useForm({
        exercicio: exercicioDefault,
        empresa: [ugDefault],
        empenho: "",
        dataInicial: "",
        dataFinal: "",
        covid: false,
        nomeFavorecido: "",
        cpfCnpj: "",
        elemento: [],
    });

    function submit(e) {
        e.preventDefault();
        get(route(`${routeFilter}`));
    }

    const { darkMode } = useContext(PropsContext);

    const [exercicioSelecionado, setExercicioSelecionado] =
        useState(exercicioDefault);
    const [ugs, setUgs] = useState(empresas);
    const [elementoSelecionado, setElementoSelecionado] = useState([]);

    useEffect(() => {
        setData("empresa", []);
        handleChangeExercicio(data.exercicio);
    }, [data.exercicio]);

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
                Filtro personalizados de empenhos
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
                        name="empenho"
                        color={darkMode ? "white" : "gray"}
                        className="bg-white dark:bg-blue-900 focus:outline-none"
                        labelProps={{
                            className: "text-gray-800 dark:text-white",
                        }}
                        containerProps={{
                            className:
                                "bg-white dark:bg-blue-900 rounded-lg min-w-[8rem]",
                        }}
                        value={data.empenho}
                        inputMode="numeric"
                        label="Número do Empenho"
                        onChange={(e) => setData("empenho", e.target.value)}
                        error={errors.empenho}
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
                    <label
                        htmlFor="covid"
                        className="flex w-fit cursor-pointer items-center text-gray-900 dark:text-white"
                    >
                        <Checkbox
                            id="covid"
                            ripple={true}
                            name="covid"
                            checked={data.covid}
                            onChange={() => setData("covid", !data.covid)}
                        />
                        <Typography className="w-fit font-medium text-inherit">
                            Covid-19
                        </Typography>
                    </label>
                </div>
                <div className="w-full flex justify-start gap-2">
                    <Input
                        name="nomeFavorecido"
                        color={darkMode ? "white" : "gray"}
                        className="bg-white dark:bg-blue-900 focus:outline-none"
                        labelProps={{
                            className: "text-gray-800 dark:text-white",
                        }}
                        containerProps={{
                            className:
                                "bg-white dark:bg-blue-900 rounded-lg min-w-[24rem]",
                        }}
                        value={data.nomeFavorecido}
                        type="text"
                        inputMode="numeric"
                        label="Nome Favorecido"
                        onChange={(e) =>
                            setData("nomeFavorecido", e.target.value)
                        }
                        error={errors.nomeFavorecido}
                    />
                    <Input
                        name="cnpj"
                        color={darkMode ? "white" : "gray"}
                        className="bg-white dark:bg-blue-900 focus:outline-none"
                        labelProps={{
                            className: "text-gray-800 dark:text-white",
                        }}
                        containerProps={{
                            className:
                                "bg-white dark:bg-blue-900 rounded-lg min-w-[16rem]",
                        }}
                        placeholder="Apenas números"
                        maxLength={14}
                        inputMode="numeric"
                        label="CPF / CNPJ"
                        value={data.cpfCnpj}
                        onChange={(e) => setData("cpfCnpj", e.target.value)}
                        error={errors.cnpj}
                    />
                    <Input
                        name="elemento"
                        color={darkMode ? "white" : "gray"}
                        className="w-full bg-white dark:bg-blue-900 focus:outline-none"
                        labelProps={{
                            className: "text-gray-800 dark:text-white",
                        }}
                        containerProps={{
                            className:
                                "bg-white dark:bg-blue-900 rounded-lg min-w-[16rem]",
                        }}
                        label="Elementos de Despesa"
                        value={JSON.stringify(data.elemento)}
                        icon={
                            <PopoverElementos
                                darkMode={darkMode}
                                elementos={elementos}
                                elementoSelecionado={data.elemento}
                                setElementoSelecionado={setData}
                            />
                        }
                        error={errors.elemento}
                        onChange={() => console.warn("Clique no botão +")}
                    />
                    <div className="w-fit sm:w-auto flex items-end">
                        <Button
                            type="submit"
                            className="interaction"
                            name="consultar"
                        >
                            Consultar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormFiltroEmpenhos;
