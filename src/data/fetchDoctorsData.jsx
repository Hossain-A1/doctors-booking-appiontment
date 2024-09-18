import axios from "axios";


export const fetchDoctorsData = async (serverURL) => {

  const doctors = await axios.get(serverURL + "/api/doctor/all-doc");

  return doctors;
};
