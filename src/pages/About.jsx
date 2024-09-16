import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <main>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>

        <div className=' my-10 flex flex-col md:flex-row md:text-start gap-12'>
          <img
            className='w-full md:max-w-[360px]'
            src={assets.about_image}
            alt='about image'
          />

          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
              dolorum. Et, impedit corporis dicta officia culpa voluptatem
              maiores dolorum tempore amet distinctio laborum necessitatibus
              neque, perspiciatis nemo temporibus beatae molestias.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
              dolorum. Et, impedit corporis dicta officia culpa voluptatem
              maiores dolorum tempore amet distinctio laborum necessitatibus
              neque, perspiciatis nemo temporibus beatae molestias.
            </p>
            <b className='text-gray-800'>Our Vison</b>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
              dolorum. Et, impedit corporis dicta officia culpa voluptatem
              maiores dolorum tempore amet distinctio laborum necessitatibus
              neque, perspiciatis nemo temporibus beatae molestias.
            </p>
          </div>
        </div>

        <div className='text-xl my-4'>
          <p>
            WHY <span className='text-gray-700 font-semibold '>CHOOSE US</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="border  px-10 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Efficency:</b>
            <p>
              Streamline appiontment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border  px-10 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Convenience:</b>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border  px-10 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Personalization:</b>
            <p>
              Tailored decommendtions and reminds to help you stay on top your
              helth.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
