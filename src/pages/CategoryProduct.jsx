import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm"
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../components/ProductListView'

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([])
  const params = useParams()
  const category = params.category
  const navigate = useNavigate()

  // API base URL - uses proxy in dev, direct URL in production
  const API_URL = import.meta.env.VITE_API_URL;

  const getFilterData = async () => {
    try {
      const res = await axios.get(`${API_URL}/products/category/${category}`)
      const data = res.data
      setSearchData(data)

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getFilterData()
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='min-h-screen bg-white dark:bg-black transition-colors duration-500'>
      {
        searchData.length > 0 ? (
          <div className='max-w-6xl mx-auto pt-10 pb-10 px-4'>
            <button onClick={() => navigate('/')} className='bg-gray-800 dark:bg-zinc-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center hover:bg-gray-700 dark:hover:bg-zinc-700 transition-colors'><ChevronLeft /> Back</button>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize'>{category}</h1>
            {
              searchData.map((product, index) => {
                return <ProductListView key={index} product={product} />
              })
            }
          </div>
        ) : (
          <div className='flex items-center justify-center h-[400px]'>
            <video muted autoPlay loop>
              <source src={Loading} type='video/webm' />
            </video>
          </div>
        )
      }
    </div>
  )
}

export default CategoryProduct
