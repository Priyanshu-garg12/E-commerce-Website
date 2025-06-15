import { useState } from 'react'
import './App.css'
import Cart from './Pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import Cussupport from './Pages/Cussupport'
import Products from './Pages/products'
import Allproducts from './Pages/allproducts'
import Notfound from './Pages/Notfound'
import Trackorder from './Pages/Trackorder'
import Login from './Pages/Login'
import Register from './Pages/Register'
import VerifyEmail from './Pages/VerifyEmail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='trackorder' element={<Trackorder />}></Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/cussupport' element={<Cussupport />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/allproducts' element={<Allproducts />}></Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/verify-email/:token' element={<VerifyEmail/>} />
          <Route path='/*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
