import React from "react";
import styled from "styled-components";
import TabBox from "./TabBox";

const StyledDiv = styled.div`
    width: 100%;
`;

function App() {
    return (
        <StyledDiv id={"App"}>
            <TabBox />
        </StyledDiv>
    );
}

export default App;
