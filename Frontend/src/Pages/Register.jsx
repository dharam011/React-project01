import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import{ useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import asyncgetUsers from '../store/UserActions'
import { useDispatch } from 'react-redux'

const Register = () => {

    const dispatch = useDispatch()
   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const  registerHandeler = (user) => {
   user.id = nanoid()
    console.log(user)
    reset()
    dispatch(asyncgetUsers(user))
    
  }
  return (
    <div className='mt-20 items-center font-thin justify-center flex flex-col gap-10'> <h1 className='text-3xl'>
      Register Yourself
    </h1>
      <form className='flex flex-col text-2xl  justify-center gap-8 ' onSubmit={handleSubmit(registerHandeler)} action="">
        <input className=' p-2 outline-0 border-b ' type="text" placeholder='Enter username' {...register("username",{required:true})} />
        <input className=' p-2 outline-0 border-b ' type="email" placeholder='enter your email' {...register("email",{required:true})}/>
        <input type="password" className=' p-2 outline-0 border-b ' placeholder='enter your password' {...register("password",{required:true})} />
        <button className='bg-blue-400 p-4 rounded text-white font-thin' type='submit'>Register</button>
      </form>
      <p>Already have an account ? <Link className='text-blue-400' to="/login">Login</Link></p>
    </div>
  )
}

export default Register