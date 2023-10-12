import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/About' element ={<About />} />
      <Route path='/Profile' element ={<Profile />} />
      <Route path='/Sign-in' element ={<Signin />} />
      <Route path='/Sign-up' element ={<Signup />} />

    </Routes>
      
    </BrowserRouter>
  )
}

export default App
