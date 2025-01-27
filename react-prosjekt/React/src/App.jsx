import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("Aram")

  const name = <h1>Aram Thalje</h1>
  return (
    <>
      {count}
    </>
  )
}

export default App
