import React from "react";
import Header from "./Header";
import Contents from "./Contents";

function App() {
    const text = "함수 컴포넌트 작성하기";

    return (
        <div>
            <Header />
            <Contents text={text} />
        </div>
    );
}

export default App;
