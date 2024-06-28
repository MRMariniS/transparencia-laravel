import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchBar() {
    const [searchText, setSearchText] = React.useState("");
    const onChange = ({ target }) => setSearchText(target.value);

    return (
        <div className="relative flex w-full max-w-[24rem]">
            <Input
                type="search"
                label="O que você procura?"
                value={searchText}
                onChange={onChange}
                className="pr-20"
                containerProps={{
                    className: "min-w-0 bg-gray-50 dark:bg-blue-800",
                }}
                labelProps={{
                    className: "!text-gray-500",
                }}
            />
            <Button
                size="sm"
                disabled={!searchText}
                className="!absolute right-1 top-1 interaction"
            >
                <FaMagnifyingGlass className="w-full h-auto" />
            </Button>
        </div>
    );
}
