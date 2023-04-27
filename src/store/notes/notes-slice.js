import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        noteList: []
    },
    reducers: {
        setNoteList: (currentSlice, action) => {
            currentSlice.noteList = action.payload
        },

        addNote: (currentSlice, action) => {
            currentSlice.noteList.push(action.payload)
        },

        updateNote: (currentSlice, action) => {
            const idx = currentSlice.noteList.findIndex(note => note.id === action.payload.id)
            currentSlice.noteList[idx] = action.payload
        },

        deleteNote: (currentSlice, action) => {
            const idx = currentSlice.noteList.indexOf(action.payload)
            currentSlice.noteList.splice(idx,1)
        }
    }
})

export const noteReducer = noteSlice.reducer

export const {setNoteList, addNote, updateNote, deleteNote} = noteSlice.actions