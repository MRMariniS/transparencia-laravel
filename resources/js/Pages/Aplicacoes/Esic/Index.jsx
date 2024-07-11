import React from "react";
import BaseLayout from "../../../Layouts/BaseLayout";
import { Head, usePage } from "@inertiajs/react";

function EsicIndex() {
    const props = usePage();

    return (
        <>
            <Head title={props.url.split("/").pop().toUpperCase()} />
            <div className="w-full h-full flex flex-row justify-between items-start">
                <BaseLayout>
                    <div className="w-full h-full flex flex-col gap-4">
                        <p>EsicIndex</p>
                    </div>
                </BaseLayout>
            </div>
        </>
    );
}

export default EsicIndex;
