import { Option, Select } from "@material-tailwind/react";

const SelectGrupos = ({ grupos, grupoSelecionado, setGrupoSelecionado }) => {
    return (
        <div className="w-full sm:w-auto m-2">
            <Select
                name="grupos"
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
                label="Grupos"
                value={grupoSelecionado}
                onChange={(value) => setGrupoSelecionado(value)}
            >
                {grupos.map(({ GRUPO, DESCRICAO }) => {
                    return (
                        <Option
                            value={`${GRUPO}`}
                            key={GRUPO}
                        >{`${DESCRICAO}`}</Option>
                    );
                })}
            </Select>
        </div>
    );
};

export default SelectGrupos;
