import React from "react";
import GroceryItem from "./GroceryItem";

function GroceryList({ groceries }) {
    /*
    동일
    React.createElement("ol", {}, <GroceryItem />, <GroceryItem />)
    React.createElement("ol", {}, [<GroceryItem />, <GroceryItem />])
    */

    console.log(groceries);

    return (
        <ol className={"grocery-list"}>
            <GroceryItem name={"Bread"} count={10} />
            <GroceryItem name={"Milk"} count={20} />
            <GroceryItem name={"Egg"} count={30} />
        </ol>
    );
}

/*
동일
React.createElement("ol", {}, <GroceryItem />, <GroceryItem />)
React.createElement("ol", {}, [<GroceryItem />, <GroceryItem />])
*/

export default GroceryList;
