import React from "react";
import { Routes, Route} from "react-router-dom"
import Craft from "./Craft";
import Home from "./Home";

const Content = (props) => {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/craft" element={<Craft />} />
        </Routes>
    )
}

export default Content