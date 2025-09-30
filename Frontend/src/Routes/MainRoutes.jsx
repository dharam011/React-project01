import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/products" element={<Products/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
            
            <Route/>
            <Route/>
            <Route/>
            <Route/>
            


            
        </Routes>
    </div>
  )
}

export default MainRoutes