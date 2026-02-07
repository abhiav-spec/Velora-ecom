import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductListView = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className='space-y-4 mt-2 rounded-md'>
      <div className='bg-gray-100 dark:bg-zinc-900 flex gap-7 items-center p-4 rounded-xl border border-transparent dark:border-zinc-800 transition-colors duration-300'>
        <img
          src={product.image}
          alt={product.title}
          className='md:h-60 md:w-60 h-25 w-25 rounded-md cursor-pointer bg-white p-2 object-contain'
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className='space-y-2'>
          <h1 className='font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-[220px] text-gray-900 dark:text-white transition-colors cursor-pointer' onClick={() => navigate(`/products/${product.id}`)}>{product.title}</h1>
          <p className='font-semibold flex items-center md:text-lg text-sm text-gray-800 dark:text-gray-200'>$<span className='md:text-4xl text-3xl text-red-500'>{product.price}</span> <span className='ml-2 text-green-600 dark:text-green-400'>({product.discount}% off)</span></p>
          <p className='text-sm text-gray-600 dark:text-gray-400'>FREE delivery <span className='font-semibold text-gray-800 dark:text-gray-200'>Fri, 18 Apr</span> <br />
            Or fastest delivery <span className='font-semibold text-gray-800 dark:text-gray-200'>Tomorrow, 17 Apr</span></p>
          <button onClick={() => addToCart(product)} className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductListView
