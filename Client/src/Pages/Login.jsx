import { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

// 🔹 Helper function for showing toast messages
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
          ? "linear-gradient(to right, #00b09b, #96c93d)"
          : "linear-gradient(to right, #ff5f6d, #ffc371)",
    },
  }).showToast();
};

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  // Handle input changes
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      localStorage.setItem("token", res.data.token);
      showToast("Login successful!", "success");
      navigate("/dashboard");
    } catch (err) {
      showToast(err.response?.data?.message || "Login failed", "error");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-[80vh] bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-md p-6 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Sign in to your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            <Link to='/Register' >
            Create one
            </Link>
          </a>
        </p>
      </div>
    </main>
  );
}

export default Login;
