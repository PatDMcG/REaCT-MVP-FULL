import { useState, useEffect } from 'react'
// useEffect(() => {
//     GetData(API)
//   }, [])
function NewGoal() {

    const [data, setData] = useState("test")
    const handleChange = (event) => {
        setData(event.target.value);
      };

      const handleSubmit = async (event) => {
        try {
          
       
        event.target.preventDefault()
        let resp = await fetch("https://react-mvp-full.onrender.com/goals/main",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({title: `${data}`})
        })
        let result = await resp.json()
       
        //setData("test")
        console.log(result)
      }
       catch (error) {
        console.log(error)
          
      }
    };

      


    
    return (
        <>
        <form onSubmit={handleSubmit}>Title
            <input
          type="text" value={data} onChange={handleChange} />
          <button className="button" type="submit">
          New Goal
        </button>
        </form>
        
        </>
    )
}


export default NewGoal