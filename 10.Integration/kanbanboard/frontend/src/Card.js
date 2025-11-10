import React, { useState } from "react";
import {
    _Card,
    Card_Title,
    Card_Title_Open,
    Card_Details,
} from "./assets/scss/Card.scss";
import TaskList from "./TaskList.js";

import axios from "axios";
import update from "react-addons-update";

/**
 *       (콜백함수 전달)
 * Card -> TaskList -> Task
 *        (변수 전달)
 * Card <- TaskList <- Task
 * - Card가 태스크 추가, 삭제, 수정 상태 관리 & 서버 통신 담당
 * - TaskList, Taks는 렌더링과 이벤트 트리거만 담당
 */
function Card({ no, title, description }) {
    const [showDetails, setShowDetails] = useState(false);
    const [taskList, setTaskList] = useState([]);

    // 태스크 목록 가져오기 (GET /task?cardNo=)
    const fetchTasks = async () => {
        try {
            // 객체 구조 분해 할당
            // response의 data 속성을 꺼내 jsonResult라는 이름으로 사용
            const { data: jsonResult } = await axios.get(
                `/api/task?cardNo=${no}`
            );

            if (jsonResult.result !== "success") {
                throw new Error(jsonResult.message);
            }

            // jsonResult.data가 null/undefined이면 빈 배열로 초기화
            setTaskList(jsonResult.data ?? []);
        } catch (err) {
            console.error(err);
        }
    };

    const toggleDetails = async () => {
        // 상세목록을 열 때 서버에서 태스크 가져오기
        if (!showDetails) {
            await fetchTasks();
        }
        setShowDetails(!showDetails);
    };

    // 새 태스크 저장 (POST /task)
    // 자식(TaskList)이 값을 입력하면 그 값을 받아 부모의 상태를 변경
    const addTask = async (inputTask) => {
        try {
            const { data: jsonResult } = await axios.post("/api/task", {
                no: null,
                name: inputTask,
                done: "N",
                cardNo: no,
            });

            if (jsonResult.result !== "success") {
                throw new Error(jsonResult.message);
            }

            // 새로 등록된 태스크가 추가된 taskList를 다시 랜더링
            setTaskList([jsonResult.data, ...taskList]);
        } catch (err) {
            console.error(err);
        }
    };

    // 태스크 삭제 (DELETE /task/{no})
    const deleteTask = async (taskNo) => {
        try {
            const { data: jsonResult } = await axios.delete(
                `/api/task/${taskNo}`
            );

            if (jsonResult.result !== "success") {
                throw new Error(jsonResult.message);
            }

            // 성공 시 반환값 true
            // 해당 no를 제외한 나머지 태스크를 다시 상태에 저장
            jsonResult.data &&
                setTaskList(taskList.filter((task) => task.no !== taskNo));
        } catch (err) {
            console.error(err);
        }
    };

    // 태스크 상태 변경 (PUT /task/{no}?done=)
    const changeTask = async (taskNo, done) => {
        try {
            const { data: jsonResult } = await axios.put(
                `/api/task/${taskNo}`,
                // 쿼리스트링 : done={done("Y"/"N")} 생성
                new URLSearchParams({ done }),
                {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-from-urlencoded",
                }
            );

            // 성공 시 반환값 true
            // 해당하는 태스크의 인덱스로 접근, 값 변경 후 다시 상태에 저장
            jsonResult.data &&
                setTaskList(
                    update(taskList, {
                        [taskList.findIndex((task) => task.no === taskNo)]: {
                            done: {
                                $set: done,
                            },
                        },
                    })
                );
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={_Card}>
            <div
                className={`${Card_Title} ${
                    showDetails ? Card_Title_Open : ""
                }`}
                onClick={toggleDetails}
            >
                &nbsp;{title}
            </div>

            {showDetails && (
                <div className={Card_Details}>
                    {description}
                    <TaskList
                        tasks={taskList}
                        onAddTask={addTask}
                        onDeleteTask={deleteTask}
                        onChangeTask={changeTask}
                    />
                </div>
            )}
        </div>
    );
}

export default Card;
