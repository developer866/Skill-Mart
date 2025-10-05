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
    <main className="">
      <Navbar />
      <div className="md:w-[80%]  m-4 px-2 md:h-[80vh]  border-2 border-dashed">
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
