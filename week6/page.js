"use client";

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './item.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div>
            <br></br>
            <NewItem onAddItem={handleAddItem} />
            <br></br>
            <br></br>
            <ItemList items={items} />
        </div>
    );
}
