import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className='group border relative border-gray-100 dark:border-gray-800 rounded-3xl cursor-pointer hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] transition-all duration-500 p-4 h-full bg-white dark:bg-black flex flex-col justify-between overflow-hidden'>
      <div className='overflow-hidden rounded-2xl mb-4 bg-gray-50 dark:bg-gray-800 relative'>
        <img
          src={product.image}
          alt={product.title}
          className='aspect-square object-contain p-4 group-hover:scale-110 transition-transform duration-500 w-full hover:bg-white dark:hover:bg-gray-700'
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className='absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider'>
          New
        </div>
      </div>

      <div className='flex-grow'>
        <h1 className='line-clamp-2 text-sm font-bold text-gray-800 dark:text-white mb-2 group-hover:text-red-500 transition-colors duration-300' onClick={() => navigate(`/products/${product.id}`)}>
          {product.title}
        </h1>
        <div className='flex items-center justify-between mt-auto mb-4'>
          <p className='text-xl text-gray-900 dark:text-gray-100 font-extrabold'>${product.price.toFixed(2)}</p>
          <div className='flex text-yellow-400 text-xs'>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => addToCart(product)}
        className='relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-purple-600 hover:to-purple-700 px-4 py-3 text-sm rounded-xl text-white w-full cursor-pointer flex gap-2 items-center justify-center font-bold shadow-lg shadow-red-500/20 hover:shadow-purple-500/30 transition-all duration-300 transform active:scale-95 active:shadow-inner'
      >
        <IoCartOutline className='w-5 h-5' />
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
