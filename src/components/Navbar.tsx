import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md fixed top-0 left-0 w-full z-50 h-">
      <div className="container-fluid mx-auto flex items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-2xl font-bold tracking-wide">Bootpress</span>
        </Link>

        {/* Navigation + Search Bar */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-lg font-medium">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/songs" className="hover:text-yellow-400">Songs</Link></li>
            <li><Link to="/naats" className="hover:text-yellow-400">Naats</Link></li>
            <li><Link to="/dramas" className="hover:text-yellow-400">Dramas</Link></li>
            <li><Link to="/films" className="hover:text-yellow-400">Films</Link></li>
            <li><Link to="/live" className="hover:text-yellow-400">Live</Link></li>
          </ul>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 p-4 mt-2 rounded-lg`}>
        <ul className="flex flex-col space-y-2 text-center text-lg font-medium">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/songs" className="hover:text-yellow-400">Songs</Link></li>
          <li><Link to="/naats" className="hover:text-yellow-400">Naats</Link></li>
          <li><Link to="/dramas" className="hover:text-yellow-400">Dramas</Link></li>
          <li><Link to="/films" className="hover:text-yellow-400">Films</Link></li>
          <li><Link to="/live" className="hover:text-yellow-400">Live</Link></li>
        </ul>

        {/* Mobile Search Bar */}
        <div className="mt-3">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
