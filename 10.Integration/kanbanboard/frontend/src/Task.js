import React from "react";
import { _Task, Task_Remove } from "./assets/scss/Task.scss";

function Task({ name, done }) {
    return (
        <li className={_Task}>
            <input type="checkbox" checked={done} />
            &nbsp;{name}&nbsp;
            <a href="#" className={Task_Remove}></a>
        </li>
    );
}

export default Task;
