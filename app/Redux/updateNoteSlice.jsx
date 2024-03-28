
import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getCookie } from "cookies-next";
export let updateNotesFunc =createAsyncThunk('update/updateNotesFunc',async (_id,values)=>{
    let {data}= await axios.put(`https://note-sigma-black.vercel.app/api/v1/notes/${_id}`,values,{
        headers:{
            token: `3b8ny__${getCookie('noteToken')}`
        }
    }
    )
    console.log(data)
    return data
})

const updateNoteSlice = createSlice({
    name:'update',
    initialState:{
        error:'',
       
    },
    extraReducers:(build)=>{
        build.addCase(updateNotesFunc.fulfilled,(state,action)=>{
          
          state.error=''
            toast.success('Note Updated Successfully')
           
           
        })
       
        build.addCase(updateNotesFunc.rejected,(state,action)=>{
          
            state.error='Error'
        })
    }
})

export const updateNoteReducer= updateNoteSlice.reducer