import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./(components)/Navbar/Navbar";
import AddNote from "./(components)/AddNote/AddNote";
import ShowNotes from "./(components)/ShowNotes/ShowNotes";
import { useFormik } from "formik";


export default function Home() {

  


  return <>
        

<AddNote/>
<ShowNotes/>
  
 
   
  </>
}
