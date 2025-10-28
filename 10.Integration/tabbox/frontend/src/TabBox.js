import React from "react";
import { Tab_Box } from "./assets/scss/TabBox.scss";
import Tabs from "./Tabs.js";
import TabView from "./TabView.js";
import data from "./assets/json/data.js";

function TabBox() {
    return (
        <div className={Tab_Box}>
            <Tabs tabs={data} />
            <TabView />
        </div>
    );
}

export default TabBox;
