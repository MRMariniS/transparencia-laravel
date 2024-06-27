import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input,
} from "@material-tailwind/react";
import { FaKey, FaUser } from "react-icons/fa6";

export default function LoginPopover({ darkMode }) {
    return (
        <Popover placement="bottom-end">
            <PopoverHandler>
                <Button className="interaction rounded-full">Login</Button>
            </PopoverHandler>
            <PopoverContent
                className={
                    (darkMode ? "dark " : "") +
                    "w-72 h-48 bg-gray-50 dark:bg-blue-800 border border-gray-500"
                }
            >
                <div className="w-full h-full flex flex-col justify-between items-center">
                    <Input
                        type="text"
                        size="lg"
                        className="bg-white dark:bg-blue-900 focus:outline-none"
                        label="Usuário"
                        color={darkMode ? "white" : "gray"}
                        icon={
                            <FaUser className="h-6 w-6 dark:fill-white fill-gray-800" />
                        }
                    />
                    <Input
                        type="password"
                        size="lg"
                        className="bg-white dark:bg-blue-900 focus:outline-none"
                        label="Senha"
                        color={darkMode ? "white" : "gray"}
                        icon={
                            <FaKey className="h-6 w-6 dark:fill-white fill-gray-800" />
                        }
                    />
                    <Button className="interaction rounded-full">
                        Acessar
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
