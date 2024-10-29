import { Option, Select } from "@material-tailwind/react";

const SelectAno = ({
    exercicios,
    exercicioSelecionado,
    setExercicioSelecionado,
}) => {
    return (
        <div className="w-full sm:w-auto">
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
                value={`${exercicioSelecionado}`}
                label="Exercício"
                defaultValue={`${exercicioSelecionado}`}
                onChange={(ex) => setExercicioSelecionado(ex)}
            >
                {exercicios.map(({ ANO }) => (
                    <Option value={`${ANO}`} key={ANO}>{`${ANO}`}</Option>
                ))}
            </Select>
        </div>
    );
};

export default SelectAno;
