import { useState, useEffect } from 'react'
import SUBLIST from './SUBLIST.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [API, setAPI] = useState("")
  const [masterList, setMasterList] = useState([{Title: "Test",id: 1},{Title: "Test2",id: 2}])
  const [subList, setSubList] = useState([{Title: "test_1",Complete: true,Parent: 1},{Title: "test_2",Complete: false,Parent: 1}])
  const [returned, setReturned] = useState([])
  const GetData=async ()=>
  {
    let resp = await fetch("https://react-mvp-uugv.onrender.com/goals/main")
    let data = await resp.json()
     setReturned(data)
      console.log(returned)
  }
  useEffect(() => {
    GetData()
  }, [])
  return (
    <>
        
        {masterList.map((master) => {
          return (
            <>
          <h1>{master.Title}</h1>
          <SUBLIST subList={subList} master={master.id}/>
          </> )
        })}
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
