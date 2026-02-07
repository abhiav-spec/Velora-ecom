import React from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({ search, setSearch, brand, setBrand, priceRange, setPriceRange, category, setCategory, handleBrandChange, handleCategoryChange }) => {
    const { categoryOnlyData, brandOnlyData } = getData()
    return (
        <div className='bg-gray-100 dark:bg-gray-800 mt-10 p-4 rounded-md h-max hidden md:block transition-colors duration-200'>
            <input type="text"
                placeholder='Search..'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='bg-white dark:bg-gray-700 dark:text-white p-2 rounded-md border-gray-400 dark:border-gray-600 border-2 w-full'
            />

            {/* category only data */}
            <h1 className='mt-5 font-semibold text-xl dark:text-white'>Category</h1>
            <div className='flex flex-col gap-2 mt-3'>
                {
                    categoryOnlyData?.map((item, index) => {
                        return <div key={index} className='flex gap-2'>
                            <input type="checkbox" name={item} checked={category === item} value={item} onChange={handleCategoryChange} />
                            <button className='cursor-pointer uppercase dark:text-gray-300'>{item}</button>
                        </div>
                    })
                }
            </div>
            {/* brand only data */}
            <h1 className='mt-5 font-semibold text-xl mb-3 dark:text-white'>Brand</h1>
            <select name="" id=""
                className='bg-white dark:bg-gray-700 dark:text-white w-full p-2 border-gray-200 dark:border-gray-600 border-2 rounded-md '
                value={brand}
                onChange={handleBrandChange}
            >
                {
                    brandOnlyData?.map((item, index) => {
                        return <option key={index} value={item}>{item.toUpperCase()}</option>
                    })
                }
            </select>

            {/* price range  */}
            <h1 className='mt-5 font-semibold text-xl mb-3 dark:text-white'>Price Range</h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='dark:text-gray-300'>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <input type="range" min="0" max="5000" name="" id="" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className='transition-all' />
            </div>
            <button className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer'
                onClick={() => { setSearch(''); setCategory('All'); setBrand('All'); setPriceRange([0, 5000]) }}
            >Reset Filters</button>

        </div>
    )
}

export default FilterSection
