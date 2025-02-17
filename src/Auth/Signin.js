import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signin = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitForm = (e) => {
        // submit login details to backend
        toast.success(`you're signed in successful!`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeButton: false,
            progress: undefined,
            theme: "light",
            className: "custom-toast-success",
        });
        setTimeout(() => {
            navigate("/login")
        }, 1500)

    }
    return (
        <div className="divContainer">
            <form className="formContainer" action={submitForm} name="login">
                <header><h1>SignUp</h1></header>
                <h3>Welcome, please sign Up to continue</h3>
                <input name="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Input FirstName" required ></input>
                <input name="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Input LastName" required ></input>
                <input name="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Input E-mail" required ></input>
                <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Input Password" required></input>
                <input name="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required></input>
                <button type="submit" >Register</button>
            </form>
            <ToastContainer />
        </div>);
}
export default Signin;
