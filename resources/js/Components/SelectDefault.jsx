import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

function SelectDefault({ darkMode }) {
    const [value, setValue] = useState("exec");

    return (
        <div className="w-full lg:w-fit">
            <Select
                label="Poder"
                className="text-gray-800 dark:text-white"
                labelProps={{
                    className: "text-gray-800 dark:text-white",
                }}
                containerProps={{
                    className: "bg-white dark:bg-blue-900",
                }}
                menuProps={{
                    className:
                        "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                }}
                value={value}
                onChange={(val) => setValue(val)}
            >
                <Option value="exec">Executivo</Option>
                <Option value="leg">Legislativo</Option>
                <Option value="previ">Previdência</Option>
            </Select>
        </div>
    );
}

export default SelectDefault;
