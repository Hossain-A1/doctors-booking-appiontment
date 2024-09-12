import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='w-44 mb-5' src={assets.logo} alt='logo' />

          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsam
            neque est distinctio animi voluptatum dolorem iste quae, veniam,
            natus excepturi omnis iure necessitatibus possimus velit molestiae
            hic reiciendis debitis?
          </p>
        </div>

        <div>
          <p className='uppercase text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privicy & Policy</li>
          </ul>
        </div>
        <div>
          <p className='uppercase text-xl font-medium mb-5'>Get in Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+234-242-234532</li>
            <li>doctorbooking@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------copyright text-------- */}
      <div>
        <hr />
        <p className='capitalize py-5 text-sm text-center'>
          Copyright {new Date().getFullYear()}@ prescripto - All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
