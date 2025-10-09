import React from "react";
import { useLocation } from "react-router-dom";
import Artisan from "../Data/Aritsan";

function Result() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  // ✅ Safe check: make sure data exists
  const artisanList = Artisan?.artisans || [];

  const filteredArtisans = artisanList.filter((artisan) =>
    artisan.profession.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredArtisans)

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Showing results for: <span className="text-blue-600">"{searchQuery}"</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan, index) => (
            <div key={index} className="flex border p-4 m-2 rounded-lg shadow-sm">
              {/* Optional gender SVG icon */}
              {artisan.svg_icon && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: Artisan.svg_templates[artisan.svg_icon],
                  }}
                />
              )}

              <h2 className="text-lg font-bold">{artisan.name}</h2>
              <p>Profession: {artisan.profession}</p>
              <p>Location: {artisan.location}</p>
              <p>Contact: {artisan.contact}</p>
              <p>Rating: ⭐ {artisan.rating}</p>
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
