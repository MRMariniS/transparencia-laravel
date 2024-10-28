import { PropsContext } from "@/Layouts/RootLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import {
    Button,
    Checkbox,
    Input,
    Option,
    Select,
    Typography,
} from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";

import SelectAno from "../Selects/SelectAno";
import SelectEntidade from "../Selects/SelectEntidade";

const FormFiltroEmpenhos = ({
    empresas,
    elementos,
    exercicios,
    exercicioDefault,
    ugDefault,
}) => {
    const { darkMode } = useContext(PropsContext);
    const { props } = usePage();

    const [exercicioSelecionado, setExercicioSelecionado] =
        useState(exercicioDefault);
    const [ugs, setUgs] = useState(empresas);
    const [ugSelecionada, setUgSelecionada] = useState();

    useEffect(() => {
        setUgSelecionada();
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
                <form className="mt-4 w-full">
                    <div className="w-full flex  justify-start">
                        <SelectAno
                            exercicios={exercicios}
                            exercicioSelecionado={exercicioSelecionado}
                            setExercicioSelecionado={setExercicioSelecionado}
                        />
                        <SelectEntidade
                            ugs={ugs}
                            ugSelecionada={ugSelecionada}
                            setUgSelecionada={setUgSelecionada}
                        />
                        <div className="w-full sm:w-auto m-2">
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
                        </div>
                        <div className="w-full sm:w-auto m-2">
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
                        </div>
                        <div className="w-full sm:w-auto m-2">
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
                        </div>
                        <div className="w-full sm:w-auto m-2">
                            <Checkbox label="Covid-19" />
                        </div>
                    </div>
                    <div className="flex  justify-start">
                        <div className="w-full sm:w-auto m-2">
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
                        </div>
                        <div className="w-full sm:w-auto m-2">
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
                        </div>
                        <div className="w-full sm:w-auto m-2">
                            <Select
                                className="text-gray-800 dark:text-white"
                                labelProps={{
                                    className: "text-gray-800 dark:text-white",
                                }}
                                containerProps={{
                                    className:
                                        "bg-white dark:bg-blue-900 rounded-lg min-w-[27rem]",
                                }}
                                menuProps={{
                                    className:
                                        "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                                }}
                                label="Elementos"
                            >
                                {props.elementos.map(({ ELEMENTO, NOME }) => {
                                    return (
                                        <Option
                                            value={`${ELEMENTO}`}
                                            key={ELEMENTO}
                                        >{`${NOME}`}</Option>
                                    );
                                })}
                            </Select>
                        </div>
                        <div className="w-full sm:w-auto m-2 flex items-end">
                            <Button size="md" className="interaction">
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
