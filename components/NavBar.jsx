'use client'
import React, { useState } from 'react';
import Dropdown from './Dropdown';  // Adjust the path as needed

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'MEN', content: 'Men\'s clothing, accessories, and more.' },
    { name: 'WOMEN', content: 'Women\'s clothing, accessories, and more .' },
    { name: 'KIDS', content: 'Kids\' clothing, accessories, and more.' },
    { name: 'HOME & LIVING', content: 'Home decor, furniture, and more.' },
    { name: 'BEAUTY', content: 'Beauty products and accessories.' },
    { name: 'STUDIO', content: 'Studio collection and accessories.' },
  ];

  return (
    <div>
      <div className='fixed top-0 w-full bg-gray-100 shadow-lg py-2 px-4 lg:px-6 flex justify-between items-center h-16 z-10 font-bold'>
        <div className="flex items-center">
          <button className="lg:hidden mr-4" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <img src="/images/logo.png" className="w-20 h-12" alt="Logo" />
        </div>
        
        <div className="hidden lg:flex flex-wrap justify-center items-center relative">
          {navItems.map((item, index) => (
            <h1
              key={index}
              className='cursor-pointer ml-4 lg:ml-8 my-1 lg:my-0'
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
              {hoveredItem === index && <Dropdown content={item.content} isVisible={hoveredItem === index} />}
            </h1>
          ))}
        </div>

        <div className="flex items-center">
          <div className="border border-gray-300 flex items-center h-10 mr-2">
            <img src="/images/lens.png" className="w-5 h-5 ml-2 mr-1" alt="Lens" />
            <input 
              className="bg-gray-100 text-gray-900 text-sm rounded-sm block w-24 lg:w-64 p-1" 
              placeholder="Search" 
              required 
            />
          </div>
          <img src="/images/login.png" className="w-5 h-5 ml-2 lg:ml-4 cursor-pointer" alt="Login" />
          <img src="/images/logout.png" className="w-5 h-5 ml-2 lg:ml-4 cursor-pointer" alt="Logout" />
          <img src="/images/cart.png" className="w-5 h-5 ml-2 lg:ml-4 cursor-pointer" alt="Cart" />
        </div>
      </div>
      
      {/* Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${menuOpen ? 'block' : 'hidden'}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`fixed top-0 left-0 h-full bg-gray-100 shadow-lg transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30 w-64`}>
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex flex-col mt-16 space-y-4 px-4">
          {navItems.map((item, index) => (
            <h1 key={index} className='cursor-pointer'>{item.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
