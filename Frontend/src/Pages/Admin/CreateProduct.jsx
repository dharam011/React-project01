import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { asyncCreateProduct } from '../../store/actions/userActions'

const CreateProduct = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    }=useForm()
    const createProductHandeler = (product) => {
        product.id = nanoid()
        console.log(product)
        Navigate("/products")
        reset()
        dispatch(asyncCreateProduct(product))
    }
  return (
    <div className='flex flex-col  text-center justify-center items-center gap-10'>
        <h1 className='text-2xl font-thin px-4  p-2 rounded-lg' >Create Product</h1>
        <form onSubmit={handleSubmit(createProductHandeler)} className=' text-center text-2xl p-2  font-thin flex flex-col justify-center items-center gap-3' action="">
            <input   {...register("title",{required:"title is required"},)} className={`border-b outline-0 p-2 rounded ${
          errors.title ? "border-red-500 placeholder-red-500" : "border-gray-300"
        }`} type="text" placeholder={errors.title? errors.title.message : "Enter the product name "} />
            
            <input {...register("price",{required:true})} className='border-b outline-0 p-2 mb-2' type="number" placeholder='price' />
            <textarea {...register("description")} className='border-b outline-0 p-2 mb-2 w-full' placeholder='description' />
            <input {...register("category")} className='border-b outline-0 p-2 mb-2' type="text" placeholder='category' />
            <input {...register("image",{required:true})} className='border-b outline-0 p-2 mb-2' type="url" placeholder='image url' />
            <button className='bg-blue-400 text-xl px-4 py-2 rounded-lg' type='submit'>Save product</button>
        </form>

    </div>
  )
}

export default CreateProduct