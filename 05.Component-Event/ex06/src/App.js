import React, { useRef } from "react";
import "./assets/scss/App.scss";

export default function App() {
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    /*
    - outerRef, innerRef가 JSX의 ref 속성으로 연결되면
      React가 렌더링 후, 실제 DOM 노드를 current에 할당한다.
    - outerRef(innerRef).current가 div의 DOM 객체를 참조하여
      브라우저가 관리하는 실제 렌더링 결과(scrollTop, clientHeight, offsetTop, ...)에 접근이 가능하다.
    */

    return (
        <div
            className={"App"}
            ref={outerRef}
            onScroll={() => {
                console.log(
                    outerRef.current.scrollTop,
                    outerRef.current.clientHeight,
                    innerRef.current.clientHeight
                );
                if (
                    innerRef.current.clientHeight ===
                    outerRef.current.scrollTop + outerRef.current.clientHeight
                ) {
                    console.log("call api");
                }
            }}
        >
            <div ref={innerRef}>
                <ul>
                    {Array.from({ length: 100 }, (_, i) => i + 1).map((i) => (
                        <li key={i}>{`아이템 ${i} 입니다.`}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
