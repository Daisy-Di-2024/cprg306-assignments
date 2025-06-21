"use client";
import Item from "./item";
import { useState } from 'react';
import itemData from "./item.json"

export default function ItemList() {

  let [sortBy, setSortBy] = useState("name");
  let [items, setItems] = useState(itemData.map((item) => ({ ...item })))

  function resortItems() {
    return items.sort((a, b) => {
      let valueA = a[sortBy].toUpperCase();
      let valueB = b[sortBy].toUpperCase();
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
  }

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    const newItems = resortItems();
    setItems(newItems);
  }

  return (
    <section>
      <div>
        <label style={{ backgroundColor: sortBy == "name" ? "lightblue" : "green" }}>Sort by </label>
        <select onChange={handleSortChange}>
          <option value="name">name</option>
          <option value="category">category</option>
        </select>
      </div>
      <ul>
        {items.map((item) => (<Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />))
        }
      </ul>
    </section>

  );
}