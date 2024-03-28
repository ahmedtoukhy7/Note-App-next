import React, { useEffect, useState } from 'react'
import './OneNote.scss'
import { useAppDispatch , useAppSelector} from '@/app/Redux/hooks'
import { deleteNoteFunc } from '@/app/Redux/deleteNoteSlice'
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { updateNotesFunc } from '@/app/Redux/updateNoteSlice'
import { showNotes } from '@/app/Redux/showNotesSlice';
import axios from 'axios'

export default function OneNote({note}) {

 
 
  let dispatch=useAppDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // let {notesList,loading}=useAppSelector((state)=>state.shownote)

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });


  let validationSchema= yup.object({
       
    title:yup.string().required('title is required'),
 
   content:yup.string().required('contant is required')

})

// useEffect(()=>{
    
//   dispatch(showNotes())
  
  

// },[notesList])


  let formik = useFormik({
    initialValues:{
      title:note.title,
      content:note.content,
    },
    validationSchema,
    onSubmit:updateNotes,

  })
    let {_id} = note
  // console.log(_id)

  async function updateNotes(values){
    // console.log(values)
    // console.log(_id)
    

    // let response = await dispatch(updateNotesFunc(_id,values))
    // console.log(response)
    // if(response.msg=='done'){

    //   dispatch(showNotes())

       
    //      toast.success('Note Added Successfully')
    //     }

    let {data}= await axios.put(`https://note-sigma-black.vercel.app/api/v1/notes/${_id}`,values,{
      headers:{
          token: `3b8ny__${localStorage.getItem('noteToken')}`
      }
  }
  )
  console.log(data)
  }
  return <>


    {/* Modal */}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form  >
            <input
            defaultValue={note.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
             name='title' placeholder='Enter Title'  type="text" className='form-control w-100' />
              {formik.errors.title && formik.touched.title ? <p>{formik.errors.title}</p>:''}
            <textarea 
            defaultValue={note.content}
             onChange={formik.handleChange}
            onBlur={formik.handleBlur}
             placeholder='Enter Message' className='form-control w-100 mt-3' name="content" id=""></textarea>
              {formik.errors.content && formik.touched.content ? <p>{formik.errors.content}</p>:''}

        </form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleClose()
            formik.handleSubmit()
          }}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

  <div className='col-md-3 col-sm-6'>
     <div className='itm text-center mt-4 py-4 position-relative '>
        <i className="fa-solid fa-thermometer position-absolute top-0 end-0 text-danger fs-4 pen"></i>
        <h2 className='mb-3'>{note.title}</h2>
         <p>{note.content}</p>
         <p>{note._id}</p>

     <div className='icons d-flex justify-content-around '>
         <i onClick={()=>{

swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  customClass: {
    confirmButton: ' mx-3 btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your Note has been deleted.",
      icon: "success"
    });
    dispatch(deleteNoteFunc(_id))
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
});




          
         }}  className="fa-solid fa-trash-can rmv"></i>
        <i onClick={handleShow}  className="fa-solid fa-file-pen edt"></i>
     </div>
    </div>

  </div>

  
  
  </>
}
