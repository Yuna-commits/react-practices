import ReactDom from "react-dom/client";
import { App } from "./app.js";

// <div id="root">의 자식으로 App() 반환 요소 추가
// document.getElementById("root").appendChild(App());

const root = ReactDom.createRoot(document.getElementById("root"));
// React Dom에 있는 App를 Real Dom에 마운트(최초 커밋)
root.render(App());
