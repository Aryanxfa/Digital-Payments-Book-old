import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from "./routes/Root";
import { Login } from "./routes/Login";
import { About } from "./routes/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
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

]);

export function App() {
    return (
        <RouterProvider router={router} />
    );
}




