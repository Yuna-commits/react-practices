import React, { useState } from "react";
import LifeCycle from "./LifeCycle";

export default function App() {
    const [show, setShow] = useState(true);
    const [color, setColor] = useState("#000");
    return (
        <>
            <h2>ex05 - Component LifeCycle</h2>
            <button
                onClick={() =>
                    setColor(
                        `#${Math.floor(Math.random() * 0x00ffffff).toString(
                            16
                        )}`
                    )
                }
            >
                색상변경
            </button>
            <br />
            <input
                type="checkbox"
                checked={show}
                onChange={() => {
                    setShow(!show);
                }}
            />
            <span>컴포넌트 보기</span>
            <br />
            {show ? <LifeCycle color={color} /> : null}
        </>
    );
}
