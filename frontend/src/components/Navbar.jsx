import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiSettings,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FiHome className="mr-2" /> },
    { name: "Create", path: "/create", icon: <FiUser className="mr-2" /> },
    { name: "Services",path: "/service",icon: <FiSettings className="mr-2" />},
    { name: "Contact", path: "/contact", icon: <FiMail className="mr-2" /> },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between z-50 backdrop-blur-md bg-white/10 border-b border-white/500 ">
      {/* Logo/Brand */}
      <div className="px-6 py-4 text-xl font-bold text-black">Study-Help</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <ul className="flex space-x-1 pr-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center px-4 py-3 text-black/90 hover:text-black hover:bg-white/10 rounded-lg transition-all"
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-3 mr-4 text-black focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/5 backdrop-blur-lg border-t border-white/10 md:hidden">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-white/10 last:border-b-0"
              >
                <Link
                  to={item.path}
                  className="flex items-center px-6 py-4 text-black hover:bg-white/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
