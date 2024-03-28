import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";



export let deleteNoteFunc=createAsyncThunk('delete/deleteNoteFunc',async(id)=>{

   try {
    let {data}= await axios.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,{
        headers:{
            token: `3b8ny__${getCookie('noteToken')}`
        }
    })
    console.log(data)
    return data
    
   } catch (err) {
    console.log(err)
   }


})


let deleteNote= createSlice({
    name:'delete',
    initialState:{
        error:''

    },
    extraReducers:(build)=>{
        build.addCase(deleteNoteFunc.fulfilled, (state,action)=>{
            state.error=''
        })
        build.addCase(deleteNoteFunc.rejected, (state,action)=>{
            state.error=''
        })
    }
})