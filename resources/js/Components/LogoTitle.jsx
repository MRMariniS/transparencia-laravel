import { Typography } from "@material-tailwind/react";

function LogoTitle({ logo, empresa }) {
    return (
        <div className="w-full flex flex-row items-center gap-2">
            <img
                src={logo}
                alt="Brasão do Município"
                className="inline-block h-16 lg:h-12 w-auto"
            />
            <div>
                <Typography className="mr-4 uppercase text-3xl text-center lg:text-left">
                    Portal da Transparência
                </Typography>
                <Typography
                    variant="small"
                    className="text-center lg:text-left"
                >
                    {empresa[0].NOME || entidade[0].NOME}
                </Typography>
            </div>
        </div>
    );
}

export default LogoTitle;
