'use client'
import React , {useEffect, useState} from 'react'
import OneNote from '../OneNote/OneNote'
import { useAppDispatch, useAppSelector } from '@/app/Redux/hooks';
import { showNotes } from '@/app/Redux/showNotesSlice';

export default function ShowNotes() {
  let {notesList,loading}=useAppSelector((state)=>state.shownote)

  // let [newList,setNewList]=useState(notesList?.notes)



  

  let {value}=useAppSelector((state)=>state.value)

 

  let dispatch=useAppDispatch()

  useEffect(()=>{
    
    dispatch(showNotes())
    
    

  },[notesList])

 

   let newNoteList= notesList?.notes?.filter((ele)=>ele.title.toLowerCase().includes(value.toLowerCase())==true)
   
  //  notesList =[...newNoteList]

 
  
  return <>

  <section className='notes py-5'>

    <div className='container'>
      <div className='row g-5'>

         {value.length > 0 ? (
        newNoteList.length >0   ? ( newNoteList.map((note)=>(
            <OneNote key={note._id} note={note}/>
        ))): ( <div className=' bg-danger text-light text-center py-5 fs-2 rounded-5'>not notes found</div> )

      ) : notesList ? (
        notesList.notes.map((note)=>(
          <OneNote key={note._id} note={note}/>
        )
        )
      ) : ( <div className=' bg-danger text-light text-center py-5 fs-2 rounded-5'>not notes found</div> )
}

     


       

        
       
      </div>
    </div>

  </section>

 
  
  
  
  </>
}
