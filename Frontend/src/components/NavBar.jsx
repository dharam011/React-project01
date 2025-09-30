import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg text-xl font-thin  navbar-light bg-light flex justify-center align-center p-10 gap-10">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/products" >Products</NavLink>
        <NavLink to="/cart" >Cart</NavLink>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/" >Home</NavLink>
        <NavLink className={"{ bg-white px-2 py-1 rounded text-black  }" } to="/login" >Login</NavLink>
        <NavLink className={"{ bg-blue-400 px-2 py-1 rounded text-black  }" } to="/register" >Register</NavLink>
        </nav>
    </div>
  )
}

export default NavBar