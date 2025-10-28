import React from "react";
import { _Card, Card_Title, Card_Title_Open } from "./assets/scss/Card.scss";
import TaskList from "./TaskList.js";

function Card({ title, description, tasks }) {
    return (
        <div className={_Card}>
            <div className={`${Card_Title} ${Card_Title_Open}`}>
                &nbsp;{title}
            </div>
            <div className="Card_Details">
                {description}
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
}

export default Card;
