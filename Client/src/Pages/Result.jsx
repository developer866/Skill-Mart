import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Artisan from "../Data/Aritsan";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  const artisanList = Artisan?.artisans || [];

  const filteredArtisans = artisanList.filter((artisan) =>
    artisan.profession.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClick = (artisan) => {
    console.log("hello world");
    navigate(`/ArtisanPage?artisan=${artisan.id}`,{state: { artisan }});
  };

  
  return (
    <div className="p-4 min-h-[50vh] md:w-[70%] mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Showing results for:{" "}
        <span className="text-blue-600">"{searchQuery}"</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan, index) => (
            <div
              key={index}
              className="border-gray-500 p-3 m-2 rounded-lg hover:cursor-pointer shadow-sm"
              onClick={() => {
                console.log(artisan.name);
                handleClick(artisan);
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
                  Book  service
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
