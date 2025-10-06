import React from "react";
import About from "./About";

function HomePage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 ">
        {/* Left Side: Text Content */}
        <section className="max-w-md text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            WELCOME TO <span className="text-[#C9FF4D]">SKILLMART</span>
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Where we connect the world with professionals — and connect
            professionals with the world.
          </p>

          <button className="bg-[#C9FF4D] text-black px-6 py-2 rounded-full font-medium mt-6 hover:bg-lime-400 transition-all duration-200">
            Hire a Professional
          </button>
        </section>

        {/* Right Side: Image */}
        <section className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/images/artisan.jpg"
            alt="Artisan at work"
            className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
          />
        </section>
      </section>
      <About />
    </main>
  );
}

export default HomePage;
