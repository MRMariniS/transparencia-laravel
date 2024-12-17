import { useContext, useEffect, useMemo, useState } from "react";
import {
    Input,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { format, set } from "date-fns";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import { PropsContext } from "../Layouts/RootLayout";
import "react-day-picker/style.css";
import { FaCalendarDays, FaX } from "react-icons/fa6";

export default function DatePicker({
    classeHerdada,
    label,
    value,
    setValue,
    exercicio,
}) {
    const { darkMode } = useContext(PropsContext);
    const defaultClassNames = getDefaultClassNames();
    const [monthStart, setMonthStart] = useState(0);

    useEffect(() => {
        const data = new Date();
        if (data.getFullYear() == exercicio) {
            setMonthStart(data.getMonth());
        } else {
            setMonthStart(0);
        }
    }, [exercicio]);

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
                            className: "!text-gray-400 ",
                        }}
                        icon={
                            value !== "" ? (
                                <button
                                    type="button"
                                    onClick={() => setValue(null)}
                                >
                                    <FaX className="fill-gray-800 dark:fill-white" />
                                </button>
                            ) : (
                                <FaCalendarDays />
                            )
                        }
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
                        defaultMonth={new Date(exercicio, monthStart)}
                        startMonth={new Date(exercicio, 0)}
                        endMonth={new Date(exercicio, 11)}
                        classNames={{
                            today: "bg-amber-500 rounded-lg text-white",

                            root: `${defaultClassNames.root} bg-white dark:bg-blue-900 text-gray-800 dark:text-white`,
                            chevron: "fill-gray-900 dark:fill-white",
                            dropdown: `${defaultClassNames.dropdown} bg-white dark:bg-blue-900 text-gray-800 dark:text-white p-1`,
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
