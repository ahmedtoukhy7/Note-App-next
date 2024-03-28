'use client'
import React, { useEffect } from 'react'
import './AddNote.scss'
import { useFormik } from 'formik'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '@/app/Redux/hooks';
import { AddNotes, hello } from '@/app/Redux/AddNoteSlice';
import toast from 'react-hot-toast';
import * as yup from 'yup'
import { showNotes } from '@/app/Redux/showNotesSlice';
export default function AddNote() {

  const dispatch=useAppDispatch()

  let {notesList}=useAppSelector((state)=>state.shownote)

  useEffect(()=>{
    dispatch(showNotes())

  },[])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let validationSchema= yup.object({
       
      title:yup.string().required('title is required'),
   
     content:yup.string().required('contant is required')
  
  })

    const formik=useFormik({
        initialValues:{
            title:'',
            content:''
        },
        onSubmit:AddNote,
        validationSchema,
    })

    async function AddNote(values){
        console.log(values)
       let response=await dispatch(AddNotes(values))
       console.log(response)
       if(response.msg=='done'){

        dispatch(showNotes())

         
           toast.success('Note Added Successfully')
          

        

        
       }
    }

   
    
    
  return <>

  <section className='addnote   w-100  my-5 pt-5'>
    <div className='container '>
    <div className='d-flex gap-3   align-items-center'>
        <div className='line '></div>
       <div className='button-cont'>
       <button onClick={handleShow} className='btn btn-warning '>Add Note</button>
       
       </div>
       
    </div>
    </div>
  </section>



  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  >
            <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
             name='title' placeholder='Enter Title'  type="text" className='form-control w-100' />
             {formik.errors.title && formik.touched.title ? <p>{formik.errors.title}</p>:''}
            <textarea 
             onChange={formik.handleChange}
            onBlur={formik.handleBlur} placeholder='Enter Message' className='form-control w-100 mt-3' name="content" id=""></textarea>
            {formik.errors.content && formik.touched.content ? <p>{formik.errors.content}</p>:''}
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>{
            formik.handleSubmit()
          
            handleClose()
          }} variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



{/* Modal  */}

  
 
  
  
  </>
}
