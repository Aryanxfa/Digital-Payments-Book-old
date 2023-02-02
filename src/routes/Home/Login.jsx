import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export function Login({ setLoginUser }) {

    const [status, setStatus] = useState("");
    const [isVisible, setVisible] = useState(false);
    let navigate = useNavigate();

    function handleSubmit(e) {
        //get form data
        e.preventDefault();
        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());

        //connect with server
        axios.post("http://localhost:3000/login", {
            username: formJson.userid,
            password: formJson.password
        })
            .then(res => {
                console.log(res.data.message);
                setStatus(res.data.message);
                setVisible(true);
                if (res.data.message == "Login Success") {
                    localStorage.setItem("username", formJson.userid);
                    console.log("Signed in as : ", localStorage.getItem("username"));
                    navigate("/dashboard");
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <input type="text" name="userid" placeholder="UserID"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    <label style={{fontFamily: "monospace"}}>Your passwords are hashed with BCrypt</label>
                    <button type="submit">Submit</button>
                </form>
                {(isVisible) ? <><i className="material-icons" style={{ color: "red" }} >info</i><label style={{ color: "red" }} >{status}</label></> : ""}
            </div>
        </>
    )
}