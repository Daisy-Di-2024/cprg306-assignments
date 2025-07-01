"use client";
import ItemList from "./item-list";
import NewItem from "./new-item"
import itemsData from "./item.json"
import { useState } from "react";

export default function Page() {

    let itemArray = itemsData.map((item) => ({ ...item }));
    const [items, setItems] = useState(itemArray);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return (
        <main>
            <NewItem onAddItem={handleAddItem} />
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <ItemList items={items} setItems={setItems} />
        </main>
    )
}