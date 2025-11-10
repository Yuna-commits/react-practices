import React, { useState } from "react";
import { _Task, Task_Remove } from "./assets/scss/Task.scss";

function Task({ task, onDeleteTask, onChangeTask }) {
    const handleDelete = async (event) => {
        event.preventDefault(); // a 태그 이동 막기
        onDeleteTask(task.no);
    };

    const handleChange = async (changed) => {
        onChangeTask(task.no, changed);
    };

    return (
        <li className={_Task}>
            <input
                type="checkbox"
                checked={task.done === "Y"}
                onChange={(event) => {
                    // 6. 태스크 상태 수정
                    handleChange(event.target.checked ? "Y" : "N");
                }}
            />
            &nbsp;{task.name}&nbsp;
            {/* 5. 태스크 삭제 */}
            <a href="#" className={Task_Remove} onClick={handleDelete}></a>
        </li>
    );
}

export default Task;
