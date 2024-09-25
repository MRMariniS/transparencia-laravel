import { PropsContext } from "@/Layouts/RootLayout";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input
} from "@material-tailwind/react";
import { useContext } from "react";

export default function PopoverForm() {
    const { darkMode } = useContext(PropsContext);

    return (
        <Popover placement="bottom-end">
            <PopoverHandler>
                <Button
                    variant="outlined"
                    size="sm"
                    className="interaction"
                >
                    Meus pedidos
                </Button>
            </PopoverHandler>
            <PopoverContent className={
                (darkMode ? "dark " : "") +
                "w-72 h-48 bg-gray-50 dark:bg-blue-800 border border-gray-500"
            }>
                <div className="w-full h-full flex flex-col justify-between items-center">
                    <Input
                        type="text"
                        size="lg"
                        className="bg-white dark:bg-blue-900 focus:outline-none"
                        label="Protocolo"
                        color={darkMode ? "white" : "gray"}
                    />
                    <Input
                        type="password"
                        size="lg"
                        className="bg-white dark:bg-blue-900 focus:outline-none"
                        label="CPF"
                        color={darkMode ? "white" : "gray"}
                    />
                    <Button variant="outlined"
                        size="sm"
                        className="interaction">
                        Consultar
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
