import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";
import {
    FaUserPlus,
    FaMagnifyingGlass,
    FaSort,
    FaArrowUpRightFromSquare
} from "react-icons/fa6";
import PopoverForm from "./PopoverForm";
import { Link } from "@inertiajs/react";



export function SortableTable({ dataTable, tableHeader, routeName = '', paramRoute = '', valueFieldParam = '' }) {
    console.log(dataTable)
    const TABLE_HEAD = tableHeader;
    const TABLE_ROWS = dataTable;

    const page = (page) => {
        window.location.href = `?page=${page}`;
    }

    return (
        <>
            <table className="mt-4 w-full max-w-full table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head, index) => (
                            <th
                                key={head}
                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-700 dark:bg-sky-200 p-4 transition-colors hover:bg-blue-500 dark:hover:bg-sky-300"
                            >
                                <Typography
                                    variant="small"
                                    className="flex items-center justify-between gap-2 font-normal leading-none text-white dark:text-gray-800"
                                >
                                    {head}
                                    {index !== TABLE_HEAD.length - 1 && (
                                        <FaSort
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        />
                                    )}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map((content, index) => {
                        console.log(content)
                        const keys = Object.keys(content);
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-gray-800 dark:border-white";
                        const isOdd = index % 2;

                        if (paramRoute != '' && valueFieldParam != '') {
                            var param = {
                                [paramRoute]: content[valueFieldParam]
                            }
                        }

                        if (routeName != '') {
                            var detalhar = (
                                <td className={classes}>
                                    <div className="flex items-center gap-3">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-gray-800 dark:text-white text-wrap"
                                        >
                                            <Link href={param ? route(routeName, param) : route(routeName)}>
                                                <FaArrowUpRightFromSquare />
                                            </Link>
                                        </Typography>
                                    </div>
                                </td>
                            )
                        }


                        return (
                            <tr key={index} className={isOdd ? "" : "bg-white dark:bg-blue-900"}>
                                {detalhar ? detalhar : <></>}
                                {keys.map((keyColumn) => {
                                    return (

                                        <td key={keyColumn} className={classes} >
                                            <div className="flex items-center gap-3">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-gray-800 dark:text-white text-wrap"
                                                >
                                                    {content[keyColumn]}
                                                </Typography>
                                            </div>
                                        </td>

                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <CardFooter className="flex items-center justify-between border-t border-gray-800 dark:border-white p-4">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-gray-800 dark:text-white"
                >
                    Página {dataTable.current_page} de {dataTable.last_page} -{" "}
                    {dataTable.from} a {dataTable.to} de {dataTable.total} registro(s)
                </Typography>
                <div className="flex gap-2">
                    {dataTable.current_page > 1 ? (
                        <Button
                            variant="outlined"
                            size="sm"
                            className="interaction"
                            onClick={() => page(dataTable.current_page - 1)}
                        >
                            Anterior
                        </Button>
                    ) : (<></>)}
                    {dataTable.current_page != dataTable.last_page ? (
                        <Button
                            variant="outlined"
                            size="sm"
                            className="interaction"
                            onClick={() => page(dataTable.current_page + 1)}
                        >
                            Próxima
                        </Button>
                    ) : (<></>)}
                </div>
            </CardFooter>
        </>
    );
}
