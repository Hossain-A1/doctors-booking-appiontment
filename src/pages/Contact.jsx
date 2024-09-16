import React from 'react'
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <main>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-900'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="contact image" />
 

      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
        <p className='text-gray-500'>$4598 jedda <br /> state 350, rtere, KSA</p>
        <p className='text-gray-500'>Tel:(966) 050-1747-626 <br />Email: mrhossainahmed7@gmail.com</p>
        <p className='text-gray-700'>Create at prescripto</p>
        <p className='text-gray-500'>learn more about to prescripto</p>
        <button className='border border-black py-4 px-8 text-sm hover:bg-black hover:text-white duration-300 transition-all'>explore job</button>
      </div>
      </div>
    </main>
  )
}

export default Contact