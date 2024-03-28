
import axios from "axios";
import { getCookie } from "cookies-next";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const showNotes=createAsyncThunk('show/showNotes',async()=>{
    let {data}= await axios.get('https://note-sigma-black.vercel.app/api/v1/notes',{
        headers:{
            token: `3b8ny__${getCookie('noteToken')}`
        }
    }
    )
    
    return data
})



const ShowNotesSlice=createSlice({
    name:'show',
    initialState:{
        notesList:null,
        loading:false,
        error:''
    },

    
    extraReducers:(build)=>{

       

        build.addCase(showNotes.fulfilled , (state,action)=>{
            state.notesList=action.payload
            state.loading=false
            state.error=''
        })
        build.addCase(showNotes.rejected , (state,action)=>{
            
            state.loading=false
            state.error='Error'
        })
        build.addCase(showNotes.pending , (state,action)=>{
            
            state.loading=true
            
        })
      
    }
})

export const showNotesReducer=ShowNotesSlice.reducer