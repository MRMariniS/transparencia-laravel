import { Link } from "@inertiajs/react";

function Banner({ icone, titulo, url }) {
    return (
        <Link href={url}>
            <div className="interaction">
                {icone}
                <div className="flex flex-col justify-around items-center">
                    <h6 className="text-lg font-bold text-center text-nowrap">
                        {titulo}
                    </h6>
                </div>
            </div>
        </Link>
    );
}

export default Banner;
