'use client'

import React , { useContext , useState } from 'react'
import './register.scss'
import Image from 'next/image'
import pic from '../../../public/assets/free-registration-desk-1886554-1598085.webp'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Link from 'next/link'
 import { AuthContext } from '@/app/context/authContext'
import { FidgetSpinner } from 'react-loader-spinner'



export default function Register() {

    let [showPassword,setshowPassword]=useState(false)
   

   
   

     let {handleRegister ,loading, setloading , handleError}=useContext(AuthContext)

   async function RegisterFunc(values){

   

    const response= await handleRegister(values)
  
  
   
    }

    let validationSchema= yup.object({
        name:yup.string().max(15,'max length is 15').min(3,'min length is 3').required('name is required'),
         email:yup.string().email('email is invalid').required('email is required'),
        phone:yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/,'phone is invalid '),
        password:yup.string().required('password is required').max(15,'max length is 15').min(3,'min length is 3'),
       age:yup.number().required('age is required')
    })

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            age:'',
            phone:''
        },
        onSubmit:RegisterFunc,
         validationSchema,
    })
  return <>

            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Register Page</title>
                
            </Helmet> */}

  <section className='register'>

    <div className='container'>
        <div className='row g-0'>
            <div className='col-sm-6'>
                <div className='image'>
                    <Image className='register-pic h-100' src={pic} alt='register' width={500} height={500}/>
                </div>
            </div>
            <div className='col-sm-6 '>
                <div className='content-register h-100 px-4'>
                    <h2 className='pt-5 text-center  fs-1 fw-bold mb-4'>Regsiter Now</h2>
                    <p className=' fs-3 text-center fw-medium '>Welcome To Note App , Please Register Now</p>
                    <span className='text-center'>Already have an account? 
                        <Link className='ms-2' href='/Login'>SignIn</Link>
                    </span>
                    {handleError && <p className='alert alert-danger w-50 mx-auto my-3'>{handleError}</p>  }
                    <form className='' action="" onSubmit={formik.handleSubmit}>

                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='name' className=' my-4 ' placeholder='Enter Your Name' />

                        {formik.errors.name && formik.touched.name ? <p className='alert alert-danger'>{formik.errors.name}</p> : ''}

                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='email' className=' mb-4' placeholder='Enter Your Email' />

                        {formik.errors.email && formik.touched.email ? <p className='alert alert-danger'>{formik.errors.email}</p> : ''}

                       <div className='position-relative' >
                       <input onChange={formik.handleChange} onBlur={formik.handleBlur} type={showPassword ? 'text' : 'password'} name='password' className=' mb-4 ' placeholder='Enter Your Password' />
                       <button className='eyeIcon position-absolute btn' >

                            {showPassword ? <i onClick={()=>{
                            setshowPassword(false)
                        }} className="fa-solid fa-eye-slash text-dark"></i> :  <i  className=" fa-solid fa-eye  text-dark   " onClick={()=>{
                            setshowPassword(true)
                        }}></i> }
                      

                       
                       </button>
                    
                       </div>
                        {formik.errors.password && formik.touched.password ? <p className='alert alert-danger'>{formik.errors.password}</p> : ''}

                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="number" name='age' className=' mb-4 ' placeholder='Enter Your Age' />

                        {formik.errors.age && formik.touched.age ? <p className='alert alert-danger'>{formik.errors.age}</p> : ''}

                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" name='phone' className=' mb-4 ' placeholder='Enter Your Phone' />

                        {formik.errors.phone && formik.touched.phone ? <p className='alert alert-danger'>{formik.errors.phone}</p> : ''}


                        <button type='submit' className='btn w-100 fw-bold m-auto mt-4 d-block btn-warning'>
                            {loading ? <FidgetSpinner
  visible={true}
  height="20"
  width="80"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  wrapperClass="fidget-spinner-wrapper"
  /> : 'Submit'}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>




  </section>
  
  
  </>
}
