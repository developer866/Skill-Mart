import React, { useState } from "react";
import Profession from "../Data/Profession";

function Dashboard() {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <main className="flex flex-col mx-auto items-center border-dashed d:w-[90%] min-h-[70vh] justify-center">
      <div>
        <h1 className="text-xl md:text-xl font-bold">
          WELCOME TO <span className="">SKILLMART</span>
        </h1>
      </div>

      <div className="w-[90%] flex flex-col items-center">
        <input
          type="text"
          id="SearchForArtisan"
          className="w-[70%]  border rounded-xl p-4 my-4"
          placeholder="Search For Artisan"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* dispaly query */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[90%] text-center">
        {Profession.slice(0,20).map((item, index) => (
          
          <p key={index}>{item}</p>
        ))}
      </div>
    </main>
  );
}

export default Dashboard;
