import { Select } from "@material-tailwind/react";

const SelectFilter = ({
    selectName,
    selectLabel,
    selectData,
    setData,
    errorsData,
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
                value={`${selectData}`}
                label={selectLabel}
                onChange={(value) => setData(selectName, value)}
            >
                {selectData.map(({ key, value }) => (
                    <Option value={`${value}`} key={key}>{`${value}`}</Option>
                ))}
            </Select>
            {errorsData && <div>{errorsData}</div>}
        </div>
    );
};

export default SelectFilter;
