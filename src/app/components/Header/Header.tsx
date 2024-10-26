import React from 'react'

function Header() {
  return (
    <div>
      <header>
        <nav className='bg-yellow-200 flex justify-between items-center fixed top-0 left-0 w-full z-10 h-20 p-5'>
            <h1 className='text-4xl font-bold  hover:text-blue-700'>Mahneera</h1>
            <ul className='flex space-x-20'>
                <li><a href="#home" className='text-1xl font-semibold hover:text-blue-700'>HOME</a></li>
                <li><a href="#about" className='text-1xl font-semibold hover:text-blue-700'>ABOUT ME</a></li>
                <li><a href="#contact"  className='text-1xl  font-semibold hover:text-blue-700'>CONTACT</a></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header