import { Link } from "@inertiajs/react";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { FaHouse } from "react-icons/fa6";

export function BreadcrumbsWithIcon() {
    return (
        <Breadcrumbs className="mb-4 bg-gray-50 dark:bg-blue-800 ">
            <Link href={route("/")}>
                <FaHouse className="h-6 w-6 fill-gray-800 dark:fill-white hover:opacity-60" />
            </Link>
            <Link href="#">
                <Typography className="text-gray-800 dark:text-white hover:opacity-60">
                    Components
                </Typography>
            </Link>
            <Link href="#">
                <Typography className="text-gray-800 dark:text-white hover:opacity-60">
                    Breadcrumbs
                </Typography>
            </Link>
        </Breadcrumbs>
    );
}
