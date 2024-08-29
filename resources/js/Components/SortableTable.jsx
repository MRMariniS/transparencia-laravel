import { usePage } from "@inertiajs/react";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import {
    FaPencil,
    FaUserPlus,
    FaMagnifyingGlass,
    FaSort,
} from "react-icons/fa6";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];





export function SortableTable({dataTable, tableHeader, tabs = []}) {
    const TABLE_HEAD = tableHeader;
    const TABLE_ROWS = dataTable;

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
                        <Button
                            variant="outlined"
                            size="sm"
                            className="interaction"
                        >
                            Meus pedidos
                        </Button>
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
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader
                            className="bg-white dark:bg-blue-900"
                            indicatorProps={{
                                className: "bg-gray-50 dark:bg-blue-800",
                            }}
                        >
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    <Typography className="text-gray-800 dark:text-white">
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Typography>
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
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
                                    {keys.map((keyColumn)=>{
                                        return(
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
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant="outlined"
                        size="sm"
                        className="interaction"
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outlined"
                        size="sm"
                        className="interaction"
                    >
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
