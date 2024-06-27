import { Typography } from "@material-tailwind/react";

function LogoTitle({ logo, title }) {
    return (
        <div className="flex flex-row items-center text-gray-800 dark:text-white">
            <img
                src={logo}
                alt="Brasão do Município"
                className="hidden lg:inline-block h-full w-auto"
            />
            <div>
                <Typography className="mr-4 font-bold text-2xl uppercase">
                    {title}
                </Typography>
                <Typography className="mr-4 font-semibold text-2xl">
                    Portal da Transparência
                </Typography>
            </div>
        </div>
    );
}

export default LogoTitle;
