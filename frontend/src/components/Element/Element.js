import React from "react";

function Element ({title, description, params}) {

    return (
        <li className="element">
            <h2 className="element__title">{title}</h2>
            <p className="element__description">{description}</p>
            <ul className="element__params">
                {Object.keys(params).slice(0,-1).map((element, index)=>(
                    <li className="element__setting" key={index}>{element}: {params[element]}</li>
                ))}
            </ul>
        </li>
    )
}

export default Element