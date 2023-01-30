import React from "react";
import { createRoot } from "react-dom/client";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { App } from "./App";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <ProSidebarProvider>
            <App />
        </ProSidebarProvider>;
    </React.StrictMode>,
);