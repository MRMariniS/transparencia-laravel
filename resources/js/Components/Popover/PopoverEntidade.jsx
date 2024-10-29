import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
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

export default function PopoverEntidade({
    darkMode,
    ugs,
    ugSelecionada,
    setData,
}) {
    const handleChange = (el) => {
        if (ugSelecionada.includes(el)) {
            let arr = ugSelecionada.filter((elemento) => elemento !== el);
            setData("empresa", arr);
            return;
        }

        setData("empresa", [...ugSelecionada, el]);
    };

    const selectAll = () => {
        let arr = ugs.map((ug) => ug.EMPRESA);
        setData("empresa", arr);
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
                    "w-fit h-fit overflow-y-auto bg-gray-50 dark:bg-blue-800 border border-gray-500"
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
                        onClick={() => setData("empresa", [])}
                    >
                        <FaRegSquareFull className="w-6 h-6" />
                        <Typography className="text-white dark:text-gray-900">
                            Limpar
                        </Typography>
                    </Button>
                </div>
                <List>
                    {ugs.map(({ EMPRESA, NOME }) => (
                        <ListItem key={EMPRESA} className="p-0">
                            <label
                                htmlFor={EMPRESA}
                                className="flex w-full cursor-pointer items-center px-3 py-2 text-gray-900 dark:text-white hover:dark:text-gray-900"
                            >
                                <ListItemPrefix className="mr-3">
                                    <Checkbox
                                        id={EMPRESA}
                                        ripple={true}
                                        className="hover:before:opacity-0"
                                        containerProps={{
                                            className: "p-0",
                                        }}
                                        checked={ugSelecionada.includes(
                                            EMPRESA
                                        )}
                                        onChange={() => handleChange(EMPRESA)}
                                    />
                                </ListItemPrefix>
                                <Typography className="font-medium text-inherit">
                                    {NOME}
                                </Typography>
                            </label>
                        </ListItem>
                    ))}
                </List>
            </PopoverContent>
        </Popover>
    );
}
