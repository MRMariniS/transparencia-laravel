import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const onChange = ({ target }) => setSearchText(target.value);

    return (
        <div className="relative flex w-full">
            <Input
                type="search"
                label="O que você procura?"
                value={searchText}
                onChange={onChange}
                className="pr-20 text-gray-800 dark:text-white"
                containerProps={{
                    className: "min-w-0 bg-white dark:bg-blue-900 rounded-lg",
                }}
                labelProps={{
                    className: "!text-gray-400",
                }}
                icon={
                    <FaMagnifyingGlass
                        onClick={() => console.log("SearchBar")}
                        className="h-5 w-5 cursor-pointer fill-gray-800 dark:fill-white"
                    />
                }
            />
        </div>
    );
}
