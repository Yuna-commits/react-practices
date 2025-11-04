import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            <ul>
                <li>
                    <Link to={"/"}>[Main]</Link>
                </li>
                <li>
                    <NavLink className="menu" to={"/guestbook"}>
                        [Guestbook]
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/gallery"}>[Gallery]</NavLink>
                </li>
            </ul>
        </div>
    );
}
