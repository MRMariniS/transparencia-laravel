import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const EnunciadoPedidos = ({ title, resumo, icon = null, tableData }) => {
    console.log(tableData);
    return (
        <div>
            {icon ? icon : <></>}
            <Typography
                className="text-gray-800 dark:text-white mb-2"
                variant="h5"
                color="blue-gray"
            >
                {title}
            </Typography>
            <Typography className="text-gray-800 dark:text-white">
                {resumo}
            </Typography>
        </div>
    );
};

export default EnunciadoPedidos;
