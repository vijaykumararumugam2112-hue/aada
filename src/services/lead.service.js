import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/config";

const LEADS_COLLECTION = "leads";

/**
 * Save a new lead
 */
export async function saveLead(lead) {
  const docRef = await addDoc(
    collection(db, LEADS_COLLECTION),
    {
      ...lead,
      status: "NEW",
      source: "AADAvis",
      assignedTo: "",
      notes: "",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }
  );

  return docRef.id;
}