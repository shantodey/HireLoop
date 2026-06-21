
const baseURL=process.env.NEXT_PUBLIC_BASE_URL;

export const serverMutation=async(path,data)=>{
    const res= await fetch(`${baseURL}${path}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data),
    });
    return res.json();
}