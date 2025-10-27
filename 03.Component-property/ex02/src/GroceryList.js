import React from "react";
import GroceryItem from "./GroceryItem";

function GroceryList({ groceries }) {
    const groceryItems = [];

    groceries.forEach((grocery) => {
        groceryItems.push(
            <GroceryItem name={grocery.name} count={grocery.count} />
        );
    });

    /*
    groceryItems = [
        <GroceryItem name="Bread" count={10} />,
        <GroceryItem name="Milk" count={20} />,
        <GroceryItem name="Egg" count={30} />,
        <GroceryItem name="Banana" count={40} />,
    ];
    */

    return <ol className={"grocery-list"}>{groceryItems}</ol>;
}

/*
<ol className={"grocery-list"}>{groceryItems}</ol>

<ol className={"grocery-list"}>
    <GroceryItem name={"Bread"} count={10}/>
    <GroceryItem name={"Milk"} count={20}/>
    <GroceryItem name={"Egg"} count={30}/>
    <GroceryItem name={"Banana"} count={40}/>
</ol>

--> transpile
React.createElement(
    "ol", 
    {className: "grocery-list"}, 
    React.createElement(GroceryItem, {name: "Bread", count: 10}),
    React.createElement(GroceryItem, {name: "Milk", count: 20}),
    React.createElement(GroceryItem, {name: "Egg", count: 30}),
    React.createElement(GroceryItem, {name: "Banana", count: 40}),
);
*/

export default GroceryList;
