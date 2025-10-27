import React from "react";
import { _GroceryList } from "./assets/scss/GroceryList.scss";
import GroceryItem from "./GroceryItem";

function GroceryList({ groceries }) {
    return (
        <ol className={_GroceryList}>
            {groceries.map((grocery, index) => (
                <GroceryItem
                    key={index}
                    name={grocery.name}
                    count={grocery.count}
                />
            ))}
        </ol>
    );
}

export default GroceryList;
