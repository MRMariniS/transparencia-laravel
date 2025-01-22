import { Link } from "@inertiajs/react";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { FaHouse } from "react-icons/fa6";

export function BreadcrumbsWithIcon() {
    return (
        <Breadcrumbs className="mb-4 bg-gray-50 dark:bg-blue-800 ">
            <Link href={route("home")}>
                <FaHouse className="h-6 w-6 fill-gray-800 dark:fill-white hover:opacity-60" />
            </Link>
            <Link
                href="#"
                className="p-1 rounded-md text-gray-800 dark:text-white hover:interaction-color-hover"
            >
                <Typography className="text-inherit">Components</Typography>
            </Link>
            <Link
                href="#"
                className="p-1 rounded-md text-gray-800 dark:text-white hover:interaction-color-hover"
            >
                <Typography className="text-inherit">Breadcrumbs</Typography>
            </Link>
        </Breadcrumbs>
    );
}
