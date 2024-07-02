import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

function SelectDefault({ darkMode }) {
    const [value, setValue] = useState("pm");

    return (
        <div className="w-full lg:w-fit">
            <Select
                label="Poder"
                className="text-gray-800 dark:text-white"
                labelProps={{
                    className: "text-gray-800 dark:text-white",
                }}
                containerProps={{
                    className: "bg-white dark:bg-blue-900 rounded-lg",
                }}
                menuProps={{
                    className:
                        "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                }}
                value={value}
                onChange={(val) => setValue(val)}
            >
                <Option value="pm">Executivo</Option>
                <Option value="cm">Legislativo</Option>
                <Option value="rpps">Previdência</Option>
            </Select>
        </div>
    );
}

export default SelectDefault;
