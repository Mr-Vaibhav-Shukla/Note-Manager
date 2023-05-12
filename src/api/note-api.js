import { collection, getDocs, orderBy, query, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore"
import { FirebaseApp } from "services/firebase"
export class NOTE_API {
  static async create(newNote) {
    const response = await addDoc(collection(FirebaseApp.db,"UXSBIWEHINDNWJCQUWE"), newNote);
    return {
      id: response.id,
      ...newNote
    }
  }

  static async fetchAll() {
    const q = query(collection(FirebaseApp.db,"UXSBIWEHINDNWJCQUWE"), orderBy("created_at", "asc"))
    const response = await getDocs(q)
    return response.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
  }

  static async deleteById(id) {
    await deleteDoc(doc(FirebaseApp.db, "UXSBIWEHINDNWJCQUWE", id))
  }

  static async updateById(updatedNote) {
    const q = doc(FirebaseApp.db, "UXSBIWEHINDNWJCQUWE", updatedNote.id)
    await updateDoc(q, updatedNote)
    return updatedNote
  }

  static onSHouldSyncNotes(onChange){
    const q = query(collection(FirebaseApp.db,"UXSBIWEHINDNWJCQUWE"))
    const unsub = onSnapshot(q, (querrySnapshot)=> {
      const isUserPerformingChanges = querrySnapshot.metadata.hasPendingWrites;
      if(!isUserPerformingChanges){
        onChange()
      }
    })
    return unsub;
  }
}
