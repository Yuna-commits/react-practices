import React, { useRef, useState } from "react";
import { Task_List, Input_Add_Task } from "./assets/scss/TaskList.scss";
import Task from "./Task.js";
import axios from "axios";

// onAddTask, onDeleteTask : 부모의 상태를 변경할 콜백 함수
function TaskList({ tasks, onAddTask, onDeleteTask, onChangeTask }) {
    const [inputTask, setInputTask] = useState("");

    const handleSubmit = async () => {
        if (inputTask === "") {
            return;
        }
        try {
            // 부모 상태 업데이트
            await onAddTask(inputTask);
            // 입력칸 비우기
            setInputTask("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={Task_List}>
            <ul>
                {/* 등록된 task가 없을 수도 있음 */}
                {tasks?.map((task) => (
                    <Task
                        key={task.no}
                        task={task}
                        onDeleteTask={onDeleteTask}
                        onChangeTask={onChangeTask}
                    />
                ))}
            </ul>

            <input
                className={Input_Add_Task}
                type="text"
                value={inputTask}
                placeholder="태스크 추가"
                onChange={(event) => {
                    // 5. 태스크 입력
                    setInputTask(event.target.value);
                }}
                onKeyDown={(event) => {
                    // 엔터키 입력 시 서버로 전송
                    event.key === "Enter" && handleSubmit();
                }}
            />
        </div>
    );
}

export default TaskList;
