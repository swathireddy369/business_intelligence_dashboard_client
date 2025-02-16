import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../Auth/Login";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import Signin from "../Auth/Signin";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Hero />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signin/>} />
                <Route path="/Home" element={<Home />} />
            </Routes>


        </>

    )
}
export default AppRoutes;