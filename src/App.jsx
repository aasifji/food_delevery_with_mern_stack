import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const[showLogin,setLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setLogin={setLogin}/>:<></>}
      <div className='App'>
        <Navbar setLogin={setLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
