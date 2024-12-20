import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token ,setToken,users} = useContext(AppContext);
  return (
    <header className='flex items-center justify-between text-sm py-4 mb-5 border-b-2 border-b-gray-200'>
      <img
        onClick={() => navigate("/")}
        className='w-48 md:w-52 cursor-pointer'
        src={assets.logo}
        alt='logo'
      />

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
        {token&& users? (
          <div className='flex items-center gap-2 cursor-pointer group relative '>
            <img
              className='rounded-full w-8'
              src={users.image}
              alt='profile-pic'
            />
            <img
              className='w-2.5 right-0'
              src={assets.dropdown_icon}
              alt='dropdown_icon'
            />

            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p
                  onClick={() => navigate("/my-profile")}
                  className='hover:text-black cursor-pointer'
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appiontments")}
                  className='hover:text-black cursor-pointer'
                >
                  My Appiontments
                </p>
                <p
                  onClick={() => setToken(localStorage.removeItem("token"))}
                  className='hover:text-black cursor-pointer'
                >
                  Logout
                </p>
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

        {/* responsive navbar menu */}
        <img
          onClick={() => setShowMenu(true)}
          className='w-6 md:hidden '
          src={assets.menu_icon}
          alt='menu icon'
        />

        <div
          className={`${
            showMenu ? "fixed w-full" : "fixed h-0 w-0 right-0"
          } md:hidden top-0  right-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-500`}
        >
          <div className='flex items-center px-5 py-6 justify-between'>
            <img className='w-36' src={assets.logo} alt='logo' />
            <img
              className='w-7'
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=''
            />
          </div>
          <ul className='flex flex-col items-center gap-3 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'>
              <p className='px-4 py-2 rounded inline-block'>Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
              <p className='px-4 py-2 rounded inline-block'>All Doctors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'>
              <p className='px-4 py-2 rounded inline-block'>About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'>
              <p className='px-4 py-2 rounded inline-block'>Contact</p>
            </NavLink>

            <NavLink
              to='/login'
              onClick={() => setShowMenu(false)}
              className='bg-primary text-white px-4 py-2 text-sm rounded-full font-light'
            >
              Create Account
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
