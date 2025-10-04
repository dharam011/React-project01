import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const user = useSelector((state) => state.user.user)
  console.log(user);

  return (

    <div className='bg-white text-zinc-800 p-5 ' >
      <nav className="navbar navbar-expand-lg text-xl font-md  navbar-light bg-light flex justify-center align-center  gap-10 ">
        <NavLink className='hover:text-orange-500 ' to="/" >Home</NavLink>
        <NavLink className='hover:text-orange-500 ' to="/products" >Products</NavLink>
        <NavLink className='hover:text-orange-500 ' to="/cart" >Cart</NavLink>

        {user ? <> <NavLink className='hover:text-orange-500 ' to="/admin/create-product" >create Product</NavLink></> : <>
          <NavLink className={"{ bg-white px-2 py-1 rounded text-black  }"} to="/login" >Login</NavLink>
          <NavLink className={"{ bg-blue-400 px-2 py-1 rounded text-black  }"} to="/register" >Register</NavLink></>}


      </nav>
    </div>
  )
}

export default NavBar