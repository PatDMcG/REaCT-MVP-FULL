function Completed({id}) {
    
    async function complete ({master, sub}) 
    {
        try {
          
        let resp = await fetch(`https://react-mvp-full.onrender.com/goals/sub/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({parent: master, complete: true , title: sub.title})
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
        <button onClick={complete} className="button">Complete</button>
        </>
    )
}


export default Completed