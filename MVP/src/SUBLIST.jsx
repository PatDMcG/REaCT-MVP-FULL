import SubR from "./SubR"
import { useState, useEffect } from 'react'
const [subList, setSubList] = useState([]) //{Title: "test_1",Complete: true,Parent: 1},{Title: "test_2",Complete: false,Parent: 1},{Title: "test_3",Complete: false,Parent: 2}



function SUBLIST({master}) {
  async function GetData (input)
  {
    console.log(input)
    let resp = await fetch(`${input}`)
    let data = await resp.json()
    setSubList(data)
      
  }
  let API ="https://react-mvp-full.onrender.com/goals/sub"
  const BASE ="https://react-mvp-full.onrender.com/goals"
  useEffect(() => {
    GetData(API)
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