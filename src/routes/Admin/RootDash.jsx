import { Outlet, Link } from "react-router-dom"

export function Dashroot() {
    var user = localStorage.getItem("username");
    return (
        <>
            <div id="sidebar">
                <h1>Hello, {user} </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/dashboard`}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to={`/dashboard/profile`}>Profile</Link>
                        </li>
                        <li>
                            <Link to={`/`}>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}