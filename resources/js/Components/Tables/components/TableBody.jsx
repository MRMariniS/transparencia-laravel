import { Button, Typography } from "@material-tailwind/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const TableBody = ({ tableData, columns }) => {
    return (
        <>
            <tbody>
                {tableData.map((content, index) => {
                    const isLast = index === tableData.length - 1;
                    const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-gray-800 dark:border-white";
                    const isOdd = index % 2;

                    return (
                        <tr
                            key={index}
                            className={isOdd ? "" : "bg-white dark:bg-blue-900"}
                        >
                            {columns.map(({ label, accessor }, index) => {
                                const getObjectKeyColumn = (
                                    content,
                                    keyColumn
                                ) => {
                                    if (typeof keyColumn == "object") {
                                        const keys = Object.keys(keyColumn);
                                        keys.forEach((key, index) => {
                                            return content[key][
                                                keyColumn[key][index]
                                            ];
                                        });
                                    } else {
                                        return content[keyColumn];
                                    }
                                };

                                return (
                                    <td
                                        key={accessor}
                                        className={classes}
                                        id={`td${index + 1}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {label === "DETALHAR" ? (
                                                <Button className="interaction-color">
                                                    <FaArrowUpRightFromSquare className="w-4 h-4" />
                                                </Button>
                                            ) : (
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-gray-800 dark:text-white text-wrap"
                                                >
                                                    {getObjectKeyColumn(
                                                        content,
                                                        accessor
                                                    )}
                                                </Typography>
                                            )}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
};

export default TableBody;
