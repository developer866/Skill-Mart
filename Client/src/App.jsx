import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/sub-pages/About";
import Protected from "./Pages/Protected";
import Result from "./Pages/Result";
import ArtisanPage from "./Pages/ArtisanPage";
import BoookingPage from "./Pages/BookingPage";
import Contact from "./Pages/sub-pages/contact";
import Service from "./Pages/sub-pages/Service";
import Work from "./Pages/sub-pages/Work";


function App() {
  return (
    <main className="min-h-screen m-auto md:w-[100%]">
      <Navbar  />
      <div className="md:border-0 border-2 border-dashed">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Result" element={<Result/>} />
          <Route path="/ArtisanPage" element={<ArtisanPage />} />
          <Route path="/BookingPage" element={<BoookingPage />} />
          {/* sub pages */}
          <Route path="/Contact" element={<Contact />}/>
          <Route path ="/Service" element={<Service />}/>
          <Route path="/Work" element={<Work />}/>
      
          <Route
            path="/Dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
      </div>

      <Footer />
    </main>
  );
}

export default App;
