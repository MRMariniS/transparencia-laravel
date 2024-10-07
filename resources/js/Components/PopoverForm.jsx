import { PropsContext } from "@/Layouts/RootLayout";
import { router } from "@inertiajs/react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input
} from "@material-tailwind/react";
import { useContext, useState } from "react";

export default function PopoverForm({ label, routerForm, labelInputFieldOne, labelInputFieldTwo, nameInputFieldOne, nameInputFieldTwo, method }) {
    const { darkMode } = useContext(PropsContext);

    const [values, setValues] = useState({
        [nameInputFieldOne]: "",
        [nameInputFieldTwo]: ""
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post(routerForm, values)
    }
    return (
        <Popover placement="bottom-end">
            <PopoverHandler>
                <Button
                    variant="outlined"
                    size="sm"
                    className="interaction"
                >
                    {label}
                </Button>
            </PopoverHandler>
            <PopoverContent className={
                (darkMode ? "dark " : "") +
                "w-72 h-48 bg-gray-50 dark:bg-blue-800 border border-gray-500"
            }>
                <form className="w-full h-full flex flex-col" onSubmit={handleSubmit}>
                    <div className="w-full h-full flex flex-col justify-between items-center">
                        <Input
                            id={nameInputFieldOne}
                            type="number"
                            name={nameInputFieldOne}
                            size="lg"
                            className="bg-white dark:bg-blue-900 focus:outline-none"
                            label={labelInputFieldOne}
                            color={darkMode ? "white" : "gray"}
                            onChange={handleChange}
                        />
                        <Input
                            id={nameInputFieldTwo}
                            type="number"
                            name={nameInputFieldTwo}
                            size="lg"
                            className="bg-white dark:bg-blue-900 focus:outline-none "
                            label={labelInputFieldTwo}
                            color={darkMode ? "white" : "gray"}
                            onChange={handleChange}
                        />
                        <Button variant="outlined"
                            size="sm"
                            type="submit"
                            className="interaction">
                            Consultar
                        </Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}
