import React from "react";
import { title } from "./assets/scss/App.scss";
import GroceryList from "./GroceryList";

function App() {
    const groceries = [
        { name: "Bread", count: 10 },
        { name: "Milk", count: 20 },
        { name: "Egg", count: 30 },
        { name: "Banana", count: 40 },
    ];

    return (
        <div id={"App"}>
            <h1 className={title}>{"Grocery List"}</h1>
            <GroceryList groceries={groceries} />
        </div>
    );
}

export default App;
