import { Option, Select } from "@material-tailwind/react";

const SelectElemento = ({
    elementos,
    elementoSelecionado,
    setElementoSelecionado,
}) => {
    return (
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
                label="Elemento de Despesa"
                value={elementoSelecionado}
                onChange={(value) => setElementoSelecionado(value)}
            >
                {elementos.map(({ ELEMENTO, NOME }) => {
                    return (
                        <Option
                            value={`${ELEMENTO}`}
                            key={ELEMENTO}
                        >{`${NOME}`}</Option>
                    );
                })}
            </Select>
        </div>
    );
};

export default SelectElemento;
