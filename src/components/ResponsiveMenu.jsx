import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
    const { user } = useUser()
    return (
        <>
            {/* Overlay */}
            {openNav && (
                <div
                    className="fixed inset-0 bg-black/50 z-10 md:hidden"
                    onClick={() => setOpenNav(false)}
                />
            )}
            <div className={`${openNav ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 px-8 pb-6 pt-16 text-black dark:text-white md:hidden rounded-r-xl shadow-md transition-all`}>
                <div>
                    <div className='flex items-center justify-start gap-3'>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                            <div>
                                <h1>Hello, {user?.firstName || 'User'}</h1>
                                <h1 className='text-sm text-slate-500 dark:text-slate-400'>Premium User</h1>
                            </div>
                        </SignedIn>
                        <SignedOut>
                            <FaUserCircle size={50} className="text-gray-400" />
                            <div>
                                <h1>Hello, Guest</h1>
                                <h1 className='text-sm text-slate-500 dark:text-slate-400'>Sign in to continue</h1>
                            </div>
                        </SignedOut>
                    </div>

                    {/* Login Button for signed out users */}
                    <SignedOut>
                        <div className='mt-6'>
                            <SignInButton mode="modal">
                                <button className="w-full bg-red-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                                    Sign In / Sign Up
                                </button>
                            </SignInButton>
                        </div>
                    </SignedOut>

                    <nav className='mt-8'>
                        <ul className='flex flex-col gap-6 text-xl font-semibold'>
                            <Link to={'/'} onClick={() => setOpenNav(false)} className="cursor-pointer hover:text-red-500 transition-colors"><li>Home</li></Link>
                            <Link to={"/products"} onClick={() => setOpenNav(false)} className="cursor-pointer hover:text-red-500 transition-colors"><li>Products</li></Link>
                            <Link to={"/about"} onClick={() => setOpenNav(false)} className="cursor-pointer hover:text-red-500 transition-colors"><li>About</li></Link>
                            <Link to={"/contact"} onClick={() => setOpenNav(false)} className="cursor-pointer hover:text-red-500 transition-colors"><li>Contact</li></Link>
                        </ul>
                    </nav>
                </div>

                {/* Bottom section for signed in users */}
                <SignedIn>
                    <div className='border-t border-gray-200 dark:border-gray-700 pt-4'>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>Signed in as {user?.primaryEmailAddress?.emailAddress}</p>
                    </div>
                </SignedIn>
            </div>
        </>
    )
}

export default ResponsiveMenu
