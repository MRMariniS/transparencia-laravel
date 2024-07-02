import { Typography } from "@material-tailwind/react";

function LogoTitle({ logo }) {
    return (
        <div className="w-2/5 flex flex-row items-center gap-2">
            <img
                src={logo}
                alt="Brasão do Município"
                className="hidden lg:inline-block h-12 w-auto"
            />
            <Typography className="mr-4 uppercase text-3xl">
                Portal da Transparência
            </Typography>
        </div>
    );
}

export default LogoTitle;
