import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'

function App() {
  const [signedIn, setSignedIn] = useState(false)

  const [storageUser, setStorageUser] = useState(localStorage.getItem("user"))

  useEffect (() => {
    const login =  sessionStorage.getItem("login")
    setSignedIn(login)
    console.log("sessioStorage", Boolean(login));
}, [signedIn])

  return (
    <Layout signedIn={signedIn} setSignedIn={setSignedIn}>
      <Routes>
        <Route path='/' element={signedIn ? <Welcome /> : <Login 
                                                          storageUser={storageUser}
                                                          setSignedIn={setSignedIn}
                                                          signedIn={signedIn}/>}/>
        <Route path='login' element={<Login  storageUser={storageUser} setSignedIn={setSignedIn} signedIn={signedIn}/>}/>
        <Route path='signup' element={<Signup storageUser={storageUser} />}/>
      </Routes>
    </Layout>
  )
}

export default App
