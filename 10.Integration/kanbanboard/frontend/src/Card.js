import React, { useState } from "react";
import {
    _Card,
    Card_Title,
    Card_Title_Open,
    Card_Details,
} from "./assets/scss/Card.scss";
import TaskList from "./TaskList.js";

function Card({ title, description, tasks }) {
    // task 목록 보이기(true), 안 보이기(false)
    const [showDetails, setShowDetails] = useState(true);

    return (
        <div className={_Card}>
            <div
                className={`${Card_Title} ${
                    showDetails ? Card_Title_Open : ""
                }`}
                onClick={() => {
                    // toggle
                    setShowDetails(!showDetails);
                }}
            >
                &nbsp;{title}
            </div>
            {showDetails ? (
                <div className={Card_Details}>
                    {description}
                    <TaskList tasks={tasks} />
                </div>
            ) : null}
        </div>
    );
}

export default Card;
