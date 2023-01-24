import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Root } from "./routes/Root";
import { Login } from "./routes/Home/Login";
import { About } from "./routes/Home/About";
import { AdminPanel } from "./routes/AdminPanel";
import { Homepage } from "./routes/Home/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminPanel />,
        children: [
            {
                path: "logout",
                element: <Root />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);

export function App() {
    return (
        <RouterProvider router={router} />
    );
}




