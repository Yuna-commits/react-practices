import React from "react";

function App() {
    const h1Styles = {
        color: "#111",
        width: 220,
        height: "50px",
        padding: 20,
        backgroundColor: "#eeff99",
    };

    return (
        <div id={"App"}>
            <h1 style={h1Styles}>{"Inline Styling"}</h1>
        </div>
    );
}

export default App;
