function Completed({id,master, subTitle}) {
    
    async function complete () 
    {
        try {
          
        let resp = await fetch(`https://react-mvp-full.onrender.com/goals/sub/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({parent: master, complete: true , title: `${subTitle}`})
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