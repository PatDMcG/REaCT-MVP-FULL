//import { useState, useEffect } from 'react'
// useEffect(() => {
//     GetData(API)
//   }, [])
function DeleteSub({id}) {
    
    async function delet () 
    {
        let resp = fetch(`https://react-mvp-full.onrender.com/goals/sub/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "DELETE",
        })
        let result = resp.json()
        console.log(result)
    }
    return (
        <>
        <button onClick={delet}>Delete</button>
        </>
    )
}


export default DeleteSub