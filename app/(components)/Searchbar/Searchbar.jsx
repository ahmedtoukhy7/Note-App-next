import React from 'react'
import { useAppDispatch ,useAppSelector } from '@/app/Redux/hooks'
import { setValue } from '@/app/Redux/valueSlice'
export default function Searchbar() {

  let dispatch=useAppDispatch()
  let {value}=useAppSelector((state)=>state.value)

  return <>

  <div className='search w-100'>
    <input onChange={(e)=>{
      dispatch(setValue(e.target.value))
    }} type="text" className='form-control w-100' placeholder='Search...' />
  </div>
  
  </>
}
