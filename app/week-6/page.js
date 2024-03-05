"use client";

import { useState } from "react";
import ItemList from "../week-6/item-list.js";
import NewItem from "../week-6/new-item.js";
import ItemsData from "./items.json"


export default function Page(){
    
    const [items, setItems] = useState(ItemsData);
    
    const handleAddItem = (newItem) =>{
        setItems([...items, newItem]);
    }
    
    return(
        <main>
            <h1 className="text-4xl font-bold m-6 text-black-300">Shopping List</h1>
             {/* Pass handleAddItem to NewItem component as a prop */}
            <NewItem onAddItem={handleAddItem}></NewItem>
            {/* Pass items state to ItemList component as a prop */}
            <ItemList items={items}/>
        </main>
    );
}