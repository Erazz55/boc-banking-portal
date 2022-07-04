import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="h-16 flex justify-between py-4 px-2 shadow-2xl">
        <div className="flex items-center space-x-96">
            <div>
                <Link href="/">
                    <img className="w-24 object-contain cursor-pointer" src="/logo.svg" alt='logo'></img>
                </Link> 
            </div>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Network</h3>
                <h3>Contact</h3>
            </div>
        </div>
        <div className="flex items-center space-x-5 text-green-600">
            <h3>Sign In</h3>
            <h3 className="border px-4 py-1 rounded-full border-green-600">Log In</h3>
        </div>
    </header>
  )
}

export default Header