"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemsData from "./items.json"
import MealIdeas from "./meal-ideas";

import { useUserAuth } from "../_utils/auth-context";


export default function Page(){
    
    const [itemName, setSelectedItemName] = useState('');
    const [items, setItems] = useState(ItemsData);
    const { user } = useUserAuth();

    const handleItemSelect = (itemName) => {
        // Clean up the item name by removing emojis
        const cleanedItemName = itemName.replace(/[\u{1F300}-\u{1FAD6}]/gu, '').split(',')[0].trim();
        setSelectedItemName(cleanedItemName);
    };
    
    const handleAddItem = (newItem) =>{
        setItems([...items, newItem]);
    }

    // Uses use effect to redirect the user to the landing page
    useEffect(() => {
        if (!user) {
          window.location.href = "/week-8"; 
        }
      }, [user]);
    
      // This checks if the user is not logged in and will return a null.
      if (!user) {
        return null;
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