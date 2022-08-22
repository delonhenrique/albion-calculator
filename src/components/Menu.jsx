import React from "react";

import "./Menu.css"
import MenuItem from "./MenuItem";

const Menu = (props) => {

    return (
        <header className="header">
            <div className="menu">
                <ul>
                    <li>
                        <MenuItem name="Home" url="/"/>
                        <MenuItem name="Craft" url="/craft"/>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Menu