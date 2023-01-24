import React, { useState } from 'react'
import axios from 'axios';
import bcrypt from "bcryptjs-react";


export function Login({ setLoginUser }) {
    // const loginCheck = () => {
    //     e.preventDefault();
    //     console.log(this.refs.email.value)
    //     console.log(this.refs.password.value)
    //     console.log(formObject)
    //     axios.post("http://localhost:3000/login", user)
    //         .then(res => {
    //             alert(res.data.message)
    //             setLoginUser(res.data.user)
    //             navigate.push("/")
    //         })
    // }

    const [status, setStatus] = useState("")

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
                // setLoginUser(res.data.user)
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
                <label>{status}</label>
            </div>
        </>
    )
}