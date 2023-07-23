import { useState, useEffect } from 'react'
import Title from './Title.jsx'
import SUBLIST from './SUBLIST.jsx'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DeleteMain from './DeleteMain.jsx'
import UpdateMain from './UpdateMain.jsx'
import NewSub from './NewSub.jsx'
import Progress from './Progress.jsx'

function App() {
  var returned = []
  // const [count, setCount] = useState(0)
  //const [API, setAPI] = useState("")
  const [masterList, setMasterList] = useState([{Title: "Test",id: 1}]) //[{Title: "Test",id: 1},{Title: "Test2",id: 2}]
  //const [subList, setSubList] = useState([{Title: "test_1",Complete: true,Parent: 1},{Title: "test_2",Complete: false,Parent: 1},{Title: "test_3",Complete: false,Parent: 2}])
 // const [returned, setReturned] = useState([])
 async function GetData (input)
  {
    console.log(input)
    let resp = await fetch(input)
    let data = await resp.json()
    console.log(data)
    setMasterList(data)
  }
  let API ="https://react-mvp-full.onrender.com/goals/main"
  const BASE ="https://react-mvp-full.onrender.com/goals"
  useEffect(() => {
    GetData(API)
    
  }, [])
  
  return (
  
    <>
        <Title/>
        {masterList.map((master) => {
          return (
            <>
            <Progress/>
            <div className='MAIN'>
          <h1>{master.Title}</h1>
          <div>
          <DeleteMain/>
          <UpdateMain/>
          </div>
          
          </div>
          <SUBLIST master={master.id}/>
          <NewSub/>
          </> )
        })}
        </>
  )
}

export default App
