import { useContext, useState } from "react";
import {
    Input,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import { PropsContext } from "../Layouts/RootLayout";
import "react-day-picker/style.css";
import { FaCalendarDays } from "react-icons/fa6";

export default function DatePicker({ classeHerdada, label, value, setValue }) {
    const { darkMode } = useContext(PropsContext);
    const defaultClassNames = getDefaultClassNames();

    return (
        <div className={classeHerdada}>
            <Popover placement="bottom">
                <PopoverHandler>
                    <Input
                        label={label}
                        onChange={(e) => setValue(e.target.value)}
                        value={value ? format(value, "dd/MM/yyyy") : ""}
                        color={darkMode ? "white" : "gray"}
                        containerProps={{
                            className:
                                "min-w-0 bg-white dark:bg-blue-900 rounded-lg",
                        }}
                        labelProps={{
                            className: "!text-gray-400",
                        }}
                        icon={<FaCalendarDays />}
                    />
                </PopoverHandler>
                <PopoverContent
                    className={
                        (darkMode ? "dark " : "") +
                        "bg-white dark:bg-blue-900 border border-gray-500"
                    }
                >
                    <DayPicker
                        mode="single"
                        locale={ptBR}
                        timeZone="America/Porto_Velho"
                        selected={value}
                        onSelect={setValue}
                        captionLayout="dropdown"
                        classNames={{
                            today: "bg-amber-500 rounded-lg text-white",
                            selected:
                                "bg-gray-50 dark:bg-blue-800 border border-black dark:border-white rouded-lg",
                            root: `${defaultClassNames.root} bg-white dark:bg-blue-900 text-gray-800 dark:text-white`,
                            chevron: "fill-gray-800 dark:fill-white",
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
