import { createSlice }  from "@reduxjs/toolkit";

let valueSlice=createSlice({
    name:'value',
    initialState:{
        value:'',

    },reducers:{
        setValue:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const valueReducers= valueSlice.reducer

export const {setValue}= valueSlice.actions