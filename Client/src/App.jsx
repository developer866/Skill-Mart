import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <main className="font-poppins">
      <Navbar />

      <div className="max-w-[80%] mx-auto my-4 md:px-2 border-2 border-dashed ">
        <HomePage />
        <HomePage />
      </div>

      <Footer />
    </main>
  );
}

export default App;
