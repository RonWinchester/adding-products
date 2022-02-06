import React from "react";
import Elements from "../Elements/Elements";
import SideBar from "../SideBar/SideBar";

function Content ({handleSubmit}) {
    return (
        <div className="content">
            <Elements/>
            <SideBar handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Content