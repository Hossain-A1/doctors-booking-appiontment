import axios from "axios";


export const fetchDoctorsData = async (serverURL) => {

  const doctors = await axios.get(serverURL + "/api/doctor/all-doc");

  return doctors;
};


export const fetchUsersData=async(URL,token)=>{
  const users = await axios.get(URL + "/api/user/get-profile",{headers:{Authorization:`Bearer ${token}`}});

  return users;
}