import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
    font-size: 14px;
    text-align: center;
    margin: 100px auto;
    padding: 20px;
    border: 2px solid #999;
    color: #1144fe;
    background-color: #cdc1ce;
`;

function Header(props) {
    return <StyledH1>{"CSS in JS: StyledCompoent"}</StyledH1>;
}

export default Header;
