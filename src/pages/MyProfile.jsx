import React, { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

const MyProfile = () => {
  const { users, setUsers, serverURL, token, getUsersProfile } =
    useContext(AppContext);
  const { name, phone, address = {}, gender, birthday, image } = users;
  const [editMode, setEditMode] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleUpdateUser = async () => {
    try {
      const appendData = new FormData();
      appendData.append("image", previewImg);
      appendData.append("name", users.name || "");
      appendData.append("phone", users.phone || "");
      appendData.append("address", JSON.stringify(address || {}));
      appendData.append("gender", users.gender || "");
      appendData.append("birthday", users.birthday || "");

      const { data } = await axios.put(
        serverURL + "/api/user/update-profile",
        appendData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        await getUsersProfile();
        setEditMode(false);
        setPreviewImg(false);
        toast.success('Profile updated successfully')
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    users && (
      <div className='max-w-lg flex flex-col gap-2 text-sm'>
        {editMode ? (
          <form className='flex flex-col gap-1 max-w-[200px]'>
            <label htmlFor='image' className='w-36 rounded cursor-default'>
              <input
                type='file'
                id='image'
                onChange={(e) => setPreviewImg(e.target.files[0])}
                hidden
              />
              <img
                src={previewImg ? URL.createObjectURL(previewImg) : image}
                alt={name}
              />
            </label>
            Name:
            <input
              className='p-1 border-2 rounded text-gray-700'
              type='text'
              value={name || ""}
              onChange={(e) =>
                setUsers((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            Phone:
            <input
              className='p-1 border-2 rounded text-gray-700'
              type='tel'
              value={phone || ""}
              onChange={(e) =>
                setUsers((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
            <div className='flex flex-col gap-2'>
              Address line1:
              <input
                className='p-1 border-2 rounded text-gray-700'
                type='text'
                value={address?.line1 || ""}
                onChange={(e) =>
                  setUsers((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              Address line2:
              <input
                className='p-1 border-2 rounded text-gray-700'
                type='text'
                value={address?.line2 || ""}
                onChange={(e) =>
                  setUsers((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
              <div className='flex flex-col'>
                Gender:
                <select
                  className='bg-gray-200 p-1 rounded text- text-primary'
                  value={gender || ""}
                  onChange={(e) =>
                    setUsers((prev) => ({
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
                value={birthday || ""}
                onChange={(e) =>
                  setUsers((prev) => ({ ...prev, birthday: e.target.value }))
                }
              />
            </div>
            <div className='flex flex-col gap-2 sm:flex-row items-start text-sm mt-3  max-w-[200px]'>
              <button
                className='text-center text-sm p-1 border-2 w-24 rounded-full border-gray-300'
                onClick={toggleEditMode}
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateUser}
                className='text-center border-2 border-primary text-sm p-1 shadow-lg w-24 rounded-full bg-primary hover:bg-primary/90 text-white'
              >
                Save Info
              </button>
            </div>
          </form>
        ) : (
          <div className='text-gray-700'>
            <img className='w-36 rounded' src={image} alt={name} />
            <p className='text-3xl font-semibold'>{name}</p>
            <hr className='bg-zinc-400 h-[1px] border-none' />

            <div>
              <p className='text-neutral-500 no-underline mt-3'>
                CONTACT INFORMATION
              </p>
              <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
                <div className='flex text-gray-900 flex-col gap-1 items-start'>
                  <p>Phone:</p>
                  <p>Address:</p>
                </div>
                <div>
                  <p>{phone}</p>
                  <p>
                    {address?.line1} <br /> {address?.line2}
                  </p>
                </div>
              </div>

              <p className='text-neutral-500 no-underline mt-3'>
                BASIC INFORMATION
              </p>
              <div className='flex gap-1 items-start mt-3'>
                <p className='text-gray-900'>Gender:</p>
                <p>{gender}</p>
              </div>
              <div className='flex gap-1 items-start'>
                <p className='text-gray-900'>Birthday:</p>
                <p>{birthday}</p>
              </div>

              <div className='flex flex-col gap-2 sm:flex-row items-start max-w-[200px]'>
                <button
                  className='text-center text-sm p-1 border-2 mt-3 w-24 rounded-full border-gray-300'
                  onClick={toggleEditMode}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default MyProfile;
