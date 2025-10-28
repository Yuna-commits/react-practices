import React from "react";
import { Tab_Item } from "./assets/scss/TabItem.scss";

function TabItem({ name }) {
    return <li className={Tab_Item}>{name}</li>;
}

export default TabItem;
