import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <header className="h-16 flex justify-between py-4 px-2 shadow-2xl sticky">
        <div className="flex items-center space-x-96">
            <div>
                <Link href="/">
                    <img className="w-24 object-contain cursor-pointer" src="/logo.svg" alt='logo'></img>
                </Link> 
            </div>
            <div className="hidden md:inline-flex items-center pl-20 space-x-5">
                <h3 className="navigation-text">About</h3>
                <h3 className="navigation-text">Network</h3>
                <h3 className="navigation-text">Contact</h3>
            </div>
        </div>
        
    </header>
  )
}

export default Navigation;