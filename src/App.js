import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/About Us";
import Categories from "./Pages/Categories";
import Clients from "./Pages/Clients";
import ContactUs from "./Pages/Contact Us";
import Services from "./Pages/Services";
import Landing from "./Components/Landing";


export default function(){
  return(
      <>
     
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="Home" element={<Home/>}/>
      <Route path="About Us" element={<AboutUs/>}/>
      <Route path="Categories" element={<Categories/>}/>cd
      <Route path="Clients" element={<Clients/>}/>
      <Route path="Contact Us" element={<ContactUs/>}/>
      <Route path="Services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
      


      </>
  )
}