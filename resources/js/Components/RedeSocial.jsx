import React from "react";

function RedeSocial({ icone, url, target }) {
    return (
        <a className="interaction" href={url} target={target}>
            {icone}
        </a>
    );
}

export default RedeSocial;
