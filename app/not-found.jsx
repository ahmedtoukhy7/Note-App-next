import React from 'react'
import Image from 'next/image'
import notfound from '../public/assets/404-page-not-found-illustration-2048x998-yjzeuy4v.png'

export default function Notfound() {
  return <>
 <div className='w-100  m-4 d-flex justify-content-center   '>
    <Image src={notfound} alt='notfound' width={800}/>
 </div>
  </>
}
