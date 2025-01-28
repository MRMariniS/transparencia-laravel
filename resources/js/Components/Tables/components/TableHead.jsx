import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";

const TableHead = ({ columns, handleSorting }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor) => {
        const sortOrder =
            accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };

    return (
        <thead>
            <tr>
                {columns.map(({ label, accessor, sortable }) => {
                    return (
                        <th
                            key={accessor}
                            onClick={
                                sortable
                                    ? () => handleSortingChange(accessor)
                                    : null
                            }
                            className={`cursor-pointer border-y border-blue-gray-100 p-4 transition-colors ${
                                sortable
                                    ? "interaction-color"
                                    : "interaction-color-hover"
                            }`}
                        >
                            <div className="flex flex-row gap-2 items-center">
                                <Typography
                                    variant="small"
                                    className="font-normal leading-none text-inherit"
                                >
                                    {label}
                                </Typography>
                                {sortable ? (
                                    sortField === accessor &&
                                    order === "asc" ? (
                                        <FaSortUp
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        />
                                    ) : sortField === accessor &&
                                      order === "desc" ? (
                                        <FaSortDown
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        />
                                    ) : (
                                        <FaSort
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        />
                                    )
                                ) : (
                                    <></>
                                )}
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHead;
