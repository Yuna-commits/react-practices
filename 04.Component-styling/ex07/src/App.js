import React from "react";
import styled from "styled-components";
import Header from "./Header";

const StyledDiv = styled.div`
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: #111;
`;

// parenthsis-less function
function App() {
    return (
        <StyledDiv>
            <Header />
        </StyledDiv>
    );
}

export default App;
