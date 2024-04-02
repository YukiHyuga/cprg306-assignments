import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// This function retrieves all items for a specific user from Firestore.
export const getItems = async (userId) => {
  try {
    const itemsSnapshot = await getDocs(collection(db, `users/${userId}/items`));
    const items = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};
  
  // This is the function add a new item to a specific user's lists of items.
  export const addItem = async (userId, item) => {
    try {
      const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      return null;
    }
  }