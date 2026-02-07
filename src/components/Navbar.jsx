import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
    const { cartItem } = useCart();
    const { theme, toggleTheme } = useTheme();
    const [openNav, setOpenNav] = useState(false);

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };

    return (
        <div className='bg-white dark:bg-black py-3 shadow-2xl px-4 md:px-0 transition-colors duration-200'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-blue-600 font-serif'>V</span><span className='dark:text-white'>elora</span></h1></Link>
                    <div className='md:flex gap-1 cursor-pointer text-gray-700 dark:text-gray-300 items-center hidden'>
                        <MapPin className='text-red-500' />
                        <span className='font-semibold '>{location ? <div className='-space-y-2'>
                            <p>{location.county}</p>
                            <p>{location.state}</p>
                        </div> : "Add Address"}</span>
                        <FaCaretDown onClick={toggleDropdown} />
                    </div>
                    {
                        openDropdown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white dark:bg-black fixed top-16 left-60 border-2 p-5 border-gray-100 dark:border-gray-700 rounded-md'>
                            <h1 className='font-semibold mb-4 text-xl flex justify-between dark:text-white'>Change Location <span onClick={toggleDropdown}><CgClose /></span></h1>
                            <button onClick={getLocation} className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400'>Detect my location</button>
                        </div> : null
                    }
                </div>
                {/* menu section */}
                <nav className='flex gap-7 items-center'>
                    <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black dark:text-white"} cursor-pointer`}><li>Home</li></NavLink>
                        <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black dark:text-white"} cursor-pointer`}><li>Products</li></NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black dark:text-white"} cursor-pointer`}><li>About</li></NavLink>
                        <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black dark:text-white"} cursor-pointer`}><li>Contact</li></NavLink>
                    </ul>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <MdDarkMode className='h-6 w-6 text-gray-700' />
                        ) : (
                            <MdLightMode className='h-6 w-6 text-yellow-400' />
                        )}
                    </button>

                    <Link to={'/cart'} className='relative'>
                        <IoCartOutline className='h-7 w-7 dark:text-white' />
                        <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                    </Link>
                    <div className='hidden md:block'>
                        <SignedOut>
                            <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    {
                        openNav ? <HiMenuAlt3 onClick={() => setOpenNav(false)} className='h-7 w-7 md:hidden' /> : <HiMenuAlt1
                            onClick={() => setOpenNav(true)}
                            className='h-7 w-7 md:hidden' />
                    }
                </nav>
            </div>
            <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
        </div>
    );
};

export default Navbar;
