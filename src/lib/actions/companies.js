"use server"

import { serverMutation } from "../core/server"


// const baseURL=process.env.NEXT_PUBLIC_BASE_URL;

// export const createCompany=async(newCompanyData)=>{
//     const res= await fetch(`${baseURL}/api/compaines`,{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(newCompanyData),
//     });
//     return res.json();
// }

export const createCompany=async(newCompanyData)=>{
    return serverMutation ('/api/compaines',newCompanyData)
}