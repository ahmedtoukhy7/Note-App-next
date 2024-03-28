'use client'
import { deleteCookie } from "cookies-next";

import { AuthContext } from '@/app/context/authContext'
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function Links() {

    let {token,setToken}=useContext(AuthContext)
    const router = useRouter()
  

    function logOut(){
      // localStorage.removeItem('noteToken')
      deleteCookie("noteToken")
      setToken(null)
      router.push('/Login')

    }
  return <>

<section className ='d-flex gap-4 w-100'>
    {token ? <button onClick={logOut} className='btn mx-auto btn-outline-warning'>LogOut</button>
:
<>

<Link href='/Register'>
<button className='btn reg w-100 btn-outline-warning'>Sign Up</button>
</Link>
<Link href='/Login'>
<button className='btn log w-100 btn-outline-warning'>Sign In</button>
</Link>





</>
}

</section>
  
  
  </>
}
