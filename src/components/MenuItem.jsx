import React from "react";
import { NavLink } from "react-router-dom";

import "./MenuItem.css"

const MenuItem = (props) => {

    return (
        <NavLink to={props.url}>
            <div className="menu-item">
                <span className="menu-item-icon">
                    {props.icon}
                </span>
                <span className="menu-item-text">
                    {props.name}
                </span>
            </div>
        </NavLink>
    )
}

export default MenuItem