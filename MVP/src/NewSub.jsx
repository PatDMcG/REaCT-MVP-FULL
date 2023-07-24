import { useState, useEffect } from 'react'
// useEffect(() => {
//     GetData(API)
//   }, [])
function NewSub({master}) {
    const [data, setData] = useState("test")
    const handleChange = (event) => {
        setData(event.target.value);
      };

      const handleSubmit = async (event) => {
        event.target.preventDefault()
        let resp = fetch("https://react-mvp-full.onrender.com/goals/sub",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({title: data, parent: master})
        })
        let result = resp.json()
        console.log(result)
        setData("test")
      };
    return (
        <>
        <form onSubmit={handleSubmit}>Title
            <input
          type="text" value={data} onChange={handleChange} />
          <button type="submit">
          New Goal
        </button>
        </form>
        </>
    )
}


export default NewSub