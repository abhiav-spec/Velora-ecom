import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm"
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';

const SingleProduct = () => {
    const params = useParams()
    const [SingleProduct, setSingleProduct] = useState("")
    const { addToCart } = useCart()

    const [quantity, setQuantity] = useState(1);

    // API base URL - uses proxy in dev, direct URL in production
    const API_URL = import.meta.env.VITE_API_URL;

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`${API_URL}/products/${params.id}`)
            const product = res.data;
            setSingleProduct(product)
            console.log(product);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    const OriginalPrice = Math.round(SingleProduct.price + (SingleProduct.price * SingleProduct.discount / 100))

    return (
        <>
            {
                SingleProduct ? <div className='px-4 pb-12 md:px-0 bg-white dark:bg-black transition-colors duration-500'>
                    <Breadcrums title={SingleProduct.title} />
                    <div className='max-w-7xl mx-auto md:p-8 grid grid-cols-1 md:grid-cols-2 gap-16'>
                        {/* product image */}
                        <div className='w-full relative group'>
                            <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full -z-10 animate-pulse"></div>
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
                                <img src={SingleProduct.image}
                                    alt={SingleProduct.title}
                                    className='w-full aspect-square object-contain group-hover:scale-105 transition-transform duration-700' />
                            </div>
                        </div>
                        {/* product details */}
                        <div className='flex flex-col gap-8'>
                            <div className="space-y-4">
                                <div className='flex gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500'>
                                    <span>{SingleProduct.brand}</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">{SingleProduct.category}</span>
                                </div>
                                <h1 className='md:text-5xl text-3xl font-black text-gray-900 dark:text-white leading-tight'>{SingleProduct.title}</h1>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
                                    <span className="text-gray-400 text-sm ml-2">(128 customer reviews)</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className='flex items-baseline gap-4'>
                                    <span className='text-4xl text-red-600 font-black'>${SingleProduct.price}</span>
                                    <span className='line-through text-xl text-gray-400'>${OriginalPrice}</span>
                                    <span className='bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider'>Save {SingleProduct.discount}%</span>
                                </div>
                            </div>

                            <p className='text-gray-600 dark:text-gray-400 leading-relaxed text-lg'>{SingleProduct.description}</p>

                            <div className="h-[1px] bg-gray-100 dark:bg-gray-800 w-full my-4"></div>

                            <div className='flex flex-col sm:flex-row items-center gap-6'>
                                <div className='flex items-center border-2 border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900'>
                                    <button
                                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                        className="px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-white font-bold transition-colors"
                                    >-</button>
                                    <input
                                        type="number"
                                        min={1}
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        className='w-16 text-center font-bold bg-transparent border-none focus:outline-none dark:text-white'
                                    />
                                    <button
                                        onClick={() => setQuantity(prev => prev + 1)}
                                        className="px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-white font-bold transition-colors"
                                    >+</button>
                                </div>

                                <button
                                    onClick={() => addToCart(SingleProduct, quantity)}
                                    className='flex-grow px-10 py-5 text-lg font-black bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl flex gap-3 items-center justify-center hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-all duration-300 shadow-xl shadow-gray-200 dark:shadow-none transform hover:-translate-y-1'
                                >
                                    <IoCartOutline className='w-6 h-6' /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div> :
                    <div className='flex items-center justify-center h-screen'>
                        <video muted autoPlay loop>
                            <source src={Loading} type='video/webm' />
                        </video>
                    </div>
            }
        </>
    )
}

export default SingleProduct
