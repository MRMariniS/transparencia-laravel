import { PropsContext } from "@/Layouts/RootLayout";
import { Inertia } from "@inertiajs/inertia";
import { router, usePage } from "@inertiajs/react";
import {
    Button,
    Checkbox,
    Input,
    Option,
    Select,
    Typography,
} from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import FormAnoEntidade from "../FormAnoEntidade";
import axios from "axios";

const FormFiltroEmpenhos = () => {
    const { darkMode } = useContext(PropsContext);
    const { props } = usePage();

    console.log(props);

    const [empresas, setEmpresas] = useState(props.empresas);
    const [valueExercicio, setValueExercicio] = useState(
        props.exercicioDefault
    );

    const [valueUg, setValueUg] = useState("");

    const handleChangeExercicio = (exercicio) => {
        axios.get(route("scpi.tabempresa", exercicio)).then((res) => {
            setEmpresas(res.data[0]);
            setValueExercicio(res.data.exercicio);
        });
    };

    return (
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
                    <div className="w-full sm:w-auto m-2">
                        <Select
                            className="text-gray-800 dark:text-white"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            menuProps={{
                                className:
                                    "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                            }}
                            value={`${valueExercicio}`}
                            defaultValue={`${valueExercicio}`}
                            label="Exercício"
                            onChange={(exercicio) =>
                                handleChangeExercicio(exercicio)
                            }
                        >
                            {props.exercicios.map(({ ANO }) => (
                                <Option
                                    value={`${ANO}`}
                                    key={ANO}
                                >{`${ANO}`}</Option>
                            ))}
                        </Select>
                    </div>
                    <div className="w-full sm:w-auto m-2">
                        <Select
                            className="text-gray-800 dark:text-white"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg min-w-[24rem]",
                            }}
                            menuProps={{
                                className:
                                    "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                            }}
                            defaultValue={`${valueUg}`}
                            label="Selecione uma entidade"
                            onChange={(val) => {
                                setValueUg(val);
                            }}
                        >
                            <Option value="" key="todos">
                                TODAS
                            </Option>
                            {empresas.map(({ EMPRESA, NOME }) => {
                                return (
                                    <Option
                                        value={`${EMPRESA}`}
                                        key={EMPRESA}
                                    >{`${NOME}`}</Option>
                                );
                            })}
                        </Select>
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
    );
};

export default FormFiltroEmpenhos;