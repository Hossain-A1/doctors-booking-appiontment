import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appiontment = () => {
  const { docId } = useParams();
  const daysOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { doctors, dollerSign } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIntex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  // find doctor by their id//
  const fetchDoctorsInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };
  // slorting function is here//
  const handleAppiontmentDate = async () => {
    setDocSlots([]);
    // new date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //geting data with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //seting end time of the data with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      //seting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );

        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        //add slot data to the array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        //increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    handleAppiontmentDate();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  useEffect(() => {
    fetchDoctorsInfo();
  }, [docInfo, docId]);

  return (
    docInfo && (
      <main>
        <div className='flex flex-col sm:flex-row gap-4'>
          {/*--------------doctor image-------- */}
          <div>
            <img
              className='bg-primary w-full sm:max-w-72 rounded-lg'
              src={docInfo.image}
              alt=''
            />
          </div>
          {/*---------doctor about-------- */}
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              {docInfo.name}{" "}
              <img
                className='w-5'
                src={assets.verified_icon}
                alt='verify icon'
              />
            </p>

            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className='py-0 px-2 border text-xs rounded-full'>
                {docInfo.experience}
              </button>
            </div>

            <div>
              <p className='flex items-center gap-1 font-medium text-sm text-gray-900 mt-3'>
                About <img src={assets.info_icon} alt='info icon' />
              </p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>
                {docInfo.about}
              </p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>
              Appiontment fee:{" "}
              <span className='text-gray-600'>
                {dollerSign}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* ---------booking time---------- */}

        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
          <p>Booking slots</p>
          <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
            {docSlots.length &&
              docSlots.map((item, i) => (
                <div
                  onClick={() => setSlotIndex(i)}
                  key={i}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIntex === i
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && daysOfWeeks[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
            {docSlots.length &&
              docSlots[slotIntex].map((item, i) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={i}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className='bg-primary text-white text-sm rounded-full px-14 py-3 my-6 font-light'>
            Book an appiontment
          </button>
        </div>
        {/* ------listing related doctors----------- */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </main>
    )
  );
};

export default Appiontment;
