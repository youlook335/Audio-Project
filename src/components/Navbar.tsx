import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold">YT Player</span>
        </Link>

        {/* Navigation + Search Bar */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
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
            className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
