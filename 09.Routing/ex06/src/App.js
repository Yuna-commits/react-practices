import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import "./assets/scss/App.scss";
import Error404 from "./component/Error404";

// 전체 라우팅 구조 정의 : 어떤 경로에 어떤 컴포넌트를 렌더링할지 결정
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/gallery"} element={<Gallery />} />
                <Route path={"/guestbook"} element={<Guestbook />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/*"} element={<Error404 />} />
            </Routes>
        </Router>
    );
}
