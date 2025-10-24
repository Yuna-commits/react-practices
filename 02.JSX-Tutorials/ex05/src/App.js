import React, { Component } from "react";
import Header from "./Header";
import Contents from "./Contents";

class App extends Compnonet {
    render() {
        return (
            <div id="App">
                <Header />
                <Contents />
            </div>
        );
    }
}

export default App;
