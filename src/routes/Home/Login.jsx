import React from "react";

function loginCheck() {

}

export function Login() {

    return (
        <div className="login">
            <h1>Login</h1>
            <form action="/login">
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
            </form>
            <button onClick={() => loginCheck()}>Submit</button>
        </div>
    );
}