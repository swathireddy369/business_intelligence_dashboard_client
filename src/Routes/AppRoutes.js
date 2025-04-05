import React from "react";
import { Route, Routes } from "react-router-dom";

import SignIn from "../Auth/SignIn";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import SignUp from "../Auth/SignUp";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Hero />} />
                <Route path="/Sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/Home" element={<Home />} />
            </Routes>


        </>

    )
}
export default AppRoutes;