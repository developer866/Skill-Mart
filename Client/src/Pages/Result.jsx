import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Artisan from "../Data/Aritsan";

function Result() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  const artisanList = Artisan?.artisans || [];

  const filteredArtisans = artisanList.filter((artisan) =>
    artisan.profession.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredArtisans);

  return (
    <div className="p-4 min-h-[50vh]">
      <h2 className="text-xl font-semibold mb-4">
        Showing results for:{" "}
        <span className="text-blue-600">"{searchQuery}"</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-3">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan, index) => (
            <div
              key={index}
              className="border-gray-500 p-3 md:m-2 rounded-lg shadow-sm"
              onClick={() => {
                console.log(artisan.name);
                Navigate(`/artisan/${artisan.id}`);
              }}
            >
              <div className="flex justify-between items-center w-[70%] m-auto ">
                <div>
                  {artisan.svg_icon && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: Artisan.svg_templates[artisan.svg_icon],
                      }}
                    />
                  )}
                </div>
                <div className="text-sm">
                  <h2 className="font-bold">{artisan.name}</h2>
                  <p>Profession: {artisan.profession}</p>
                  <p>Location: {artisan.location}</p>
                  <p>Contact: {artisan.contact}</p>
                  <p>Rating: ⭐ {artisan.rating}</p>
                </div>
              </div>
              <div className="mt-2 w-1/2 m-auto">
                <button className="bg-[#C9FF4D] text-black md:p-4 p-2 rounded-full font-medium mt-3 hover:bg-lime-400 transition-all duration-200">
                  Book a service
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No artisans found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default Result;
