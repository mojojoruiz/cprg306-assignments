import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
const userRef = collection(db, 'users', userId, 'items');
const userSnapshot = await getDocs(userRef);
const items = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
return items;
}

export const addItem = async (userId, item) => {
const userRef = collection(db, 'users', userId, 'items');
const docRef = await addDoc(userRef, item);
return docRef.id;
}
