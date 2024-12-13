import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input,
    List,
    ListItem,
    ListItemPrefix,
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { useEffect } from "react";
import {
    FaRegSquareCheck,
    FaRegSquareFull,
    FaRegSquarePlus,
} from "react-icons/fa6";

const PopoverGrupos = ({
    darkMode,
    grupos,
    grupoSelecionado,
    setGrupoSelecionado,
}) => {
    const handleChange = (gr) => {
        if (grupoSelecionado.includes(gr)) {
            let arr = grupoSelecionado.filter((grupo) => grupo !== gr);
            setGrupoSelecionado("grupos", arr);
            return;
        }

        setGrupoSelecionado("grupos", [...grupoSelecionado, gr]);
    };

    const selectAll = () => {
        let arr = grupos.map((gr) => gr.GRUPO);
        setGrupoSelecionado("grupos", arr);
    };

    return (
        <Popover placement="bottom">
            <PopoverHandler>
                <button
                    type="button"
                    className="bg-blue-700 dark:bg-sky-200 p-1 rounded-lg dark:fill-gray-800 fill-white"
                >
                    <FaRegSquarePlus className="fill-inherit" />
                </button>
            </PopoverHandler>
            <PopoverContent
                className={
                    (darkMode ? "dark " : "") +
                    "w-fit h-96 bg-gray-50 dark:bg-blue-800 border border-gray-500 flex flex-col justify-between gap-3"
                }
            >
                <div className="w-full flex flex-row justify-between items-center">
                    <Button
                        className="interaction w-fit flex flex-row gap-2 justify-start items-center"
                        onClick={() => selectAll()}
                    >
                        <FaRegSquareCheck className="w-6 h-6" />
                        <Typography className="text-white dark:text-gray-900">
                            Selecionar Todos
                        </Typography>
                    </Button>
                    <Button
                        className="cancel w-fit flex flex-row gap-2 justify-start items-center"
                        onClick={() => setGrupoSelecionado("grupos", [])}
                    >
                        <FaRegSquareFull className="w-6 h-6" />
                        <Typography className="text-white">Limpar</Typography>
                    </Button>
                </div>
                <div className="overflow-auto">
                    <List className="bg-white dark:bg-blue-900 rounded-lg">
                        {grupos.map(({ GRUPO, DESCRICAO }) => (
                            <ListItem
                                key={GRUPO}
                                className="!bg-blue-700 dark:!bg-sky-200 !text-white dark:!text-gray-800 py-2 px-4 flex items-center gap-2"
                                onClick={() => handleChange(GRUPO)}
                            >
                                <ListItemPrefix>
                                    <Checkbox
                                        id={GRUPO}
                                        ripple={true}
                                        checked={grupoSelecionado.includes(
                                            GRUPO
                                        )}
                                        onChange={() => handleChange(GRUPO)}
                                    />
                                </ListItemPrefix>
                                <Typography className="font-medium text-inherit">
                                    {GRUPO} - {DESCRICAO}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default PopoverGrupos;
