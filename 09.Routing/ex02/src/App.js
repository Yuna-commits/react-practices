import React, { useState, useEffect } from "react";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from "./component/Error404";

function MyRouter() {
    // 현재 페이지 정보 저장(ex. page: "/guestbook")
    const [route, setRoute] = useState({ page: "" });

    // 새 url 추가
    const pushstateHandler = (e) => {
        setRoute(e.detail);
    };

    // 뒤로가기/앞으로가기 발생 시 호출
    const popstateHandler = (e) => {
        setRoute(e.detail);
    };

    useEffect(() => {
        window.addEventListener("pushstate", pushstateHandler);
        window.addEventListener("popstate", popstateHandler);

        // unmount clean-up
        return () => {
            window.removeEventListener("pushstate", pushstateHandler);
            window.removeEventListener("popstate", popstateHandler);
        };
    }, []);

    // Route Mapping
    let component = null;

    switch (route.page) {
        case "":
        case "/":
            component = <Main />;
            break;
        case "/guestbook":
            component = <Guestbook />;
            break;
        case "/gallery":
            component = <Gallery />;
            break;
        default:
            component = <Error404 />;
    }

    return component;
}

export default function App() {
    const clickHandler = (e) => {
        e.preventDefault();

        const url = e.target.href.substring(e.target.href.lastIndex("/"));
        window.history.pushState({ page: url }, e.target.text, url);

        window.dispatchEvent(
            // CustomEvent : 개발자 정의 이벤트를 수동으로 발생시킬 수 있는 기능
            // 라우팅 상태가 변경됨을 MyRouter에게 알려줌
            new CustomEvent("pushstate", { detail: { page: url } })
        );
    };

    return (
        <>
            <div>Browser Route 직접 만들어 보기</div>
            <ul>
                <li>
                    <a href={"/"} onClick={clickHandler}>
                        main
                    </a>
                </li>
                <li>
                    <a href={"/gallery"} onClick={clickHandler}>
                        gallery
                    </a>
                </li>
                <li>
                    <a href={"/guestbook"} onClick={clickHandler}>
                        guestbook
                    </a>
                </li>
            </ul>
            <MyRouter />
        </>
    );
}
