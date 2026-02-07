import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import { getData } from '../context/DataContext'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'
import CollectionSection from '../components/CollectionSection'

const Home = () => {
  const { data, fetchAllProducts } = getData()

  useEffect(() => {
    if (!data) {
      fetchAllProducts()
    }
  }, [data, fetchAllProducts])

  // Filter products by category (case-insensitive and robust)
  const filterByCategory = (cat) => {
    return data?.filter(item =>
      item.category?.toLowerCase() === cat.toLowerCase()
    ) || []
  }

  const electronics = filterByCategory("electronics")
  const jewelery = filterByCategory("jewelery")
  const mensClothing = filterByCategory("men's clothing")
  const womensClothing = filterByCategory("women's clothing")

  return (
    <div className='overflow-x-hidden bg-white dark:bg-black min-h-screen transition-colors duration-500'>
      <Carousel />
      <Category />

      <div className="py-10">
        <CollectionSection title="Men's" products={mensClothing} category="men's clothing" />
        <CollectionSection title="Women's" products={womensClothing} category="women's clothing" />
        <CollectionSection title="Jewellery" products={jewelery} category="jewelery" />
        <CollectionSection title="Electronics" products={electronics} category="electronics" />
      </div>

      <MidBanner />
      <Features />
    </div>
  )
}

export default Home
