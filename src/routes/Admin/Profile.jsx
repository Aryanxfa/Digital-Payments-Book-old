import React from "react";

export function Profile() {
    var user = localStorage.getItem("username");
    return (
        <>
            <h1>This is the profile page</h1>
            <br></br>
            <h2>you are logged in as {user}</h2>
        </>
    );
}