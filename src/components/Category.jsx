import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate()
  const { data } = getData()

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property]
    })
    newVal = [...new Set(newVal)]
    return newVal
  }

  const categoryOnlyData = getUniqueCategory(data, "category")

  return (
    <div className='bg-gray-50 dark:bg-black transition-colors duration-300 border-b border-gray-100 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto flex flex-wrap gap-6 items-center justify-center md:justify-around py-8 px-4'>
        {
          categoryOnlyData?.map((item, index) => {
            return (
              <div key={index} className="group">
                <button
                  onClick={() => navigate(`/category/${item}`)}
                  className='uppercase font-bold tracking-widest text-xs bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 hover:text-red-500 dark:hover:text-red-500 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-md cursor-pointer'
                >
                  {item}
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Category
