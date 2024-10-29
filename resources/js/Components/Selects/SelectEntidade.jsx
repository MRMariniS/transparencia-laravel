import { Option, Select } from "@material-tailwind/react";

const SelectEntidade = ({ ugs, ugSelecionada, setUgSelecionada }) => {
    return (
        <div className="w-full sm:w-auto">
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
                value={ugSelecionada}
                label={ugSelecionada ? "Entidade" : "CONSOLIDADO"}
                onChange={(value) => setUgSelecionada(value)}
            >
                {ugs.map(({ EMPRESA, NOME }) => (
                    <Option value={`${EMPRESA}`} key={EMPRESA}>
                        {NOME}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default SelectEntidade;
