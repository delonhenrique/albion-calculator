import React from "react";
import { Routes, Route } from "react-router-dom"
import Craft from "./Craft";
import Home from "./Home";
import "./Content.css"

const Content = (props) => {

    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/craft" element={<Craft />} />
            </Routes>
        </div>
    )
}

export default Content