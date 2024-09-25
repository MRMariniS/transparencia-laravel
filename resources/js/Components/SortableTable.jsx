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
} from "react-icons/fa6";
import PopoverForm from "./PopoverForm";



export function SortableTable({ dataTable, tableHeader, tabs = [] }) {
    //console.log(dataTable.data);
    const TABLE_HEAD = tableHeader;
    const TABLE_ROWS = dataTable.data;
    const TABS = tabs;

    const page = (page) => {
        window.location.href=`?page=${page}`;
    }    

    return (
        <Card className="h-full w-full bg-gray-50 dark:bg-blue-800 ">
            <CardHeader
                floated={false}
                shadow={false}
                className="rounded-none bg-inherit"
            >
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography
                            variant="h5"
                            className="text-gray-800 dark:text-white"
                        >
                            Informações de interesse coletivo
                        </Typography>
                        <Typography className="mt-1 font-normal text-gray-800 dark:text-white">
                            Veja abaixo alguns pedidos que podem te ajudar
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        {/* <Button
                            variant="outlined"
                            size="sm"
                            className="interaction"
                        >
                            Meus pedidos
                        </Button> */}
                        <PopoverForm />
                        <Button
                            className="interaction flex items-center gap-3"
                            size="sm"
                        >
                            <FaUserPlus strokeWidth={2} className="h-4 w-4" />
                            Novo pedido
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    {TABS.length > 0 ? (
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader
                                className="bg-red dark:bg-blue-900"
                                indicatorProps={{
                                    className: "bg-gray-50 dark:bg-blue-800",
                                }}
                            >
                                {TABS.map(({ label, value, classes }) => (
                                    <Tab key={value} value={value} className={classes ? classes : ""}>
                                        <Typography className="text-gray-800 dark:text-white">
                                            &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                        </Typography>
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                    ) : (<></>)
                    }
                    <div className="w-full md:w-72 bg-white dark:bg-blue-900">
                        <Input
                            label="Search"
                            icon={
                                <FaMagnifyingGlass
                                    onClick={() => console.log("SearchTable")}
                                    className="h-5 w-5 cursor-pointer fill-gray-800 dark:fill-white"
                                />
                            }
                            labelProps={{ className: "!text-gray-400" }}
                            className="text-gray-800 dark:text-white"
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-y-auto overflow-x-hidden px-0">
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
                            const keys = Object.keys(content);
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-gray-800 dark:border-white";
                            const isOdd = index % 2;

                            return (
                                <tr key={content.ID} className={isOdd ? "" : "bg-white dark:bg-blue-900"}>
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
            </CardBody>
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
        </Card>
    );
}
