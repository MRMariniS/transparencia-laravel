import { PropsContext } from "@/Layouts/RootLayout";
import { Head } from "@inertiajs/react";
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
            <div className="w-full gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4 mt-4">
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
                <form className="mt-4 w-full flex flex-col gap-2">
                    <div className="w-full flex justify-start gap-2">
                        <SelectAno
                            exercicios={exercicios}
                            exercicioSelecionado={exercicioSelecionado}
                            setExercicioSelecionado={setExercicioSelecionado}
                        />
                        <Input
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
                            value={JSON.stringify(ugSelecionada)}
                            icon={
                                <PopoverEntidade
                                    darkMode={darkMode}
                                    ugs={ugs}
                                    ugSelecionada={ugSelecionada}
                                    setUgSelecionada={setUgSelecionada}
                                />
                            }
                        />
                        <Input
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
                        <Input
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
                        <Input
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
                        <label
                            htmlFor="covid"
                            className="flex w-fit cursor-pointer items-center text-gray-900 dark:text-white"
                        >
                            <Checkbox id="covid" ripple={true} />
                            <Typography className="w-fit font-medium text-inherit">
                                Covid-19
                            </Typography>
                        </label>
                    </div>
                    <div className="w-full flex justify-start gap-2">
                        <Input
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
                        <Input
                            color={darkMode ? "white" : "gray"}
                            className="bg-white dark:bg-blue-900 focus:outline-none"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg min-w-[16rem]",
                            }}
                            type="number"
                            inputMode="numeric"
                            label="CNPJ"
                        />
                        <Input
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
                        <div className="w-fit sm:w-auto flex items-end">
                            <Button className="interaction">Consultar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormFiltroEmpenhos;
