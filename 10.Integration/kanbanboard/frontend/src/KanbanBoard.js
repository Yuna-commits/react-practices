import React from "react";
import styled from "styled-components";
import CardList from "./CardList.js";
import kanbanData from "./assets/json/data.js";

const StyledDiv = styled.div`
    white-space: nowrap;
    height: 100%;
    margin: 20px auto;
`;

/*
root [
    KanbanBoard [
        <CardList> props: status 별 data 객체
            <Card> props: tasks 속성
                <TaskList> props: task 이름
                    <Task />
                </TaskList>
            </Card>
        </CardList>
    ]
]
*/
function KanbanBoard() {
    /*
    status 별로 필터링 -> 필터링 된 데이터를 CardList로 렌더링
    */
    const statuses = ["ToDo", "Doing", "Done"];

    const filteredData = statuses.map((status) => ({
        status,
        cards: kanbanData.filter((list) => list.status === status),
    }));

    return (
        <StyledDiv className="Kanban_Board">
            {filteredData.map((data) => (
                <CardList
                    key={data.status}
                    status={data.status}
                    cards={data.cards}
                />
            ))}
        </StyledDiv>
    );
}

export default KanbanBoard;
