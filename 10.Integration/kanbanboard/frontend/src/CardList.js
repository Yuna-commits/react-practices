import React from "react";
import Card from "./Card.js";
import { Card_List } from "./assets/scss/CardList.scss";

function CardList({ status, cards }) {
    return (
        <div className={Card_List}>
            <h1>{status}</h1>
            {/* status 별로 필터링 된 card 렌더링 */}
            {cards.map((card) => (
                <Card
                    key={card.no}
                    title={card.title}
                    description={card.description}
                    tasks={card.tasks}
                />
            ))}
        </div>
    );
}

export default CardList;
