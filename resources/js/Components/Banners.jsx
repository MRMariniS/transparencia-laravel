import Banner from "./Banner";
import {
    FaComment,
    FaEnvelope,
    FaHeadset,
    FaMagnifyingGlassChart,
    FaVirus,
} from "react-icons/fa6";

function Banners() {
    const banners = [
        {
            icone: <FaHeadset className="defaultIcon" />,
            titulo: "e-OUV",
        },
        {
            icone: <FaComment className="defaultIcon" />,
            titulo: "e-SIC",
        },
        {
            icone: <FaVirus className="defaultIcon" />,
            titulo: "Covid",
        },
        {
            icone: <FaEnvelope className="defaultIcon" />,
            titulo: "Carta de Serviços",
        },
        {
            icone: <FaMagnifyingGlassChart className="defaultIcon" />,
            titulo: "Radar da Transparência",
        },
    ];
    return (
        <div className="flex flex-row gap-4">
            {banners.map((banner) => (
                <Banner
                    key={banner.titulo}
                    icone={banner.icone}
                    titulo={banner.titulo}
                />
            ))}
        </div>
    );
}

export default Banners;
