import { Outlet, Link } from "react-router-dom"
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

export function Dashroot() {
    const { collapseSidebar } = useProSidebar();
    var user = localStorage.getItem("username");
    return (
        <div style={{ display: 'flex', height: '100%' }} >
            <Sidebar>
                <Menu>
                    <MenuItem
                        icon={<span className="material-icons">menu</span>}
                        onClick={() => { collapseSidebar() }}
                        style={{ textAlign: "center" }}
                    >   {" "}
                        <h2>Hello, {user}</h2>
                    </MenuItem>
                    <MenuItem icon={<span className="material-icons">login</span>} component={<Link to="/dashboard" />}> Dashboard</MenuItem>
                    <MenuItem icon={<span className="material-icons">person</span>} component={<Link to="/dashboard/profile" />}> Profile</MenuItem>
                    <MenuItem icon={<span className="material-icons">logout</span>} component={<Link to="/" onClick={() => localStorage.clear()} />}> Logout</MenuItem>
                </Menu>
            </Sidebar>
            <div className="basecontainer">
                <Outlet />
            </div>
        </div>
    );
}