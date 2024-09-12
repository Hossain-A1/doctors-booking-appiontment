import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section
      id='speciality'
      className='flex flex-col items-center gap-4 py-16 text-gray-800'
    >
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-1/3 text-center text-sm'>
        Enables users to quickly schedule an appointment with a doctor of their
        choice through an easy-to-use online booking system.
      </p>

      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((item, i) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className='flex flex-col text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
            to={`/doctors/${item.speciality}`}
            key={i}
          >
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt='' />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialityMenu;
