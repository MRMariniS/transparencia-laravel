import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

function SelectDefault({ tipoempresa }) {
    var tipo = 'executivo';
    if (tipoempresa == 2) {
        tipo = 'legislativo';
    } else if (tipoempresa == 8) {
        tipo = 'previdencia';
    }

    const [value, setValue] = useState(tipo);

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
                onChange={(val) => {
                    window.location.href = './' + val;
                }}
            >
                <Option value="executivo">Executivo</Option>
                <Option value="legislativo">Legislativo</Option>
                <Option value="previdencia">Previdência</Option>
            </Select>
        </div>
    );
}

export default SelectDefault;
