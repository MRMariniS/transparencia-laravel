import { Option, Select } from "@material-tailwind/react";

const SelectEntidade = ({ ugs, ugSelecionada, setUgSelecionada, disabled }) => {
    return (
        <div className="w-full sm:w-auto m-2">
            <Select
                disabled={disabled}
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
                defaultValue={`${ugSelecionada}`}
                label="Selecione uma entidade"
                onChange={(ug) => {
                    setUgSelecionada(ug);
                }}
            >
                <Option value="" key="consolidado">
                    CONSOLIDADO
                </Option>
                {ugs.map(({ EMPRESA, NOME }) => {
                    return (
                        <Option
                            value={`${EMPRESA}`}
                            key={EMPRESA}
                        >{`${NOME}`}</Option>
                    );
                })}
            </Select>
        </div>
    );
};

export default SelectEntidade;
