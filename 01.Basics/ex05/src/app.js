// DOM API -> React API

import React from "react";

function App() {
    // const App = document.createElement("div");
    // App.textContent = "hello, world!!!!";

    // createElement(태그, 부모, 속성)
    const App = React.createElement("div", null, "hello, world");

    return App;
}

export { App };
