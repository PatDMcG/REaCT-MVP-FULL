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
        let resp = fetch(`https://react-mvp-full.onrender.com/goals/main/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({title: data, id: id})
        })
        let result = resp.json()
        console.log(result)
        setData(title)
      };

    return (
        <>
        <form onSubmit={handleSubmit}>Title
            <input
          type="text" value={data} onChange={handleChange} />
          <button type="submit">
          Update
        </button>
        </form>
        </>
    )
}


export default UpdateMain