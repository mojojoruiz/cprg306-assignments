import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState ("name");

    let sortedItems = [...items];
    sortedItems = (sortBy === "name") ? sortedItems.sort((a, b) => a.name.localeCompare(b.name)) : sortedItems.sort((a, b) => a.category.localeCompare(b.category));

    const handleNameSorted = () => {
        setSortBy("name");
    };

    const handleCategorySorted = () => {
        setSortBy("category");
    };

    return (
        <>
        <div>
            <label htmlFor="sort"className = "m-2 p-2">Sort by:</label>
        </div>

        <div>                
            <button type="button" className={`m-4 w-25 p-2 ${sortBy === "name" ? "bg-pink-700" : "bg-pink-400"} rounded-md text-white font-bold`} onClick={handleNameSorted}>Name</button>
            <button type="button" className={`m-2 w-25 p-2 ${sortBy === "category" ? "bg-green-700" : "bg-green-400"}  rounded-md text-white font-bold`} onClick={handleCategorySorted}>Category</button>
            <button type = "button" className = {`m-4 w-25 p-2 ${sortBy === "groupedByCategory" ? "bg-blue-700" : "bg-blue-400"}  rounded-md text-white font-bold`}>Grouped by Category</button>
        </div>

        {sortedItems.map((item) => (
            <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            id={item.id}
            key = {item.id}
            onSelect={() => onItemSelect(item.name)}
            />
        ))}
        </>
    );
}
