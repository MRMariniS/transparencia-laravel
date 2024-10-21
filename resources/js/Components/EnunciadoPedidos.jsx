import { Typography } from "@material-tailwind/react";
import DadosResponsavel from "./DadosResponsavel";

const EnunciadoPedidos = ({ title, resumo, icon = null, estruturasData }) => {
    return (
        <div className="flex flex-col gap-3">
            {icon ? icon : <></>}
            <Typography
                className="text-gray-800 dark:text-white text-2xl"
                variant="h5"
            >
                {title}
            </Typography>
            <Typography className="text-gray-800 dark:text-white text-xl">
                {resumo}
            </Typography>

            <DadosResponsavel estruturasData={estruturasData} />
        </div>
    );
};

export default EnunciadoPedidos;
