import { Option, Select } from "@material-tailwind/react";
import React from "react";

const FormAnoEntidade = ({
    exercicios,
    valueExercicio,
    setValueExercicio,
    empresas,
    setEmpresas,
    ugDefault,
    setUgDefault,
}) => {
    return (
        <>
            <div className="w-full sm:w-auto m-2">
                <Select
                    className="text-gray-800 dark:text-white"
                    labelProps={{
                        className: "text-gray-800 dark:text-white",
                    }}
                    containerProps={{
                        className: "bg-white dark:bg-blue-900 rounded-lg",
                    }}
                    menuProps={{
                        className:
                            "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                    }}
                    value={`${valueExercicio}`}
                    label="Exercício"
                    defaultValue={valueExercicio}
                    onChange={(exercicio) => handleChangeExercicio(exercicio)}
                >
                    {exercicios.map(({ ANO }) => (
                        <Option value={`${ANO}`} key={ANO}>{`${ANO}`}</Option>
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
                    value={`${nomeUgDefault}`}
                    label="Selecione uma entidade"
                    defaultValue={ugDefault}
                    onChange={(val) => {
                        setUgDefault(val);
                    }}
                >
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
        </>
    );
};

export default FormAnoEntidade;
