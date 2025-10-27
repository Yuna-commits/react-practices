import React from "react";
import GroceryItem from "./GroceryItem";

function GroceryList({ groceries }) {
    const a = [
        <GroceryItem name={"Bread"} count={10} />,
        <GroceryItem name={"Milk"} count={20} />,
        <GroceryItem name={"Egg"} count={30} />,
    ];

    return (
        <ol className={"grocery-list"}>
            {a}

            {/* 동일
            <GroceryItem name={"Bread"} count={10} />
            <GroceryItem name={"Milk"} count={20} />
            <GroceryItem name={"Egg"} count={30} />
            */}
        </ol>
    );
}

/*
동일
React.createElement("ol", {}, <GroceryItem />, <GroceryItem />)
React.createElement("ol", {}, [<GroceryItem />, <GroceryItem />])
*/

export default GroceryList;
