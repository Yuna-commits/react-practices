import React from "react";

function Clock03({ hour, min, sec }) {
    // Destructing : 구조 분해
    // const { hour, min, sec } = props;

    return (
        <div>
            {("0" + hour).slice(-2)}
            {":"}
            {("0" + min).slice(-2)}
            {":"}
            {("0" + sec).slice(-2)}
        </div>
    );
}

export default Clock03;
