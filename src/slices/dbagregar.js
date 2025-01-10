import { createSlice } from "@reduxjs/toolkit"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase/firebase-config";



const initialState = {
  movies: []
}

export const moviesReducer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    storeMovies: (state, action) => {
      state.movies = action.payload;
    }
  }
})

export const { storeMovies } = moviesReducer.actions;
export default moviesReducer.reducer;

// ---------------- FIRESTORE DATABASE FUNCTIONS ------------------------------

// POST - CREATE
export const addDocument = async  (data) => {
  try {
    const response = await addDoc(collection(db, "gruposmusculares"), data)
    if (response) {
      console.log(response)
    }

  } catch (error) {
    console.error("Error al subir documento: " + error);
  }
}

// GET - READ
export const getDocuments = async () => {
  const  gruposmusculares1 = [] 
  try {
    const response = await getDocs(collection(db, "gruposmusculares"))
    response.forEach((item) => {
      gruposmusculares1.push(
        { ...item.data() }
      )
    })
    return gruposmusculares1;
  } catch (error) {
    console.error("Error al leer documentos: " + error);
  }
}

// PATCH - UPDATE
export const updateDocument = async (data) => {
  try {
    const moviesCollection = collection(db, "gruposmusculares")
    const movieQuery = query(moviesCollection, where("id", "==", data.id))

    const queriedData = await getDocs(movieQuery)

    let id
    queriedData.forEach((item)=> {
      id = item.id
    })

    const docRef = doc(db, "gruposmusculares", id)

    await updateDoc(docRef, data)
    if (docRef) return {status: "success"}
  } catch (error) {
    console.error("Error al actualizar documento: " + error);
  }
}

// DELETE - DELETE
export const deleteDocument = async (id) => {
  try {
    const moviesCollection = collection(db, "gruposmusculares")
    const movieQuery = query(moviesCollection, where("id", "==", id))

    const queriedData = await getDocs(movieQuery)

    queriedData.forEach((item) => {
      // item.isDeletbable ? eliminar : mostrar alerta
      deleteDoc(doc(db, "gruposmusculares", item.id))
    })
  } catch (error) {
    console.error("Error al actualizar documento: " + error);
  }
}
