import { useState, useEffect } from 'react'
// useEffect(() => {
//     GetData(API)
//   }, [])
function UpdateSub({id, master, sub}) {
    
    const [data, setData] = useState({parent: master, title: sub})
    const handleChange = (event) => {
        setData(event.target.value);
      };

      const handleSubmit = async (event) => {
        event.target.preventDefault()
        let resp = fetch(`https://react-mvp-full.onrender.com/goals/sub/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({title: data.title, parent: data.parent, id: id})
        })
        let result = resp.json()
        console.log(result)
        setData({parent: master, title: sub})
      };
    return (
        <>
        <form onSubmit={handleSubmit}>Title
            <input
          type="text" value={data.title} onChange={handleChange} />
          <input
          type="text" value={data.parent} onChange={handleChange} />
          <button type="submit">
          update
        </button>
        </form>
        </>
    )
}


export default UpdateSub