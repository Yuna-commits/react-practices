import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/layout/Header.scss";

export default function Header() {
    console.log("render Header...");

    return (
        <header>
            <h1>Header</h1>
            <ul>
                <li>
                    <NavLink to={"/user/login"}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={"/user/join"}>Join</NavLink>
                </li>
                <li>
                    <NavLink to={"/user/settings"}>Settings</NavLink>
                </li>
            </ul>
        </header>
    );
}
