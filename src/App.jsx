import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import MyAppointments from "./pages/MyAppiontments";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Appiontment from "./pages/Appiontment";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appiontments' element={<MyAppointments />} />
        <Route path='/appiontment/:docId' element={<Appiontment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
