import React from "react";

function HomePage() {
  return (
    <main className="mt-5 h-max p-5">
      {/* Hero Section */}
      <section>
        <section className="md:w-[50%]">
          <h1 className="md:text-xl text-xl font-extrabold ">
            WELCOME TO SKILLMART
          </h1>
          <p className="bold pt-5 text-thin ">
            where we connect the world with proefessional and we connect
            professionals with the world
          </p>

          <button className="bg-[#C9FF4D]  text-black md:px-4 my-4 md:py-2 p-2 rounded-full font-thin ">
            Hire a Proffessional
          </button>
        </section>
        <section>
          <section className=" w-[100%] md:hidden ">
            <img
              src="/images/Brazuca-Airport.png"
              className="w-[100%] h-[20vh] "
              alt="Airport"
            />
          </section>
        </section>

        <section className="md:flex justify-between md:w-[50%]">
          <div className="my-4 p-4 border rounded">Hire a professional</div>
          <div className="my-4 p-4 border rounded">
            Register as a professional
          </div>
          <div className="my-4 p-4 border rounded">24/7 actively</div>
        </section>
      </section>
    </main>
  );
}

export default HomePage;
