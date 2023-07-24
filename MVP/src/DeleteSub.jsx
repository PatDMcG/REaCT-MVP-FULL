//import { useState, useEffect } from 'react'
// useEffect(() => {
//     GetData(API)
//   }, [])
function DeleteSub({id}) {
    
    async function delet () 
    {
        try {
          
        let resp = await fetch(`https://react-mvp-full.onrender.com/goals/sub/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "DELETE",
        })
        let result = await resp.json()
        console.log(result)
    }
        catch (error) {
            console.log(error)
              
          }
    
}
    return (
        <>
        <button onClick={delet} className="button">Delete</button>
        </>
    )
}


export default DeleteSub