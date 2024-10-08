import { useContext } from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
} from "@material-tailwind/react";
import { PropsContext } from "@/Layouts/RootLayout";
import { FaFileExcel, FaFilePdf, FaPrint } from "react-icons/fa6";

const PopoverPrint = () => {
    const { darkMode } = useContext(PropsContext);

    return (
        <Popover placement="bottom">
            <PopoverHandler>
                <Button
                    className="interaction flex items-center gap-3"
                    size="sm"
                >
                    <FaPrint className="h-5 w-5 cursor-pointer" />
                </Button>
            </PopoverHandler>
            <PopoverContent
                className={
                    (darkMode ? "dark " : "") +
                    "bg-gray-50 dark:bg-blue-800 border border-gray-500"
                }
            >
                <div className="flex gap-2">
                    <Button
                        className="bg-red-500 dark:bg-red-300 !text-white dark:!text-gray-800 py-2 px-4 rounded-lg flex justify-center items-center gap-3"
                        size="sm"
                    >
                        <Typography>PDF</Typography>
                        <FaFilePdf className="h-5 w-5 cursor-pointer" />
                    </Button>
                    <Button
                        className="bg-green-500 dark:bg-green-200 !text-white dark:!text-gray-800 py-2 px-4 rounded-lg flex justify-center items-center gap-3"
                        size="sm"
                    >
                        <Typography>Excel</Typography>
                        <FaFileExcel className="h-5 w-5 cursor-pointer" />
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default PopoverPrint;
