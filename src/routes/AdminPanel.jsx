import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom"
import { Footer } from "../components/Footer";

export const [isloggedin, setloggedin] = useState(false);
export const [currusername, setusername] = useState("unknown");

export function AdminPanel() {

    return (
        <>
            <div id="sidebar">
                <h1>Digital Payments</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>Logout</Link>
                        </li>
                        <li>
                            <Link to={`/about`}>About</Link>
                        </li>
                        <li>
                            <Link to={`/profile`}>username</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
                <Footer />
            </div>
        </>
    );
}