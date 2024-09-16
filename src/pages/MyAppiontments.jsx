import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppiontments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <main>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>
        My appointments
      </p>

      <div>
        {doctors.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b'
          >
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt={item.name} />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold ">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="mt-1 font-medium text-zinc-700">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>

              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">Date & Time: 23, sep, 2024 | 8:30 PM</span>
              </p>
            </div>
            <div>{/* responsive */}</div>
            <div className="flex flex-col gap-1  justify-end">
              <button className="text-sm text-center  text-stone-500 sm: min-w-[48] py-2 px-4 border rounded hover:text-white hover:bg-primary transition-all duration-300">Pay Online</button>
              <button className="text-sm text-center text-stone-500 sm: min-w-[48] py-2 px-4 border rounded hover:text-gray-900 hover:bg-red-600 transition-all duration-300">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyAppiontments;
