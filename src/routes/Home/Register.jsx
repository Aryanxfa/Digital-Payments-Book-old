import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export function Register({ setLoginUser }) {

    const [status, setStatus] = useState("");
    const [isVisible, setVisible] = useState(false);
    let navigate = useNavigate();

    function handleSubmit(e) {
        //get form data
        e.preventDefault();
        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());

        //connect with server
        axios.post("http://localhost:3000/register", {
            username: formJson.userid,
            email: formJson.email,
            password: formJson.password
        })
            .then(res => {
                console.log(res.data);
                setStatus(res.data.message);
                setVisible(true);
                navigate('/login')
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="login">
                <h1>Register</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <input type="text" name="userid" placeholder="UserID"></input>
                    <input type="email" name="email" placeholder="E-mail"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    <label style={{ fontFamily: "monospace" }}>Your passwords are hashed with BCrypt</label>
                    <button type="submit">Submit</button>
                </form>
                {(isVisible) ? <><i className="material-icons" style={{ color: "red" }} >info</i><label style={{ color: "red" }} >{status}</label></> : ""}
            </div>
        </>
    )
}