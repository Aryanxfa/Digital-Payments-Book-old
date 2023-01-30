import { Outlet, Link } from "react-router-dom"
import { Footer } from "../../components/Footer";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";


export function Root() {
    const { collapseSidebar } = useProSidebar();
    return (
        <div style={{ display: 'flex', height: '100%' }} >
            <Sidebar>
                <Menu>
                    <MenuItem
                        icon={<span className="material-icons">menu</span>}
                        onClick={() => { collapseSidebar(); }}
                        style={{ textAlign: "center" }}
                    >   {" "}
                        <h2>Hello</h2>
                    </MenuItem>
                    <MenuItem icon={<span className="material-icons">login</span>} component={<Link to="/login" />}> Login</MenuItem>
                    <MenuItem icon={<span className="material-icons">person_add</span>} component={<Link to="/register" />}> Register</MenuItem>
                    <MenuItem icon={<span className="material-icons">info</span>} component={<Link to="/about" />}> About</MenuItem>
                    <MenuItem icon={<span className="material-icons">support_agent</span>} component={<Link to="/support" />}> Support</MenuItem>
                </Menu>
            </Sidebar>
            <div className="container">
                <Outlet />
                <Footer />
            </div>
        </div >
    );
}