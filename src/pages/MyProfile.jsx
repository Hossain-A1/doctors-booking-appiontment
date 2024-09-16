import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const toggoleEditMode = () => {
    setEditMode(!editMode);
  };
  const [profileData, setProfileData] = useState({
    name: "Hossain ahmed",
    image: assets.profile_pic,
    email: "mrhossainahmed7@gmail.com",
    phone: "+1,8973245-33",
    address: {
      line1: "57th cross, Richmood",
      line2: "crijd mcedje ,london",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  return (
    <div className='max-w-lg flex flex-col  gap-2 text-sm'>
      <img
        className='w-36 rounded'
        src={profileData.image}
        alt={profileData.name}
      />

      {editMode ? (
        <div className='flex flex-col gap-1 max-w-[200px]'>
          Name:
          <input
            className='p-1 border-2 rounded text-gray-700'
            type='text'
            value={profileData.name}
            onChange={(e) =>
              setProfileData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          Phone:
          <input
            className='p-1 border-2 rounded text-gray-700'
            type='tel'
            value={profileData.phone}
            onChange={(e) =>
              setProfileData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
          <div className='flex flex-col gap-2'>
            Address line1:
            <input
              className='p-1 border-2 rounded text-gray-700'
              type='tel'
              value={profileData.address.line1}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
            />
            Address line2:
            <input
              className='p-1 border-2 rounded text-gray-700'
              type='tel'
              value={profileData.address.line2}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
            />
            <div className='flex flex-col'>
              Gender:
              <select
                className='bg-gray-200 p-1 rounded text- text-primary'
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }))
                }
              >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>
            Birthday:
            <input
              className='bg-gray-200 p-1 rounded text- text-primary'
              type='date'
              value={profileData.dob}
              onChange={(e) =>
                setProfileData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          </div>
        </div>
      ) : (
        <div className='text-gray-700'>
          <p className='text-3xl font-semibold'>{profileData.name}</p>
          <hr className='bg-zinc-400 h-[1px] border-none' />

          <div className=''>
            <p className='text-neutral-500 no-underline mt-3'>
              CONTACT INFORMATIONS
            </p>

            <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
              <div className='flex text-gray-900 flex-col gap-1 items-start '>
                <p>Email id:</p>
                <p>Phone:</p>
                <p>Address:</p>
              </div>
              <div>
                <div className='flex flex-col gap-1 items-start'>
                  <p className='text-blue-500'>{profileData.email}</p>

                  <p>{profileData.phone}</p>

                  <p>
                    {profileData.address.line1} <br />{" "}
                    {profileData.address.line1}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-neutral-500 no-underline mt-3'>
                BASIC INFORMATION
              </p>
              <div className='flex  gap-1 items-start mt-3 '>
                <p className='text-gray-900'>Gender:</p>
                <p>{profileData.gender}</p>
              </div>
              <div className='flex  gap-1 items-start '>
                <p className='text-gray-900'>Birthday:</p>
                <p>{profileData.dob}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col gap-2 sm:flex-row items-start  max-w-[200px]'>
        <button
          className='text-center text-sm p-1 border-2 w-24 rounded-full border-gray-300'
          onClick={toggoleEditMode}
        >
          {editMode ? "Cancel" : "Edit Profile"}
        </button>
        {editMode && (
          <button className='text-center text-sm p-1 shadow-lg w-24 rounded-full bg-primary hover:bg-primary/90 text-white'>
            Save Info
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
