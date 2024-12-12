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

const PopoverGruposSubgrupos = ({
    darkMode,
    grupos,
    grupoSelecionado,
    setGrupoSelecionado,
    subgrupos,
    setSubgrupos,
}) => {
    useEffect(() => {}, [grupoSelecionado]);

    console.log(grupos);
    console.log(subgrupos);

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
                    <List className="bg-white dark:bg-blue-900">
                        {grupos.map(({ GRUPO, DESCRICAO }) => (
                            <ListItem key={GRUPO} className="p-0">
                                <label
                                    htmlFor={GRUPO}
                                    className="flex w-full cursor-pointer items-center px-3 py-2 text-gray-900 dark:text-white hover:dark:text-gray-900"
                                    onClick={() => handleChange(GRUPO)}
                                >
                                    <ListItemPrefix>
                                        <Checkbox
                                            id={GRUPO}
                                            ripple={true}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                            checked={grupoSelecionado.includes(
                                                GRUPO
                                            )}
                                            onChange={() => handleChange(GRUPO)}
                                        />
                                    </ListItemPrefix>
                                    <Typography className="font-medium text-inherit">
                                        {GRUPO} - {DESCRICAO}
                                    </Typography>
                                </label>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default PopoverGruposSubgrupos;
