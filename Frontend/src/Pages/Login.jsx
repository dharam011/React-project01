import React from 'react'
import {useForm} from "react-hook-form"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { asyncLoginUser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'


const Login = () => {
  const navigate = useNavigate()
   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
const dispatch = useDispatch()
  const  loginHandeler = (data) => {
    console.log(data)
    dispatch(asyncLoginUser(data))
    navigate("/products")
  }
  return (
    <div className='mt-20 items-center font-thin justify-center flex flex-col gap-10'> <h1
    className='text-3xl flex justify-center align-center'>
      Welcome back! 😊<br /> login to your Account
    </h1>
      <form className='flex flex-col text-2xl  justify-center gap-8 ' onSubmit={handleSubmit(loginHandeler)} action="">
        <input className=' p-2 outline-0 border-b ' type="text" placeholder='Enter username' {...register("username",{required:true})} />
        <input className=' p-2 outline-0 border-b ' type="password" placeholder='enter your password' {...register("password",{required:true})}/>
       
        <button className='bg-blue-400 p-4 rounded text-white font-thin' type='submit'>Login</button>
      </form>
      <p>Don't have an account ? <Link className='text-blue-400' to="/register">Register</Link></p>
    </div>
  )
}

export default Login