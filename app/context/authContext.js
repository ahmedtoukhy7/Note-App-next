'use client'
import { getCookie, setCookie } from "cookies-next";
import toast from "react-hot-toast";
import axios from 'axios'
import { useRouter } from "next/navigation";
import { createContext , useState , useEffect } from 'react';

export const AuthContext = createContext()

export function AuthContextProvider({children}){

    let [token,setToken]=useState(null)

    useEffect(()=>{

        // if(localStorage.getItem('noteToken')!=null){
        //     setToken(localStorage.getItem('noteToken'))
        // }
      

            if(getCookie('noteToken')!=null){
                setToken(getCookie('noteToken'))
            }
    })

    const router = useRouter();
    let [loading,setloading]=useState(false)
    let [handleError,sethandleError]=useState('')

    async function handleRegister (values){

        setloading(true)

       try {

        let {data}= await axios.post('https://note-sigma-black.vercel.app/api/v1/users/signUp',values)

        
        console.log(data)

        if (data.msg== 'done'){
            toast.success('your register is successfully')
            router.push("/Login");
            setloading(false)
        }
        

        return data
        
       } catch (error) {
        console.log(error)
        toast.error('your register is fail')
        setloading(false)
        sethandleError(data.response.data.msg)
       }

    }
    async function handleLogin (values){

        setloading(true)

       try {

        let {data}= await axios.post('https://note-sigma-black.vercel.app/api/v1/users/signIn',values)

        
        console.log(data)

        if (data.msg== 'done'){
            toast.success('your Login is successfully')
            router.push("/");
            setloading(false)
            // localStorage.setItem('noteToken',data.token)
            setCookie("noteToken", data.token);
        }
        

        return data
        
       } catch (error) {
        console.log(error.response.data.msg)
        toast.error('your Login is fail')
        setloading(false)
        sethandleError(error.response.data.msg)
       }

    }



    return <>

    <AuthContext.Provider value={{handleRegister , loading, setloading , handleLogin , token,setToken , handleError}}>
        {children}
    </AuthContext.Provider>
    
    
    </>
}