import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Protected from "./Pages/Protected";

function App() {
  return (
    <main className="font-poppins">
      <Navbar />
      <div className="max-w-[80%] mx-auto my-4 md:px-2 border-2 border-dashed ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

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
