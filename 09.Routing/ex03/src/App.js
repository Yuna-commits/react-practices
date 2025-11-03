import React from "react";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from "./component/Error404";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function App() {
    /* 
    <HashRouter> : URL의 #(hash) 뒷 부분을 기준으로 라우팅 관리 
    <Routes> : Route 그룹 컨테이너

    URL : ../#/gallery -> <Gallery> 컴포넌트 렌더링
    */
    return (
        /*
        == HashRouter ==
        <HashRouter>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/gallery"} element={<Gallery />} />
                <Route path={"/guestbook"} element={<Guestbook />} />
                <Route path={"*"} element={<Error404 />} />
            </Routes>
        </HashRouter>
        */

        /* 
        == BrowserRouter ==
        - BrowserRouter 기반 라우팅을 할 때, 서버는 URL 경로를 직접 인식 못함
          서버의 public 폴더에는 index.html만 있고 /gallery와 같은 경로의 리소스는 존재 x

        - devServer.historyApiFallback: true
          요청된 경로가 실제 파일로 존재하지 않으면 index.html로 되돌려주는(fallback) 설정
        */
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/gallery"} element={<Gallery />} />
                <Route path={"/guestbook"} element={<Guestbook />} />
                <Route path={"*"} element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}
