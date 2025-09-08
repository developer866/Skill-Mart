import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <main className="font-poppins">
      <Navbar />
      {/* container */}
      <div className="max-w-[80%] mx-auto my-4 px-2 md:px-12 border border-dotted h-[80vh]">
      </div>
      <Footer />
    </main>

  );
}

export default App;
