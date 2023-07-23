import { useState, useEffect } from 'react'
import SubR from "./SubR"



function SUBLIST({master}) {

  const [subList, setSubList] = useState([]) //{Title: "test_1",Complete: true,Parent: 1},{Title: "test_2",Complete: false,Parent: 1},{Title: "test_3",Complete: false,Parent: 2}

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

    return (

      
        <>
        {subList.map((sub) => {
          return (
          <div className="SUBLIST">
            <SubR sub={sub} master={master} key={sub.id}/>
            </div>
          )
        })}
            </>
      )

    }
    
    export default SUBLIST