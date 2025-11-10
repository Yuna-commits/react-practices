import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardList from "./CardList.js";

// API
import axios from "axios";

const StyledDiv = styled.div`
    white-space: nowrap;
    height: 100%;
    margin: 20px auto;
`;

function KanbanBoard() {
    const [allCards, setAllCards] = useState([]);

    // 마운트 시 1회만 fetchCards() 실행
    useEffect(() => {
        // 서버에서 카드 목록 가져오기 (GET /card)
        const fetchCards = async () => {
            try {
                const { data: jsonResult } = await axios.get("/api/card");

                if (jsonResult.result !== "success") {
                    throw new Error(jsonResult.message);
                }
                // allCards 내부에 tasks 없음!
                setAllCards(jsonResult.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCards();
    }, []);

    const statusList = ["ToDo", "Doing", "Done"];
    // 각 status에 속한 카드만 필터링
    const filtered = statusList.map((status) => ({
        status,
        cardList: allCards.filter((card) => card.status === status),
    }));

    return (
        <StyledDiv className={"Kanban_Board"}>
            {filtered.map((data) => (
                <CardList
                    key={data.status}
                    title={data.status}
                    cards={data.cardList}
                />
            ))}
        </StyledDiv>
    );
}

export default KanbanBoard;
