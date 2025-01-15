import { Link, router } from "@inertiajs/react";
import { Typography, Button, CardFooter } from "@material-tailwind/react";
import { FaSort, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Modal from "../Modal";

function sortTable(n) {
    var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
    table = document.getElementById("Sortable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
      first, which contains table headers): */
        for (i = 1; i < rows.length - 1; i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
        one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            // Check if the two rows should switch place, based on the direction, asc or desc:
            if (dir == "asc") {
                if (
                    !isNaN(parseFloat(x.innerText)) &&
                    !isNaN(parseFloat(y.innerText))
                ) {
                    if (parseFloat(x.innerText) > parseFloat(y.innerText)) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (
                    x.innerText.toLowerCase() > y.innerText.toLowerCase()
                ) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                console.log(x.innerText);
                if (
                    !isNaN(parseFloat(x.innerText)) &&
                    !isNaN(parseFloat(y.innerText))
                ) {
                    if (parseFloat(x.innerText) < parseFloat(y.innerText)) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (
                    x.innerText.toLowerCase() < y.innerText.toLowerCase()
                ) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

export function SortableTable({
    idTable = "Sortable",
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
        urlPaginate
            ? router.get(`${urlPaginate}&page=${page}`)
            : router.get(`?page=${page}`);
    };

    const objectKeyColumn = (content, keyColumn) => {
        if (typeof keyColumn == "object") {
            const keys = Object.keys(keyColumn);
            keys.forEach((key, index) => {
                return content[key][keyColumn[key][index]];
            });
        } else {
            return content[keyColumn];
        }
    };

    // const sortTable = (key) => {
    //     const sortedData = [...TABLE_ROWS].sort((a, b) => {
    //         if (a[key] < b[key]) return -1;
    //         if (a[key] > b[key]) return 1;
    //         return 0;
    //     });
    //     return sortedData;
    // };

    return (
        <>
            <table
                className="w-full max-w-full table-auto text-left"
                id={idTable}
            >
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head, index) => (
                            <th
                                id={index}
                                key={head}
                                className="cursor-pointer border-y border-blue-gray-100 bg-blue-700 dark:bg-sky-200 p-4 transition-colors hover:bg-blue-500 dark:hover:bg-sky-300"
                            >
                                <Typography
                                    variant="small"
                                    className="flex items-center justify-between gap-2 font-normal leading-none text-white dark:text-gray-800"
                                    onClick={() => sortTable(index)}
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
                                {headerKeys.map((keyColumn, index) => {
                                    return (
                                        <td
                                            key={keyColumn}
                                            className={classes}
                                            id={`td${index + 1}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-gray-800 dark:text-white text-wrap"
                                                >
                                                    {objectKeyColumn(
                                                        content,
                                                        keyColumn
                                                    )}
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
