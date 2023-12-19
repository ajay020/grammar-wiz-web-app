// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Name */}
        <Link to="/" className="text-white text-xl font-bold">
          English Grammar Wiz
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li className="text-white">
            <Link to="/grammar">Grammar Home</Link>
          </li>
          <li className="text-white">
            <Link to="/about">About Us</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
