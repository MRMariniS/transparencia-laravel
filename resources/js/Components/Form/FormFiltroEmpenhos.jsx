import { PropsContext } from "@/Layouts/RootLayout";
import { Head, useForm } from "@inertiajs/react";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";

import SelectAno from "../Selects/SelectAno";
import PopoverElementos from "../Popover/PopoverElementos";
import PopoverEntidade from "../Popover/PopoverEntidade";

const FormFiltroEmpenhos = ({
    empresas,
    elementos,
    exercicios,
    exercicioDefault,
    ugDefault,
}) => {
    const { data, setData, post, processing, errors } = useForm({
        exercicio: exercicioDefault,
        entidade: "",
        numero: "",
        datainicial: "",
        datafinal: "",
        covid: "",
        nomefavorecido: "",
        cnpj: "",
        elemento: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("empenho.filter"));
    }

    const { darkMode } = useContext(PropsContext);

    const [exercicioSelecionado, setExercicioSelecionado] =
        useState(exercicioDefault);
    const [ugs, setUgs] = useState(empresas);
    const [ugSelecionada, setUgSelecionada] = useState([]);
    const [elementoSelecionado, setElementoSelecionado] = useState([]);

    useEffect(() => {
        setUgSelecionada([]);
        handleChangeExercicio(exercicioSelecionado);
    }, [exercicioSelecionado]);

    const handleChangeExercicio = (ex) => {
        axios.get(route("scpi.tabempresa", ex)).then((res) => {
            setUgs(res.data[0]);
            setExercicioSelecionado(res.data.exercicio);
        });
    };

    return (
        <>
            <Head title="Empenhos" />
            <div className="w-full gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                <Typography
                    className="text-gray-800 dark:text-white mb-2"
                    variant="h4"
                    color="blue-gray"
                >
                    Empenhos
                </Typography>
                <Typography
                    className="text-gray-800 dark:text-white mb-2 mt-1 font-normal"
                    color="gray"
                >
                    Filtro personalizados de empenhos
                </Typography>
                <form
                    className="mt-4 w-full flex flex-col gap-2"
                    onSubmit={submit}
                    method={post}
                >
                    <div className="w-full flex justify-start gap-2">
                        <SelectAno
                            exercicios={exercicios}
                            exercicioSelecionado={exercicioSelecionado}
                            setExercicioSelecionado={setExercicioSelecionado}
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
                            value={
                                data.empresa && JSON.stringify(ugSelecionada)
                            }
                            icon={
                                <PopoverEntidade
                                    darkMode={darkMode}
                                    ugs={ugs}
                                    ugSelecionada={ugSelecionada}
                                    setUgSelecionada={setUgSelecionada}
                                />
                            }
                        />
                        {errors.entidade && <div>{errors.entidade}</div>}
                        <Input
                            name="numero"
                            color={darkMode ? "white" : "gray"}
                            className="bg-white dark:bg-blue-900 focus:outline-none"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg min-w-[8rem]",
                            }}
                            type="number"
                            inputMode="numeric"
                            label="Número do Empenho"
                        />
                        {errors.numero && <div>{errors.numero}</div>}
                        <Input
                            name="datainicial"
                            color={darkMode ? "white" : "gray"}
                            className="bg-white dark:bg-blue-900 focus:outline-none"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            type="date"
                            inputMode="numeric"
                            label="Data Inicial"
                        />
                        {errors.datainicial && <div>{errors.datainicial}</div>}
                        <Input
                            name="datafinal"
                            color={darkMode ? "white" : "gray"}
                            className="bg-white dark:bg-blue-900 focus:outline-none"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            type="date"
                            inputMode="numeric"
                            label="Data Final"
                        />
                        {errors.datafinal && <div>{errors.datafinal}</div>}
                        <label
                            htmlFor="covid"
                            className="flex w-fit cursor-pointer items-center text-gray-900 dark:text-white"
                        >
                            <Checkbox id="covid" ripple={true} name="covid" />
                            <Typography className="w-fit font-medium text-inherit">
                                Covid-19
                            </Typography>
                        </label>
                        {errors.covid && <div>{errors.covid}</div>}
                    </div>
                    <div className="w-full flex justify-start gap-2">
                        <Input
                            name="nomefavorecido"
                            color={darkMode ? "white" : "gray"}
                            className="bg-white dark:bg-blue-900 focus:outline-none"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg min-w-[24rem]",
                            }}
                            type="text"
                            inputMode="numeric"
                            label="Nome Favorecido"
                        />
                        {errors.nomefavorecido && (
                            <div>{errors.nomefavorecido}</div>
                        )}
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
                        />
                        {errors.cnpj && <div>{errors.cnpj}</div>}
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
                            value={JSON.stringify(elementoSelecionado)}
                            icon={
                                <PopoverElementos
                                    darkMode={darkMode}
                                    elementos={elementos}
                                    elementoSelecionado={elementoSelecionado}
                                    setElementoSelecionado={
                                        setElementoSelecionado
                                    }
                                />
                            }
                        />
                        {errors.elemento && <div>{errors.elemento}</div>}
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
        </>
    );
};

export default FormFiltroEmpenhos;
