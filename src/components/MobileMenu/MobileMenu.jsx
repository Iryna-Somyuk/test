
import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

export const MobileMenu = () => {
  const { isLoggedIn } = useAuth();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <>
       <div onClick={handleNav} className='flex md:hidden ml-auto cursor-pointer z-30'><AiOutlineMenu size={30}/></div>
       <div className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 w-full absolute z-40 left-0 top-0 h-screen flex flex-col px-4 py-7 bg-black/90' : 'absolute top-0 h-screen left-[-100%] ease-in duration-300'}>
   <div onClick={handleNav} className='text-white flex justify-end mr-5 cursor-pointer'><AiOutlineCloseCircle size={30}/></div> 
    <nav className=' h-full w-full text-center pt-12 flex flex-col gap-4'>
    <NavLink
        className="curcor-pointer text-white text-xl font-bold hover:text-orange hover:underline"
        to="/"
        onClick={handleNav}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className="curcor-pointer text-white text-xl font-bold  hover:text-orange hover:underline"
          to="/contacts"
          onClick={handleNav}
        >
          Contacts
        </NavLink>
      )}
      <NavLink
        className="text-white text-xl font-bold  hover:text-orange hover:underline curcor-pointer"
        to="/register"
        onClick={handleNav}
      >
        Register
      </NavLink>
      <NavLink
        className="text-white text-xl font-bold  hover:text-orange hover:underline curcor-pointer"
        to="/login"
        onClick={handleNav}
      >
        Log In
      </NavLink>
    </nav>
        
       </div>
    </>
  )
}
