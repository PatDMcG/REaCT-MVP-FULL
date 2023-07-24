import { useState, useEffect } from 'react'
// useEffect(() => {
//     GetData(API)
//   }, [])
function UpdateMain({id, title}) {
    
    const [data, setData] = useState(title)
    const handleChange = (event) => {
        setData(event.target.value);
      };

      const handleSubmit = async (event) => {
        event.target.preventDefault()
        let resp = await fetch(`https://react-mvp-full.onrender.com/goals/main/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({title: data, id: id})
        })
        let result = await resp.json()
        
        setData(title)
        console.log(result)
      };

    return (
        <>
        <form onSubmit={handleSubmit}>Title
            <input
          type="text" value={data} onChange={handleChange} />
          <button className="button" type="submit">
          Update
        </button>
        </form>
        </>
    )
}


export default UpdateMain