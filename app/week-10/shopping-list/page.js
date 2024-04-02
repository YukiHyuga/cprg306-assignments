"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems,addItem } from "../_services/shopping-list-service";

export default function Page(){
    
    const [itemName, setSelectedItemName] = useState('');
    const [items, setItems] = useState([]);
    const { user } = useUserAuth();

    const handleItemSelect = (itemName) => {
        // Clean up the item name by removing emojis
        const cleanedItemName = itemName.replace(/[\u{1F300}-\u{1FAD6}]/gu, '').split(',')[0].trim();
        setSelectedItemName(cleanedItemName);
    };
    
    // Uses the addItem function to add the item 
    const handleAddItem =  async (newItem) =>{
      const newItemID = await addItem(user.uid, newItem)
      if (newItemID){
        newItem.id = newItemID
        setItems([...items, newItem]);
      }
    }

    // This functions uses the getItem functions tp loads the already created items stored in the Cloud Firestore.
    useEffect(() => {
      const loadItems = async () => {
          if (user) {
              const userItems = await getItems(user.uid);
              setItems(userItems);
          }
      };
      if (user){
        loadItems();
      } else {
        window.location.href = "/week-10"; 
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