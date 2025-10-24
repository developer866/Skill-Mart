import React from "react";

// import About from "./sub-pages/About";

function HomePage() {
  return (
    <main className="md:w-[90%] md:max-h-12/12 h-screen m-auto">
      {/* Hero Section */}
      {/* 
      <section className="flex ">
   
        <section className=" m-auto text-center w-[50%] border">
          <h1 className="text-3xl font-bold mb-3">
            WELCOME TO <span className="text-[#C9FF4D]">SKILLMART</span>
          </h1>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Where we connect the world with professionals — and connect
            professionals with the world. 
          </p>

          <button className="text-xl bg-[#C9FF4D] text-black px-6 py-2 rounded-full font-medium mt-6 hover:bg-lime-400 transition-all duration-200">
            Hire a Professional
          </button>
        </section>

        
        <section className="">
          <img
            src="/images/artisan.jpg"
            alt="Artisan at work"
            className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
          />
        </section>
      </section> */}

      <section className="flex flex-col md:flex-row justify-between gap-8 md:min-h-[70vh] p-4 items-center ">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-3">
            WELCOME TO <span className="text-[#C9FF4D]">SKILLMART</span>
          </h1>
          <p className="md:text-2xl  leading-relaxed">
            Where we connect the world with professionals — and connect
            professionals with the world.
          </p>
          <button className="md:text-xl bg-[#C9FF4D] text-black px-6 py-4 rounded-xl font-medium mt-6 hover:bg-lime-400 transition-all duration-200">
            Hire a Professional
          </button>
        </div>

        
      </section>
      {/* <About /> */}
    </main>
  );
}

export default HomePage;
