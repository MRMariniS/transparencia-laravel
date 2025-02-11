import { router } from "@inertiajs/react";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";
import { useSortableTable } from "@/hooks/useSortableTable";
import { useEffect, useState } from "react";

const Table = ({
    caption = "",
    columns,
    data,
    routeName,
    paginate = false,
    urlPaginate,
}) => {
    const [tableData, handleSorting] = useSortableTable(
        paginate ? data.data : data
    );

    const page = (page, url) => {
        url ? router.get(`${url}&page=${page}`) : router.get(`?page=${page}`);
    };

    useEffect(() => {}, []);

    return (
        <Card className="h-full w-full bg-gray-50 dark:bg-blue-800">
            {caption === "" ? (
                <></>
            ) : (
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="bg-inherit rounded-lg"
                >
                    <Typography className="text-gray-800 dark:text-white">
                        {caption}
                    </Typography>
                </CardHeader>
            )}
            <CardBody className="px-0">
                <table className="w-full max-w-full table-auto text-left">
                    <TableHead {...{ columns, handleSorting }} />
                    <TableBody {...{ columns, tableData, routeName }} />
                </table>
            </CardBody>
            {paginate ? (
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography
                        variant="small"
                        className="font-normal text-gray-800 dark:text-white"
                    >
                        Página {data.current_page} de {data.last_page} -{" "}
                        {data.from} a {data.to} de {data.total} registro(s)
                    </Typography>
                    <div className="flex gap-2">
                        {data.current_page > 1 ? (
                            <Button
                                onClick={() =>
                                    page(data.current_page - 1, urlPaginate)
                                }
                                size="sm"
                                className="interaction-color"
                            >
                                Anterior
                            </Button>
                        ) : (
                            <></>
                        )}
                        {data.current_page !== data.last_page ? (
                            <Button
                                onClick={() =>
                                    page(data.current_page + 1, urlPaginate)
                                }
                                size="sm"
                                className="interaction-color"
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
        </Card>
    );
};

export default Table;
