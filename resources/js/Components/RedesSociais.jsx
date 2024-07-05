import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import initialPage from "../../data/InitialPage";
import RedeSocial from "./RedeSocial";

function RedesSociais() {
    const redesSociais = [
        {
            nome: "Facebook",
            icone: <FaFacebook className="defaultIcon" />,
            url: "https://facebook.com/",
            target: "_blank",
        },
        {
            nome: "Instagram",
            icone: <FaInstagram className="defaultIcon" />,
            url: "https://www.instagram.com/",
            target: "_blank",
        },
        {
            nome: "Youtube",
            icone: <FaYoutube className="defaultIcon" />,
            url: "https://www.youtube.com/",
            target: "_blank",
        },
    ];

    return (
        <div className="w-full flex flex-row justify-center lg:justify-start items-center gap-4">
            {redesSociais.map((rede) => (
                <RedeSocial
                    key={rede.nome}
                    nome={rede.nome}
                    icone={rede.icone}
                    url={rede.url}
                    target={rede.target}
                />
            ))}
        </div>
    );
}

export default RedesSociais;
