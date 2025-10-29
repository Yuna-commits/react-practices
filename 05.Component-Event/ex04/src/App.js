import React from "react";
import logo from "./assets/images/react-logo.png";

export default function App() {
    const onMouseOver = (e) => {
        console.log("mouseover", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onMouseMove = (e) => {
        console.log("mousemove", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onMouseOut = (e) => {
        console.log("mouseout", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onMouseDown = (e) => {
        console.log("mousedown", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onMouseUp = (e) => {
        console.log("mouseup", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onClick = (e) => {
        console.log("click", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onDoubleClick = (e) => {
        console.log("dblclick", `x=${e.clientX}, y=${e.clientY}`);
    };

    const onChange = (e) => {
        console.log("change", e.target.value);
    };

    const onKeyDown = (e) => {
        console.log("keydown", e.key);
        if (e.key === "Enter") {
            console.log("Enter Key Down");
            e.target.value = "";
        }
    };

    const onKeyUp = (e) => {
        console.log("keyup", e.key);
    };

    const onKeyPress = (e) => {
        console.log("keypress", e.key);
    };

    return (
        <>
            <h2>Event Handler Examples</h2>
            <input
                type="text"
                placeholder="메세지를 입력 하세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onKeyPress={onKeyPress}
            />
            <br />
            <br />
            <img
                id={"my-image"}
                style={{
                    cursor: "pointer",
                    width: 190,
                    border: "1px solid #ccc",
                }}
                src={logo}
                onMouseOver={onMouseOver}
                onMouseMove={onMouseMove}
                onMouseOut={onMouseOut}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
            />
        </>
    );
}
