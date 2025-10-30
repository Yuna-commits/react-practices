import React from "react";
import { Tab_Item } from "./assets/scss/TabItem.scss";

/* Props Drilling */
function TabItem({ no, name, active, selectTab }) {
    return (
        /*
        클릭 이벤트가 발생한 탭 하나만 active(true)가 되도록
        나머지는 active(false)
        */
        <li
            className={`${Tab_Item} ${active ? "active" : ""}`}
            onClick={() => {
                console.log(no, name, active);
                /* active 시킬 탭의 no 전달 */
                selectTab(no);
            }}
        >
            {name}
        </li>
    );
}

export default TabItem;
