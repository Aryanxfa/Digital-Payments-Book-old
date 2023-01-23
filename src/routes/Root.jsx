import { Outlet, Link } from "react-router-dom"
import { Footer } from "../components/Footer";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>Digital Payments</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/login`}>Login</Link>
                        </li>
                        <li>
                            <Link to={`/about`}>About</Link>
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