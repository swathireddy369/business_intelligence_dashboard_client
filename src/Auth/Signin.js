import { red } from "@mui/material/colors";
import React, { useState } from "react";
import "./Login.css";
const Signin = () => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const submitForm=(e)=>{
    // submit login details to backend
    }
    return (
        <div className="divContainer">
            <form className="formContainer" action={submitForm} name="login">
             <header><h1>SignUp</h1></header>
             <p>Welcome, please sign Up to continue</p>
            <input name="userName"  value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Input username" required ></input>
            <input name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Input password" required></input>
            <button type="submit" >Submit</button>
            </form>
        </div>);
}
export default Signin;
