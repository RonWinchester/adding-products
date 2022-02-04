import React from "react";

function Element ({title, description}) {
    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}

export default Element