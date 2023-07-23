import { useState, useEffect } from 'react'
import Title from './Title.jsx'
import SUBLIST from './SUBLIST.jsx'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DeleteMain from './DeleteMain.jsx'
import UpdateMain from './UpdateMain.jsx'
import NewSub from './NewSub.jsx'

function App() {
  // const [count, setCount] = useState(0)
  //const [API, setAPI] = useState("")
  const [masterList, setMasterList] = useState([{Title: "Test",id: 1},{Title: "Test2",id: 2}])
  const [subList, setSubList] = useState([{Title: "test_1",Complete: true,Parent: 1},{Title: "test_2",Complete: false,Parent: 1},{Title: "test_3",Complete: false,Parent: 2}])
  const [returned, setReturned] = useState([])
 async function GetData (input)
  {
    console.log(input)
    let resp = await fetch(`${input}`)
    let data = await resp.json()
    setReturned(data)
    console.log(data)
    console.log(returned)
      
  }
  var API ="https://react-mvp-full.onrender.com/goals/main"

  useEffect(() => {
    GetData(API)
  }, [])
  
  useEffect(() => {
    console.log("Current returned", returned);
  }, [returned]);

  return (
  
    <>
        <Title/>
        {masterList.map((master) => {
          return (
            <>
            <div className='MAIN'>
          <h1>{master.Title}</h1>
          <div>
          <DeleteMain/>
          <UpdateMain/>
          </div>
          
          </div>
          <SUBLIST subList={subList} master={master.id}/>
          <NewSub/>
          </> )
        })}
        </>
  )
}

export default App
