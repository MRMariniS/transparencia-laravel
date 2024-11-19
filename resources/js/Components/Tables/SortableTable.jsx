import { Link, router } from "@inertiajs/react";
import { Typography, Button, CardFooter } from "@material-tailwind/react";
import { FaSort, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Modal from "../Modal";

export function SortableTable({
    tableData,
    tableHeaders,
    headerKeys = [],
    openInModal = false,
    aplicacaoModal = "",
    routeName = "",
    paramRoute = "",
    icon = <FaArrowUpRightFromSquare />,
    valueFieldParam = "",
    newWindow = "_self",
    paginate = null,
    urlPaginate = null,
}) {
    const TABLE_HEAD = tableHeaders;
    const TABLE_ROWS = paginate ? tableData.data : tableData;

    const page = (page, urlPaginate) => {
        console.log(urlPaginate);
        urlPaginate
            ? router.get(`${urlPaginate}&page=${page}`)
            : router.get(`?page=${page}`);
    };

    return (
        <>
            <table className="w-full max-w-full table-auto text-left">
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
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-gray-800 dark:border-white";
                        const isOdd = index % 2;

                        if (paramRoute != "" && valueFieldParam != "") {
                            var param = content[valueFieldParam];
                        }

                        if (routeName != "") {
                            if (!param) {
                                var detalhar = <td className={classes}></td>;
                            } else if (openInModal == true) {
                                var detalhar = (
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <Modal
                                                routeName={route(
                                                    "publicacao.formatJson",
                                                    param
                                                )}
                                                aplicacao={aplicacaoModal}
                                            />
                                        </div>
                                    </td>
                                );
                            } else {
                                var detalhar = (
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-gray-800 dark:text-white text-wrap"
                                            >
                                                {content[valueFieldParam] !=
                                                null ? (
                                                    <a
                                                        as="link"
                                                        target={newWindow}
                                                        href={route(
                                                            routeName,
                                                            param
                                                        )}
                                                    >
                                                        {icon}
                                                    </a>
                                                ) : (
                                                    <></>
                                                )}
                                            </Typography>
                                        </div>
                                    </td>
                                );
                            }
                        }

                        return (
                            <tr
                                key={index}
                                className={
                                    isOdd ? "" : "bg-white dark:bg-blue-900"
                                }
                            >
                                {detalhar ? detalhar : <></>}
                                {headerKeys.map((keyColumn) => {
                                    return (
                                        <td key={keyColumn} className={classes}>
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
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {paginate ? (
                <CardFooter className="flex items-center justify-between border-t border-gray-800 dark:border-white p-4">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-gray-800 dark:text-white"
                    >
                        Página {tableData.current_page} de {tableData.last_page}{" "}
                        - {tableData.from} a {tableData.to} de {tableData.total}{" "}
                        registro(s)
                    </Typography>
                    <div className="flex gap-2">
                        {tableData.current_page > 1 ? (
                            <Button
                                variant="outlined"
                                size="sm"
                                className="interaction"
                                onClick={() =>
                                    page(
                                        tableData.current_page - 1,
                                        urlPaginate
                                    )
                                }
                            >
                                Anterior
                            </Button>
                        ) : (
                            <></>
                        )}
                        {tableData.current_page != tableData.last_page ? (
                            <Button
                                variant="outlined"
                                size="sm"
                                className="interaction"
                                onClick={() =>
                                    page(
                                        tableData.current_page + 1,
                                        urlPaginate
                                    )
                                }
                            >
                                Próxima
                            </Button>
                        ) : (
                            <></>
                        )}
                    </div>
                </CardFooter>
            ) : (
                <></>
            )}
        </>
    );
}
