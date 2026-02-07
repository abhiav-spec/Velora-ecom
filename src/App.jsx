import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import axios from 'axios'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import CategoryProduct from './pages/CategoryProduct'
import { useCart } from './context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => {
  const [location, setLocation] = useState()
  const [openDropdown, setOpenDropdown] = useState(false)
  const { cartItem, setCartItem } = useCart()

  const getLocation = async () => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by this browser');
      return;
    }

    const options = {
      enableHighAccuracy: false, // Set to false for faster response
      timeout: 10000, // 10 second timeout
      maximumAge: 300000 // Cache location for 5 minutes
    };

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords

        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        try {
          const response = await fetch(url, {
            headers: {
              'User-Agent': 'Velora-Ecommerce-App/1.0 (contact@velora.example.com)',
              'Accept': 'application/json'
            }
          })

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          const locationData = await response.json()
          const exactLocation = locationData.address
          setLocation(exactLocation)
          setOpenDropdown(false)

        } catch (error) {
          console.log('Geolocation API error:', error);
          // Silent fail - location is optional feature
        }
      },
      (error) => {
        // Handle different error codes gracefully
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log('User denied location permission');
            break;
          case error.POSITION_UNAVAILABLE:
            console.log('Location information unavailable');
            break;
          case error.TIMEOUT:
            console.log('Location request timed out');
            break;
          default:
            console.log('Unknown location error:', error.message);
        }
        // App continues to work without location
      },
      options
    );
  }

  useEffect(() => {
    getLocation()
  }, [])

  //Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItem')
    if (storedCart) {
      setCartItem(JSON.parse(storedCart))
    }
  }, []);

  //save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  }, [cartItem])

  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<SingleProduct />}></Route>
        <Route path='/category/:category' element={<CategoryProduct />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<ProtectedRoute>
          <Cart location={location} getLocation={getLocation} />
        </ProtectedRoute>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
