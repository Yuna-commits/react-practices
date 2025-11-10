import React from "react";
import Card from "./Card.js";
import { Card_List } from "./assets/scss/CardList.scss";

function CardList({ title, cards }) {
    return (
        <div className={Card_List}>
            <h1>{title}</h1>
            {/* status 별로 필터링 된 card 렌더링 */}
            {cards.map((card) => (
                <Card
                    key={card.no}
                    no={card.no}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
}

export default CardList;
