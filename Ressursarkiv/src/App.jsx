import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import PageTitle from './components/PageTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Layout>
        <Routes>
          <Route path='/' element={<Nav />}/>
          <Route path='TageTitle' element={<PageTitle />}/>
          


          

        </Routes>

     </Layout>
    </>
  )
}

export default App
