"use client";

import { useState } from "react";
import ItemList from "../week-7/item-list.js";
import NewItem from "../week-7/new-item.js";
import ItemsData from "./items.json"
import MealIdeas from "./meal-ideas.js";


export default function Page(){
    
    const [itemName, setSelectedItemName] = useState('');
    const [items, setItems] = useState(ItemsData);

    const handleItemSelect = (itemName) => {
        // Clean up the item name by removing emojis
        const cleanedItemName = itemName.replace(/[\u{1F300}-\u{1FAD6}]/gu, '').split(',')[0].trim();
        setSelectedItemName(cleanedItemName);
    };
    
    const handleAddItem = (newItem) =>{
        setItems([...items, newItem]);
    }
    
    return(
        <div>
            <h1 className="text-4xl font-bold m-6 text-black-300">Shopping List</h1>
            <main className="flex">
            <div className="w-1/3 ">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/3">
                <MealIdeas ingredient={itemName} />
            </div>
            </main>
        </div>
    );
}