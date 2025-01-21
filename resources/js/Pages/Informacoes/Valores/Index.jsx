import BaseLayout from "@/Layouts/BaseLayout";
import { Head } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";
import React from "react";

const Valores = ({ valores }) => {

    return (
        <>
            <Head title="Missão, Visão e Valores" />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="flex flex-col w-full h-fit items-center justify-between gap-4">
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <div className="flex flex-col gap-2 text-justify indent-10">
                                <Typography
                                    variant="h4"
                                    className="text-xl indent-0 text-left"
                                >
                                    MISSÃO
                                </Typography>
                                <Typography>
                                    {valores[0].GESMISSAO}
                                </Typography>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <div className="flex flex-col gap-2 text-justify indent-10">
                                <Typography
                                    variant="h4"
                                    className="text-xl indent-0 text-left"
                                >
                                    VISÃO
                                </Typography>
                                <Typography>
                                    {valores[0].GESVISAO}
                                </Typography>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center gap-4 bg-gray-50 dark:bg-blue-800 rounded-md p-4">
                            <div className="flex flex-col gap-2 text-justify indent-10">
                                <Typography
                                    variant="h4"
                                    className="text-xl indent-0 text-left"
                                >
                                    VALORES
                                </Typography>
                                <Typography>
                                    {valores[0].GESVALORES}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </BaseLayout >
            </div >
        </>
    )
}

export default Valores