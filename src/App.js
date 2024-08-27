import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './layout/homepage';
import AboutUS from './pages/AboutUs';
import Service from './pages/Service';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './layout/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Footer.css';
import  './css/homepage.css';
import './css/AboutUs.css';
import './css/Service.css';
import './css/contact.css';
import HomeBackground from './pages/Homebackground';
import  './responsive.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/About" element={<AboutUS/>}/>
        <Route path="/services" element={<Service/>}/>
        {/* <Route path="/Projects" element={<Project/>}/> */}
        <Route path="/Contacts" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>


  );
}

export default App;

