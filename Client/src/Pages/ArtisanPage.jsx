import React from "react";
import { useLocation } from "react-router-dom";
import Artisan from "../Data/Aritsan"; // optional if you want to show the SVG icon

function ArtisanPage() {
  const location = useLocation();
  const { artisan } = location.state || {};

  if (!artisan) {
    return <div className="text-center text-gray-500 mt-10">No artisan data available.</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 text-white text-center py-10 relative">
          <div className="flex justify-center mb-4">
            {artisan.svg_icon && (
              <div
                className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md"
                dangerouslySetInnerHTML={{
                  __html: Artisan.svg_templates[artisan.svg_icon],
                }}
              />
            )}
          </div>
          <h1 className="text-3xl font-bold">{artisan.name}</h1>
          <p className="text-lg opacity-90">{artisan.profession}</p>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
              <ul className="text-gray-700 space-y-2">
                <li><strong>📍 Location:</strong> {artisan.location}</li>
                <li><strong>📞 Contact:</strong> {artisan.contact}</li>
                <li><strong>⭐ Rating:</strong> {artisan.rating}</li>
                <li><strong>🎓 Certification:</strong> {artisan.certification || "N/A"}</li>
                <li><strong>💼 Experience:</strong> {artisan.years_experience} years</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-gray-600 leading-relaxed">{artisan.description}</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200"
            >
              Book {artisan.name.split(" ")[0]} Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ArtisanPage;
