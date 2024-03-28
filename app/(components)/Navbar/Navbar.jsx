import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Links from './Links/Links'
import Link from 'next/link'
import logo from '../../../public/assets/student-notes-512.webp'
import Image from 'next/image'

export default function Navbar() {

  return <>

<nav className='bg-warning-subtle p-1 fixed-top '>
    <div className='container'>
        <div className='row g-5 align-items-center  '>
            <div className='col-sm-4 '>
                <Link href='/'>
                <Image className='logo' alt='logo' src={logo} width={65} height={65}/>
                </Link>
            </div>
            <div className='col-sm-4 '>
                <Searchbar/>
                
            </div>

            <div className='col-sm-4 '>
            <Links/>
            </div>
           
        </div>
    </div>


  </nav>
  
  
  </>
}
