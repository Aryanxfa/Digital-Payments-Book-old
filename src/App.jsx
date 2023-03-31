import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Home/Root";
import { Login } from "./routes/Home/Login";
import { Register } from "./routes/Home/Register";
import { About } from "./routes/Home/About";
import { Homepage } from "./routes/Home/Homepage";
import { Dashboard } from "./routes/Admin/Dashboard";
import { Dashroot } from "./routes/Admin/RootDash";
import { Profile } from "./routes/Admin/Profile";

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
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashroot />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/logout",
        element: <Root />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
