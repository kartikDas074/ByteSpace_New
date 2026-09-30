'use server'
export const getApi=async(url)=>{
    const data=await fetch(`http://localhost:3000${url}`);
    if(!data.ok){
        throw new Error ('Failed To fetch data. Something went wrong. ')
    }
    return data.json();
}