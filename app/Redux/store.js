import { configureStore } from '@reduxjs/toolkit'
import { addNoteReducer } from './AddNoteSlice'
import { showNotesReducer } from './showNotesSlice'
import { updateNoteReducer } from './updateNoteSlice'
import { valueReducers } from './valueSlice'

export const store =  configureStore({
    reducer: {
        addnote:addNoteReducer,
        shownote:showNotesReducer,
        updatenote:updateNoteReducer,
        value:valueReducers,
    },
  })
