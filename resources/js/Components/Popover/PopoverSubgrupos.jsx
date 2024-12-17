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

const PopoverSubGrupos = ({
    darkMode,
    subgrupos,
    subGrupoSelecionado,
    setsubGrupoSelecionado,
}) => {
    const handleChange = (gr) => {
        if (subGrupoSelecionado.includes(gr)) {
            let arr = subGrupoSelecionado.filter((subgrupo) => subgrupo !== gr);
            setsubGrupoSelecionado("subgrupos", arr);
            return;
        }

        setsubGrupoSelecionado("subgrupos", [...subGrupoSelecionado, gr]);
    };

    const selectAll = () => {
        let arr = subgrupos.map((gr) => gr.SUBGRUPO);
        setsubGrupoSelecionado("subgrupos", arr);
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
                    "w-fit max-h-96 bg-gray-50 dark:bg-blue-800 border border-gray-500 flex flex-col justify-between gap-3"
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
                        onClick={() => setsubGrupoSelecionado("subgrupos", [])}
                    >
                        <FaRegSquareFull className="w-6 h-6" />
                        <Typography className="text-white">Limpar</Typography>
                    </Button>
                </div>
                <div className="overflow-auto">
                    {subgrupos.length > 0 ? (
                        <List className="bg-white dark:bg-blue-900 rounded-lg">
                            {subgrupos.map(({ GRUPO, SUBGRUPO, DESCRICAO }) => (
                                <ListItem
                                    key={`${GRUPO}-${SUBGRUPO}`}
                                    className="!bg-blue-700 dark:!bg-sky-200 !text-white dark:!text-gray-800 py-2 px-4 flex items-center gap-2"
                                    onClick={() => handleChange(SUBGRUPO)}
                                >
                                    <ListItemPrefix>
                                        <Checkbox
                                            id={SUBGRUPO}
                                            ripple={true}
                                            checked={subGrupoSelecionado.includes(
                                                SUBGRUPO
                                            )}
                                            onChange={() =>
                                                handleChange(SUBGRUPO)
                                            }
                                        />
                                    </ListItemPrefix>
                                    <Typography className="font-medium text-inherit">
                                        {SUBGRUPO} - {DESCRICAO}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <Typography className="font-medium text-inherit !text-gray-800 dark:!text-white">
                            Selecione um grupo de publicação
                        </Typography>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default PopoverSubGrupos;
