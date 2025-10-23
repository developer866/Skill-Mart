import React, { useState } from "react";
import Profession from "../Data/Profession";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  console.log(query);

  const filteredArtisans = Profession.filter((artisan) =>
    artisan.toLowerCase().includes(query.toLowerCase())
  );

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      navigate(`/result?search=${query}`);
    }
  };
  const handlClick = (item) => {
    // e.preventDefault();
    navigate(`/result?search=${item}`);
    console.log(item);
  }

  return (
    <main className="flex flex-col mx-auto items-center border-dashed d:w-[90%] min-h-[70vh] justify-center mt-5">
      <div>
        <h1 className="text-xl md:text-xl font-bold">
          <span className=""></span>
        </h1>
      </div>

      <div className="w-[90%] flex flex-col items-center">
        <input
          type="text"
          id="SearchForArtisan"
          className="w-[70%] border rounded-xl md:p-4 p-2 my-4"
          placeholder="Search For Artisan"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handlekeydown}
        />
      </div>

      <div className="mt-4">
        {query.length > 0 ? (
          <h1 className="text-xl bold">
            Showing {filteredArtisans.length} results for "{query}"
          </h1>
        ) : (
          <span>Showing all artisans</span>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3 gap-3 w-[90%] text-center mt-4">
        {filteredArtisans.slice(0, 10).map((item, index) => (
          <p className=" border-gray-400 border-2 p-2" onClick={()=>handlClick(item)}  key={index}>
            {item}
          </p>
        ))}
      </div>
    </main>
  );
}

export default Dashboard;
