import { useState, useEffect } from 'react'
import SubR from "./SubR"



function SUBLIST({master}) {

  const [subList, setSubList] = useState([{Title: "test_1",Complete: true,Parent: 1},{Title: "test_2",Complete: false,Parent: 1},{Title: "test_3",Complete: false,Parent: 2}]) //{Title: "test_1",Complete: true,Parent: 1},{Title: "test_2",Complete: false,Parent: 1},{Title: "test_3",Complete: false,Parent: 2}

  async function GetData2 (input)
  {
    console.log(input)
    let resp = await fetch(input)
    let data = await resp.json()
    console.log(data)
    setSubList(data)
    console.log(subList)
  }
  let API ="https://react-mvp-full.onrender.com/goals/sub"
  const BASE ="https://react-mvp-full.onrender.com/goals"
  useEffect(() => {
    GetData2(API)
  }, [])

  // useEffect(() => {
  //   setSubList([{title: "test_1",complete: true,parent: 1},{title: "test_2",complete: false,parent: 1},{title: "test_3",complete: false,parent: 2}])
  // }, [])
  //<Progress subList={subList}/>
  
    if(subList)
    {
    return (

      
        <>
        
        {subList.map((sub) => (
         
          <div className="SUBLIST">
            <SubR sub={sub} master={master} key={sub.id}/>
            </div>
        ) 
        )}
            </>
      )

    }
    else
{
return (<h1>SUB FAILURE</h1>)
}
}
    
    export default SUBLIST