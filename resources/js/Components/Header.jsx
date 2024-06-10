import React from "react";

import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";

function Header() {
    return (
        <header>
            <nav>
                <img src={logo} />
            </nav>
        </header>
    );
}

export default Header;
