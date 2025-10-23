import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function BookingPage() {
  const location = useLocation();
  const { artisan } = location.state || {};

  const [formData, setFormData] = useState({
    jobType: "",
    description: "",
    date: "",
    time: "",
  });

  if (!artisan) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No artisan data provided.
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      artisanId: artisan.id,
      artisanName: artisan.name,
      ...formData,
    };
    console.log("Booking Details:", bookingData);
    alert(`Booking for ${artisan.name} submitted!`);
  };

  return (
    <main className=" bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Book {artisan.name}
        </h1>
        <p className="text-center text-gray-500 mb-6">
          {artisan.profession} • {artisan.location}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Job Type */}
          <div>
            <label className="block font-medium text-gray-700">
              Type of Job
            </label>
            <select
              name="jobType"
              required
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            >
              <option value="">Select job type</option>
              <option value="Repair">Repair</option>
              <option value="Installation">Installation</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Inspection">Inspection</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700">
              Job Description
            </label>
            <textarea
              name="description"
              rows="4"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the work you need done..."
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          {/* Appointment Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Preferred Time
              </label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#C9FF4D] text-white font-semibold p-2 rounded-md hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </main>
  );
}

export default BookingPage;
