import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa6";
import { PropsContext } from "@/Layouts/RootLayout";
import RedeSocial from "./RedeSocial";

function RedesSociais() {
    
    const { props } = React.useContext(PropsContext);
    const redesSociais = props.menus.menuSocial;
    var icone = (<FaGlobe className="defaultIcon" />);
    return (
        <div className="w-full flex flex-row justify-center lg:justify-start items-center gap-4">
            {redesSociais.map((rede) => {

                if(rede.APRESENTACAO == 'Facebook')
                    icone = (<FaFacebook className="defaultIcon" />)
                else if(rede.APRESENTACAO == 'Instagram')
                    icone = (<FaInstagram className="defaultIcon" />)
                else if(rede.APRESENTACAO =='Youtube')
                    icone =  (<FaYoutube className="defaultIcon" />)

                return (
                    <RedeSocial
                        key={rede.CODIGO}
                        nome={rede.APRESENTACAO}
                        icone={icone}
                        url={rede.URL}
                        target="_blank"
                    />
                )
            })}
        </div>
    );
}

export default RedesSociais;
