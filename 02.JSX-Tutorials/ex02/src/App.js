import React from "react";

function app() {
    const greetings = "Hello World";

    return (
        <div>
            <h1>Ex02</h1>
            <p>특징 II: Single Root</p>
        </div>
    );
}

/*
== Single Root
-> transpile 후의 컴포넌트
function app() {
    return (
        React.createElement("div", null, React.createElement("h1", null, "Ex02"), React.createElement("p", null, "특징 II: Single Root"));
    );
}
 */

/*
== Multi Root
function app() {
    return (
        <h1>Ex02</h1>
        <div>
            <p>특징 II: Single Root</p>
        </div>
    );
}

-> transpile 후의 컴포넌트 (Error!)
function app() {
    return (
        React.createElement("h1", null, "Ex02")
        React.createElement("div", null, React.createElement("p", null, "특징 II: Single Root"))
    );
}
*/

export default app;
