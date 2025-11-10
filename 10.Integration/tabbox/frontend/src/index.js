import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.warn = () => {};
    console.info = () => {};
    console.error = () => {};
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
