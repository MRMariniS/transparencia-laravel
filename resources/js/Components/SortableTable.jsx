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

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        date: "19/09/17",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        date: "24/12/08",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
];

export function SortableTable() {
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
                            Members list
                        </Typography>
                        <Typography className="mt-1 font-normal text-gray-800 dark:text-white">
                            See information about all members
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button
                            variant="outlined"
                            size="sm"
                            className="interaction"
                        >
                            view all
                        </Button>
                        <Button
                            className="interaction flex items-center gap-3"
                            size="sm"
                        >
                            <FaUserPlus strokeWidth={2} className="h-4 w-4" />
                            Add member
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
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
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
                        {TABLE_ROWS.map(
                            (
                                { img, name, email, job, org, online, date },
                                index
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-gray-800 dark:border-white";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    src={img}
                                                    alt={name}
                                                    size="sm"
                                                />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal text-gray-800 dark:text-white"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70 text-gray-800 dark:text-white"
                                                    >
                                                        {email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-gray-800 dark:text-white"
                                                >
                                                    {job}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal opacity-70 text-gray-800 dark:text-white"
                                                >
                                                    {org}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={
                                                        online
                                                            ? "online"
                                                            : "offline"
                                                    }
                                                    color={
                                                        online
                                                            ? "green"
                                                            : "blue-gray"
                                                    }
                                                    className="text-gray-800 dark:text-white"
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-gray-800 dark:text-white"
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <FaPencil className="h-4 w-4 fill-gray-800 dark:fill-white" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
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
