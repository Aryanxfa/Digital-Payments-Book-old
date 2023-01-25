import React, { useState } from 'react'
import axios from 'axios';
import bcrypt from "bcryptjs-react";


export function Login({ setLoginUser }) {


    const [status, setStatus] = useState("");
    const [isVisible, setVisible] = useState(false);

    function handleSubmit(e) {
        //get form data
        e.preventDefault();
        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());
        const pass = formJson.password;

        //hash password
        var salt = bcrypt.genSaltSync();
        var hash = bcrypt.hashSync(pass, salt);

        //connect with server
        axios.post("http://localhost:3000/login", {
            username: formJson.userid,
            password: hash
        })
            .then(res => {
                console.log(res.data);
                setStatus(res.data);
                setVisible(true);
                // setLoginUser(res.data.user);
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
                    <button type="submit">Submit</button>
                </form>
                {(isVisible) ? <><i className="material-icons" style={{ color: "red" }} >info</i><label style={{ color: "red" }} >{status}</label></> : ""}
            </div>
        </>
    )
}