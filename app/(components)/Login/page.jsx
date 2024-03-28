'use client'

import React , { useContext , useState } from 'react'
import Image from 'next/image'
import './login.scss'
import pic from '../../../public/assets/login.jpg'
import iconLogin from '../../../public/assets/download.jpg'
import { useFormik } from 'formik'
import * as yup from 'yup'
 import { AuthContext } from '@/app/context/authContext'
 import { FidgetSpinner } from 'react-loader-spinner'
import Link from 'next/link'

export default function Login() {
    
    let [showPassword,setshowPassword]=useState(false)

   


     let {handleLogin , loading , handleError }=useContext(AuthContext)

   async function LoginFunc(values){

    const response= await handleLogin(values)
  
   
   
    }

    let validationSchema= yup.object({
      
         email:yup.string().email('email is invalid').required('email is required'),
       
        password:yup.string().required('password is required').max(15,'max length is 15').min(3,'min length is 3'),
      
    })

    const formik = useFormik({
        initialValues:{
          
            email:'',
            password:'',
           
        },
        onSubmit:LoginFunc,
         validationSchema,
    })

    console.log(handleError)
  return <>
             {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Login Page</title>
                
            </Helmet> */}

  <section className='login'>

    <div className='container'>
        <div className='row g-0'>
            <div className='col-sm-6 '>
                <div className='image'>
                    <Image className='login-pic h-100' src={pic} alt='login' width={500} height={800}/>
                </div>
            </div>
            <div className='col-sm-6 '>
                <div className='content-login h-100'>
                <Image className='login-pic mx-auto' src={iconLogin} alt='login' width={100} height={100}/>
                    <h2 className='pt-5 text-center fs-1 fw-bold'>Login Now</h2>
                    <p className='pt-2 text-center fs-3 fw-meduim'n>Welcome To Note App</p>
                    <span className='text-center'>if you new member , 
                        <Link className='ms-2' href='/Register'>SignUp</Link>
                    </span>

                    {handleError && <p className='alert alert-danger w-50 mx-auto my-3'>{handleError}</p>  }
                    {/* {error=='' ? '' : <p className='alert alert-danger text-center w-75 mx-auto'>{error}</p>} */}
                    <form className='' action="" onSubmit={formik.handleSubmit}>

                      
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

                       


                        <button type='submit' className='btn btnlog fw-bold  mt-4 d-block btn-warning'>
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
