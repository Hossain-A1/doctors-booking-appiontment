import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppiontments = () => {
  const { appointments } = useContext(AppContext);
  console.log(appointments);
  return (
    <main>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>
        My appointments
      </p>

      {appointments && (
        <div>
          {appointments.map((item, i) => (
            <div
              key={i}
              className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b'
            >
              <div>
                <img
                  className='w-32 bg-indigo-50'
                  src={item.doctor.image}
                  alt={item.doctor.name}
                />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold '>
                  {item.doctor.name}
                </p>
                <p>{item.doctor.speciality}</p>
                <p className='mt-1 font-medium text-zinc-700'>Address:</p>
                <p className='text-xs'>{item.doctor.address.line1}</p>
                <p className='text-xs'>{item.doctor.address.line2}</p>

                <p className='text-xs mt-1'>
                  <span className='text-sm text-neutral-700 font-medium'>
                    Date & Time: {item.slotDate}-{item.slotTime}
                  </span>
                </p>
              </div>
              <div>{/* responsive */}</div>
              <div className='flex flex-col gap-1  justify-end'>
                <button className='text-sm text-center  text-stone-500 sm: min-w-[48] py-2 px-4 border rounded hover:text-white hover:bg-primary transition-all duration-300'>
                  Pay Online
                </button>
                <button className='text-sm text-center text-stone-500 sm: min-w-[48] py-2 px-4 border rounded hover:text-gray-900 hover:bg-red-600 transition-all duration-300'>
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default MyAppiontments;
