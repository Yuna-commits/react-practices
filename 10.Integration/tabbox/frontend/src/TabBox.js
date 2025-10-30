import React, { useState } from "react";
import { Tab_Box } from "./assets/scss/TabBox.scss";
import Tabs from "./Tabs.js";
import TabView from "./TabView.js";
import data from "./assets/json/data.js";

function TabBox() {
    const [activeIndex, setActiveIndex] = useState(0); // 초기값: 0번째 탭

    // Callback(매개변수로 함수 객체 전달)
    const selectTab = (no) => {
        console.log(no);
        setActiveIndex(data.findIndex((el) => el.no === no));
    };

    return (
        <div className={Tab_Box}>
            {/* Props Drilling */}
            <Tabs
                selectTab={selectTab}
                tabs={data.map((tab, index) => ({
                    no: tab.no,
                    name: tab.name,
                    active: index === activeIndex,
                }))}
            />
            <TabView contents={data[activeIndex].contents} />
        </div>
    );
}

export default TabBox;
