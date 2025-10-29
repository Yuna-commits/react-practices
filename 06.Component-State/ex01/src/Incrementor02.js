import React, { useState } from "react";

export default function ({ begin, step }) {
    {
        /*
    - val의 초기값을 begin으로 설정
    - setVal은 상태 변경 함수
    */
    }
    const [val, setVal] = useState(begin);
    return (
        <div>
            <button
                onClick={() => {
                    setVal(val + step);
                }}
            >
                <strong>+</strong>
            </button>{" "}
            <span>{val}</span>
        </div>
    );
}
