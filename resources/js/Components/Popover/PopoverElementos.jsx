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
import {
    FaRegSquareCheck,
    FaRegSquareFull,
    FaRegSquarePlus,
} from "react-icons/fa6";

export default function PopoverElementos({
    darkMode,
    elementos,
    elementoSelecionado,
    setElementoSelecionado,
}) {
    const handleChange = (el) => {
        if (elementoSelecionado.includes(el)) {
            let arr = elementoSelecionado.filter((elemento) => elemento !== el);
            setElementoSelecionado("elemento", arr);
            return;
        }

        setElementoSelecionado("elemento", [...elementoSelecionado, el]);
    };

    const selectAll = () => {
        let arr = elementos.map((ug) => ug.ELEMENTO);
        setElementoSelecionado("elemento", arr);
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
                        className="interaction w-fit flex flex-row gap-2 justify-start items-center"
                        onClick={() => setElementoSelecionado("elemento", [])}
                    >
                        <FaRegSquareFull className="w-6 h-6" />
                        <Typography className="text-white dark:text-gray-900">
                            Limpar
                        </Typography>
                    </Button>
                </div>
                <List className="bg-white dark:bg-blue-900 rounded-md max-h-full overflow-y-auto">
                    {elementos.map(({ ELEMENTO, NOME }) => (
                        <ListItem key={ELEMENTO} className="p-0">
                            <label
                                htmlFor={ELEMENTO}
                                className="flex w-full cursor-pointer items-center px-3 py-2 text-gray-900 dark:text-white hover:dark:text-gray-900"
                            >
                                <ListItemPrefix className="mr-3">
                                    <Checkbox
                                        id={ELEMENTO}
                                        ripple={true}
                                        className="hover:before:opacity-0"
                                        containerProps={{
                                            className: "p-0",
                                        }}
                                        checked={elementoSelecionado.includes(
                                            ELEMENTO
                                        )}
                                        onChange={() => handleChange(ELEMENTO)}
                                    />
                                </ListItemPrefix>
                                <Typography className="font-medium text-inherit">
                                    {ELEMENTO} - {NOME}
                                </Typography>
                            </label>
                        </ListItem>
                    ))}
                </List>
            </PopoverContent>
        </Popover>
    );
}
