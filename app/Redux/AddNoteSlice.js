import axios from "axios";
import { useAppDispatch } from '@/app/Redux/hooks';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";





export let AddNotes =createAsyncThunk('note/AddNotes',async (values)=>{
    let {data}= await axios.post('https://note-sigma-black.vercel.app/api/v1/notes',values,{
        headers:{
            token: `3b8ny__${getCookie('noteToken')}`
        }
    }
    )
    console.log(data)
    return data
})


const addNoteSlice = createSlice({
    name:'note',
    initialState:{
       
        loading:false,
        error:''
    },


    extraReducers:(build)=>{
        build.addCase(AddNotes.fulfilled,(state,action)=>{
            state.loading=false
            toast.success('Note Added Successfully')
            
           
           
        })
        build.addCase(AddNotes.pending,(state,action)=>{
            state.loading=true
        })
        build.addCase(AddNotes.rejected,(state,action)=>{
            state.loading=false
            state.error='Error'
        })
    }
})

export const addNoteReducer= addNoteSlice.reducer
