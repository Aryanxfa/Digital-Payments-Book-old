import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom"
import { Footer } from "../components/Footer";


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