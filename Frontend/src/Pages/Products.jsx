import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
  const products = useSelector((state) => state.product.products)
  console.log(products);
  const renderProduct = products.map(products=>{
    return(
      <div className='p-4 '>
        <div className='border-b-2 w-76 border-gray-700 border-2 p-4 flex gap-2 flex-col ' key={products.id}>
            <img className='w-40 h-40 object-contain' src={products.image} alt={products.title} />
            <h1 className='text-sm'>{products.title}</h1>
            <p className='text-[.7rem]'>{products.description.slice(0,100)}...</p>
            <p className='text-xl text-yellow-600'>{products.price}</p>
            <div className='flex justify-between'>
              <button className='bg-orange-400  font-thin text-sm px-4 py-2 rounded-lg'>Add to Cart</button>
            <button className='bg-green-400 font-thin text-sm  px-4 py-2 rounded-lg'>Buy Now</button></div>
            
            <button className='text-blue-400 font-thin text-sm  px-4 py-2 rounded-lg'>know more </button>
        </div>
        </div>
    )
  })
  
  return (
     products.length>0 ?  <div className='flex flex-wrap justify-center items-center '>{renderProduct}</div> : <div>No products found</div>
  )
}

export default Products