import React from "react";
import { _GroceryItem } from "./assets/scss/GroceryItem.scss";

function GroceryItem({ name, count }) {
    return (
        <li className={_GroceryItem}>
            <strong>{name}</strong>
            <span>{count}</span>
        </li>
    );
}

export default GroceryItem;
