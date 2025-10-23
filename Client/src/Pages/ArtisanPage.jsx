import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Artisan from "../Data/Aritsan"; // optional if you want to show the SVG icon

function ArtisanPage() {
  const location = useLocation();
  const navigete = useNavigate();
  const { artisan } = location.state || {};

  if (!artisan) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No artisan data available.
      </div>
    );
  }
  const handleClick =()=>{
    navigete('/BookingPage');
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#C9FF4D] text-white text-center py-10 relative">
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
          <h1 className="text-1xl font-bold">{artisan.name}</h1>
          <p className="text-lg opacity-90">{artisan.profession}</p>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className=" font-semibold mb-2">Personal Information</h2>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>
                  <strong>📍 Location:</strong> {artisan.location}
                </li>
                <li>
                  <strong>📞 Contact:</strong> {artisan.contact}
                </li>
                <li>
                  <strong>⭐ Rating:</strong> {artisan.rating}
                </li>
                <li>
                  <strong>🎓 Certification:</strong>{" "}
                  {artisan.certification || "N/A"}
                </li>
                <li>
                  <strong>💼 Experience:</strong> {artisan.years_experience}{" "}
                  years
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-2">About</h2>
              <p className="text-gray-600 leading-relaxed">
                {artisan.description}
              </p>
            </div>
          </div>

        
          {/* view Previous work*/}
          <div className="text-center mt-10 p-3 w-[100%] border m-auto">
            <h1 className="font-semibold">Previous work</h1>
            {/* card component */}
            <div className="text-left">  
              <img src="" alt="img" className="" />
              <section className="">
                <p className="">Description:This is a little discription</p>
                <p>Amount:Recieved</p>
              </section>
            </div>
          </div>


          {/* Call to Action */}
          <div className="mt-8 flex justify-center">
            <button className="text-[#C9FF4D] px-6 py-3 text-sm  rounded-lg shadow-md transition-all duration-200" onClick={()=>{handleClick()}}>
              Book {artisan.name.split(" ")[0]} Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ArtisanPage;
