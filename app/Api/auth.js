// import toast from "react-hot-toast";


// export async function RegisterF(values){
//     try {

//         let api= await fetch(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,values ,{
//             method:'post'
//         })

//         let respone = await api.json()
//         console.log(respone)
      

//         if (respone.msg== 'done'){
//             toast.success('your register is successfully')
//             return respone
//         }
//     } catch (error) {
//                 console.log(error)
//                 toast.error('your register is fail')
//                }
// }