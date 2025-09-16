import { useState } from "react";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"; // make sure the styles are imported

// 🔹 Helper function for showing toast
const showToast = (text, type = "success") => {
  Toastify({
    text,
    duration: 3000,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background:
        type === "success"
          ? "linear-gradient(to right, #00b09b, #96c93d)" // green gradient
          : "linear-gradient(to right, #ff5f6d, #ffc371)", // red/orange gradient
    },
  }).showToast();
};

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      // ✅ Success toast
      showToast(res.data.message || "Registered successfully!", "success");
      setForm({ name: "", email: "", password: "" }); // clear form after success
    } catch (err) {
      // ❌ Error toast
      showToast(err.response?.data?.message || "Something went wrong", "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-80 mx-auto mt-10"
    >
      <input
        name="name"
        value={form.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        value={form.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={form.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
}

export default Register;
