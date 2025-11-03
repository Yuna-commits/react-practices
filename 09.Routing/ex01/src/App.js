import React, { useState, useEffect } from "react";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState("");

    useEffect(() => {
        window.addEventListener("hashchange", () => {
            /* substring(1) : # 제거 */
            setRoute(window.location.hash.substring(1));
        });
    }, []);

    return (
        <>
            <div>Hash Route 직접 만들어 보기</div>
            <ul>
                <li>
                    <a href="/#/">main</a>
                </li>
                <li>
                    <a href="/#/guestbook">guestbook</a>{" "}
                </li>
                <li>
                    <a href="/#/gallery">gallery</a>{" "}
                </li>
            </ul>

            {/* 즉시실행함수 IIFE */}
            {(() => {
                switch (route) {
                    case "":
                    case "/":
                        return <Main />;
                    case "/guestbook":
                        <Guestbook />;
                    case "/gallery":
                        <Gallery />;
                    default:
                        return <Error404 />;
                }
            })()}
        </>
    );
}
