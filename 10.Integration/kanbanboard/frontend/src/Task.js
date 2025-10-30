import React, { useState } from "react";
import { _Task, Task_Remove } from "./assets/scss/Task.scss";

function Task({ name, done }) {
    const [doneChecked, setDoneChecked] = useState(done);

    return (
        <li className={_Task}>
            <input
                type="checkbox"
                checked={doneChecked}
                onChange={() => {
                    setDoneChecked(!doneChecked);
                }}
            />
            &nbsp;{name}&nbsp;
            <a href="#" className={Task_Remove}></a>
        </li>
    );
}

export default Task;
