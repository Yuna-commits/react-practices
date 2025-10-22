// <div> element 생성, 반환
function App() {
    const App = document.createElement("div");
    App.textContent = "hello, world";

    return App;
}

// <div id="root">의 자식으로 App() 반환 요소 추가
document.getElementById("root").appendChild(App());
