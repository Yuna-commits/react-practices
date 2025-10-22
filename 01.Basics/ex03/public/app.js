// <div> element 생성, 반환
function App() {
    const App = document.createElement("div");
    App.textContent = "hello, world";

    return App;
}

export { App };
