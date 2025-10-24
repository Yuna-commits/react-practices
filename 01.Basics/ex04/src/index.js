// "app.js의 App를 import"
import { App } from "./app.js";

// <div id="root">의 자식으로 App() 반환 요소 추가
document.getElementById("root").appendChild(App());
