import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <header className='flex items-center justify-between text-sm py-4 mb-5 border-b-2 border-b-gray-200'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='logo' />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="rounded-full w-8" src={assets.profile_pic} alt="profile-pic" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown_icon" />

            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={()=>navigate('/my-appiontments')} className="hover:text-black cursor-pointer">My Appiontments</p>
                <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className='bg-primary text-white px-8 py-3 hidden md:block rounded-full font-light'
          >
            Create account
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;