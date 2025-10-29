import React from "react";
import { Task_List, Input_Add_Task } from "./assets/scss/TaskList.scss";
import Task from "./Task.js";

function TaskList({ tasks }) {
    return (
        <div className={Task_List}>
            <ul>
                {/* 등록된 task가 없을 수도 있음 */}
                {tasks?.map((task) => (
                    <Task key={task.no} name={task.name} done={task.done} />
                ))}
            </ul>
            <input
                className={Input_Add_Task}
                type="text"
                placeholder="태스크 추가"
            />
        </div>
    );
}

export default TaskList;
