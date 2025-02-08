import React, { useState } from "react";

const LoginForm = ({ login }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://oro24world.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-app-id": "KYCTY",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? "Invalid email or password"
            : "Something went wrong. Please try again."
        );
      }

      const data = await response.json();

      if (data.status !== "Success") {
        setError(data.message || "Authentication failed. Please try again.");
        return;
      }
      login(data.token);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {error && (
        <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
      )}
      <div className="mb-4">
        <input
          className="border rounded w-full py-2 px-3 text-black font-normal bg-[#EAF0FD] leading-tight focus:outline-double focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Please Enter Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isLoading}
        />
      </div>
      <div className="mb-4">
        <input
          className="border rounded w-full py-2 px-3 text-black bg-[#EAF0FD] mb-3 leading-tight focus:outline-double focus:shadow-outline"
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Please Enter Your Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          disabled={isLoading}
        />
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="show_pwd"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
            disabled={isLoading}
          />
          <label
            htmlFor="show_pwd"
            className="text-gray-800 font-semibold text-sm"
          >
            Show Password
          </label>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <label
              htmlFor="rememberMe"
              className="text-gray-800 font-semibold text-sm"
            >
              Remember Me
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <button
          className={`bg-[#61ACCB] transition hover:shadow-gray-500 hover:shadow-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </div>
      <div className="my-4 text-xs text-gray-600">
        <p>
          Want to be a partner with ORO24?
          <span className="pl-1">
            <a
              className="text-[#B23280] hover:text-gray-800 text-xs font-semibold"
              href="#"
            >
              Register Now
            </a>
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
