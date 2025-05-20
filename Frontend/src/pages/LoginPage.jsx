import React, { useContext, useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { MdEmail } from "react-icons/md";
import { LuLoaderCircle } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AppContext } from "../contexts/AppContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const { backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Email Required",
        text: "Please enter your email address.",
      });
    }

    if (!emailRegex.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
    }

    if (!password.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Enter Password",
        text: "Please enter your password.",
      });
    }

    if (!checked) {
      return Swal.fire({
        icon: "error",
        title: "Confirmation Required",
        text: "Please confirm you agree to the terms.",
      });
    }

    try {
      setLoading(true);
      const response = await axios.post(`${backendUrl}/auth/login`, {
        email,
        password,
      });

      const { data } = response;

      if (data.success) {
        const { accessToken, refreshToken } = data.data;

        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        });

        navigate("/dashboard");
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[url(./from_bg.png)] bg-no-repeat bg-center bg-cover bg-fixed bg-[#FF9090] min-h-screen p-8 md:p-16">
      <form
        onSubmit={loginHandler}
        className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-15 md:items-center w-full p-6 md:p-10"
      >
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Sign In
          </h2>
          <div className="space-y-4">
            {/* Email Field */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 focus-within:border-[#FF9090] transition-colors">
              <MdEmail className="text-gray-500 mr-3 text-lg" />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 focus-within:border-[#FF9090] transition-colors">
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 h-4 w-4 accent-[#FF9090]"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I agree to the terms and conditions
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#FF9090] hover:bg-[#e57d7d] text-white py-3 px-6 rounded-lg w-full transition-colors duration-300 font-medium flex items-center justify-center ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <LuLoaderCircle className="animate-spin mr-2 text-lg" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>

          {/* Register Link */}
          <span className="text-gray-600 mt-5 text-sm text-center block">
            Don’t have an account?
            <Link
              to="/register"
              className="text-[#FF9090] font-medium hover:underline ml-1"
            >
              Create One
            </Link>
          </span>
        </div>

        {/* Right-side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.login_image}
            alt="login illustration"
            className="w-full h-full max-w-md object-cover"
          />
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
