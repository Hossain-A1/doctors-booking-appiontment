import { createContext, useEffect, useState } from "react";
import { fetchDoctorsData, fetchUsersData } from "../data/fetchDoctorsData";
import axios from "axios";
import toast from "react-hot-toast";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState([]);
  const dollerSign = "$";
  const serverURL = "http://localhost:5000";
  const [appointments, setAppointments] = useState([]);

  //------user appiontments---------//
  const userAppointments = async () => {
    try {
      const { data } = await axios.get(
        serverURL + "/api/user/my-appointments",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        setAppointments(data.payload.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  // ---------get all doctors data ---------//
  const getDoctors = async () => {
    try {
      const res = await fetchDoctorsData(serverURL);
      if (res) {
        setDoctors(res.data.payload);
      }
    } catch (error) {
      console.error("Error fetching doctors data:", error);
    }
  };
  useEffect(() => {
    getDoctors();
  }, [serverURL]);
  //get users profile
  const getUsersProfile = async () => {
    try {
      const { data } = await fetchUsersData(serverURL, token);

      if (data.success) {
        setUsers(data.payload);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getUsersProfile();
    } else {
      setUsers([]);
    }
  }, [serverURL, token]);

  const value = {
    doctors,
    serverURL,
    dollerSign,
    setToken,
    token,
    appointments,
    userAppointments,
    getDoctors,
    getUsersProfile,
    users,
    setUsers,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
