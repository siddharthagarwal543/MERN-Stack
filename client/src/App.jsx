import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Service from './pages/Service'
import Navbar from './components/Navbar'
import Error from './pages/Error'

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}


