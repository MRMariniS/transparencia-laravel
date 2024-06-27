import { menu } from "@material-tailwind/react";
import initialPage from "../../data/InitialPage";
import Banner from "./Banner";
import {
    FaComment,
    FaEnvelope,
    FaHeadset,
    FaMagnifyingGlassChart,
    FaVirus,
} from "react-icons/fa6";

function Banners({ orientation }) {
    const menu = initialPage.menus.menuLateral.find(
        (menu) => menu.CODIGO === 1
    );
    const submenu = menu.submenu;

    const banners = [
        {
            icone: <FaHeadset className="defaultIcon" />,
            titulo: "e-OUV",
            url: `/${submenu.find((sub) => sub.CODIGO === 44).ENTIDADEROTA}/${
                submenu.find((sub) => sub.CODIGO === 44).URL
            }`,
        },
        {
            icone: <FaComment className="defaultIcon" />,
            titulo: "e-SIC",
            url: `/${submenu.find((sub) => sub.CODIGO === 27).ENTIDADEROTA}/${
                submenu.find((sub) => sub.CODIGO === 27).URL
            }`,
        },
        {
            icone: <FaVirus className="defaultIcon" />,
            titulo: "Covid",
            url: "#",
        },
        {
            icone: <FaEnvelope className="defaultIcon" />,
            titulo: "Carta de Serviços",
            url: `/${submenu.find((sub) => sub.CODIGO === 65).ENTIDADEROTA}/${
                submenu.find((sub) => sub.CODIGO === 65).URL
            }`,
        },
        {
            icone: <FaMagnifyingGlassChart className="defaultIcon" />,
            titulo: "Radar da Transparência",
            url: "#",
        },
    ];

    return (
        <div className={"flex " + orientation + " gap-4"}>
            {banners.map((banner) => (
                <Banner
                    key={banner.titulo}
                    icone={banner.icone}
                    titulo={banner.titulo}
                    url={banner.url}
                />
            ))}
        </div>
    );
}

export default Banners;
