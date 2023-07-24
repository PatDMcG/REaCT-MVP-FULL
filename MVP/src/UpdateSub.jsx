import { useState, useEffect } from 'react'
// useEffect(() => {
//     GetData(API)
//   }, [])
function UpdateSub({id, master, subTitle, complete}) {
    
    const [data, setData] = useState({parent: master, complete: complete , title: subTitle})
    const handleChange = (event) => {
        setData(event.target.value);
      };

      const handleSubmit = async (event) => {
        try {
          
        event.preventDefault()
        setData({parent: master, complete: complete , title: subTitle})
        let resp = await fetch(`https://react-mvp-full.onrender.com/goals/sub/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({title: `${data.title}`, complete: data.complete, parent: data.parent, })
        })
        let result = await resp.json()
        
        
        console.log(result)
        
      }
      catch (error) {
        console.log(error)
          
      };
    }
    return (
        <>
        <form onSubmit={handleSubmit}>Title
            <input
          type="text" value={data.title} onChange={handleChange} />
          <input
          type="text" value={data.parent} onChange={handleChange} />
          <button className="button" type="submit">
          update
        </button>
        </form>
        </>
    )
    
}


export default UpdateSub