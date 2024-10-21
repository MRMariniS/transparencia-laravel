import { useContext } from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
} from "@material-tailwind/react";
import { PropsContext } from "@/Layouts/RootLayout";
import {
    FaComment,
    FaHeadset,
    FaCircleInfo
} from "react-icons/fa6";

const PopoverNovoPedido = () => {
    const { darkMode } = useContext(PropsContext);

    return (
        <Popover placement="bottom">
            <PopoverHandler>
                <Button
                    className="interaction flex items-center gap-3"
                    size="sm"
                >
                    Novo Pedido
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
                        className="py-2 px-4 rounded-lg flex justify-center items-center gap-3"
                        size="sm"
                    >
                        <Typography>E-SIC</Typography>
                        <FaCircleInfo className="h-5 w-5 cursor-pointer" />
                    </Button>
                    <Button
                        className="py-2 px-4 rounded-lg flex justify-center items-center gap-3"
                        size="sm"
                    >
                        <Typography>E-OUV</Typography>
                        <FaHeadset className="h-5 w-5 cursor-pointer" />
                    </Button>
                    <Button
                        className="py-2 px-4 rounded-lg flex justify-center items-center gap-3"
                        size="sm"
                    >
                        <Typography>LGPD</Typography>
                        <FaComment className="h-5 w-5 cursor-pointer" />
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default PopoverNovoPedido;
