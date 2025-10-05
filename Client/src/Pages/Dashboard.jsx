import React from "react";

function Dashboard() {
  return (
    <main className=" flex flex-col  border mx-auto items-center">
      <h1>Welcome to skillmart</h1>
      <p>Hire a skill.</p>

      <div>
        <input
          type="text"
          id="SearchForArtisan"
          className="md:w-[60%] border rounded-1xl md:p-4 my-4"
          placeholder="Search For Artisan"
        />
        <button className="border bg-[#C9FF4D] md:p-4  rounded">Search</button>
      </div>

      <section className="border">
        <h1 className="bold">Available Artisain</h1>
        <section className=" md:flex justify-between gap-1.5">
          <div className="w-[100%] border">artisan 1</div>
          <div className="w-[50%] border">artisan 1</div>
          <div className=" w-[50%] border">artisan 1</div>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;
