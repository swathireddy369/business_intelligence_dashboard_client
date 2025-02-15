import { red } from "@mui/material/colors";
import React from "react";
import "./Login.css";
const Login = () => {
    return (
        <div className="divContainer">
            <form className="formContainer" name="login">
             <header><h1>Sign in</h1></header>
             <p>Welcome, please sign in to continue</p>
            <input name="userName"  placeholder="Input username" ></input>
            <input name="password" placeholder="Input password"></input>
            <button type="submit"  >Submit</button>
            </form>
        </div>);
}
export default Login;
