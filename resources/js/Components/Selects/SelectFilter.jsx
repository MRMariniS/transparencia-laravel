import { Option, Select } from "@material-tailwind/react";

const SelectFilter = ({
    selectName,
    selectLabel,
    selectData,
    selected,
    setData,
    errorsData,
    subgrupos,
    setSubgrupos,
}) => {
    return (
        <div className="w-full sm:w-auto">
            <Select
                name={selectName}
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
                value={`${selected}`}
                label={selectLabel}
                onChange={(value) => console.log(value)}
            >
                {selectData.map(({ value, label }) => (
                    <Option value={value} key={value}>
                        {label}
                    </Option>
                ))}
            </Select>
            {errorsData && <div>{errorsData}</div>}
        </div>
    );
};

export default SelectFilter;
