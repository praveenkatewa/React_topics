import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem('data'));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (storedUser?.email === email && storedUser?.password === password) {
      alert('Login successful!');

      // Store user info in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify({
        name: storedUser.name,
        phone: storedUser.phone
      }));

      // Store the login time
      const currentTime = new Date().toLocaleString();
      localStorage.setItem("loginTime", currentTime);

      navigate('/Display');
    } else {
      alert('Email or password is incorrect.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black-100">
      <div className="w-full max-w-md bg-gray p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="formEmail" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="formEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="formPassword" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="formPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
