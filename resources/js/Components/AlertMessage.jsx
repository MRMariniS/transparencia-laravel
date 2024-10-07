import React, { useState } from "react";
import { Alert, Typography } from "@material-tailwind/react";

const AlertMessage = ({ title, message, icon = <></> }) => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Alert
                open={open}
                onClose={() => setOpen(false)}
                icon={icon}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
            >
                <Typography variant="h5" color="white">
                    {title}
                </Typography>
                <Typography color="white" className="mt-2 font-normal">
                    {message}
                </Typography>
            </Alert>
        </>
    );
}

export default AlertMessage;