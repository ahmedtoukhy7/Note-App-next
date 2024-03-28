'use client'

import { useEffect } from "react"



export default function Bundle() {

    useEffect(()=>{
        require ('bootstrap/dist/js/bootstrap.bundle')
    },[])
 return null
}