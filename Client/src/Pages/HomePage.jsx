import React from "react";

function HomePage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text (centered) */}
        <div className="flex flex-col items-center text-center md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold">
            WELCOME TO <span className="text-[#C9FF4D]">SKILLMART</span>
          </h1>
          <p className="mt-3 text-base md:text-lg max-w-lg">
            Where we connect the world with professionals — and connect
            professionals with the world.
          </p>
          <button className="mt-6 bg-[#C9FF4D] text-black px-6 py-2 rounded-xl font-medium hover:bg-lime-400">
            Hire a Professional
          </button>
        </div>

        {/* Image (moderate size) */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="/images/artisan.jpg"
            alt="Artisan at work"
            className="w-44 md:w-72 lg:w-80 rounded-2xl object-cover"
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
