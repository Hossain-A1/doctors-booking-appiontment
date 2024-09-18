import { createContext, useEffect, useState } from "react";
import { fetchDoctorsData } from "../data/fetchDoctorsData";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const dollerSign = "$";
  const serverURL = "http://localhost:5000";
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState(() => {
    const storedAppointments = localStorage.getItem("appointments");
    return storedAppointments ? JSON.parse(storedAppointments) : [];
  });

  //------book appiontment---------//
  const bookAnAppointment = (doctorId, slotTime, slotDate) => {
    const doctor = doctors.find((doc) => doc._id === doctorId);
    if (doctor && slotTime) {
      const newAppointment = {
        doctor,
        slotTime,
        slotDate,
      };
      // Add new appointment and update localStorage
      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    }
  };

  useEffect(() => {
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
    getDoctors();
  }, [serverURL]);

  const value = {
    doctors,
    serverURL,
    dollerSign,
    setToken,
    token,
    appointments,
    bookAnAppointment,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
