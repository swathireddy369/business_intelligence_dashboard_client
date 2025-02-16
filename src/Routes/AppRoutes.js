import React from "react";
import { Route, Routes } from "react-router-dom"
import Login from "../Auth/Login";
import Home from "../Home/Home";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="/Signup" element={<Login />} />
                <Route path="/Home" element={<Home />} />
            </Routes>


        </>

    )
}
export default AppRoutes;