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
function Tabs({ tabs }) {
    /* 
    const props = { tabs: data } 
    const { tabs } = props
    */
    console.log(tabs);

    return (
        <StyledUl>
            {tabs.map((tab) => (
                <TabItem key={tab.no} name={tab.name} />
            ))}
        </StyledUl>
    );
}

export default Tabs;
