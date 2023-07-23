import { useState, useEffect } from 'react'
import Title from './Title.jsx'
import SUBLIST from './SUBLIST.jsx'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  //const [API, setAPI] = useState("")
  const [masterList, setMasterList] = useState([{Title: "Test",id: 1},{Title: "Test2",id: 2}])
  const [subList, setSubList] = useState([{Title: "test_1",Complete: true,Parent: 1},{Title: "test_2",Complete: false,Parent: 1},{Title: "test_3",Complete: false,Parent: 2}])
  const [returned, setReturned] = useState([])
  const GetData=async (input)=>
  {
    let resp = await fetch(`${input}`)
    let data = await resp.json()
    setReturned(data)
      console.log(returned)
      
  }
  

  useEffect(() => {
    var API ="https://react-mvp-full.onrender.com/goals/main"
    GetData(API)
  }, [])
  
  return (
  
    <>
        <Title/>
        {masterList.map((master) => {
          return (
            <>
            <div className='MAIN'>
          <h1>{master.Title}</h1>
          <button>CRUD</button>
          </div>
          <SUBLIST subList={subList} master={master.id}/>
          </> )
        })}
        </>
  )
}

export default App
