import React from "react";
import styled from "styled-components";
import TabItem from "./TabItem";

const StyledUl = styled.ul`
    height: 24px;
`;

/*
Tabs(tabs) -> props 전체를 tabs라는 이름으로 받음
tabs === { tabs: data }가 전달됨!
=> TypeError: [].map is not a function 발생
*/
function Tabs({ selectTab, tabs }) {
    /* 
    const props = { tabs: data } 
    const { tabs } = props
    */
    return (
        <StyledUl>
            {tabs.map((tab) => (
                <TabItem
                    key={tab.no}
                    no={tab.no}
                    name={tab.name}
                    active={tab.active}
                    /* Props Drilling */
                    selectTab={selectTab}
                />
            ))}
        </StyledUl>
    );
}

export default Tabs;
