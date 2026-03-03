import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-[#fff] shadow-sm border-b border-b-[#324E91]/80"
          : "text-white bg-[#000]/40"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-10 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center py-3">
          {/* Desktop */}
          <img
            src={isScrolled ? "/Desktop-Black Logos.png" : "/white logo.png"}
            alt="Train Driver Logo"
            className={`hidden md:block transition-all duration-300 ${
              isScrolled ? "w-52" : "w-60 pt-3"
            }`}
          />

          {/* Mobile */}
          <img
            src={isScrolled ? "/Desktop-Black Logos.png" : "/white logo.png"}
            alt="Train Driver Logo"
            className="block md:hidden w-44 z-10 transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-sm tracking-wide items-center">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Courses", path: "/courses" },
            { name: "Mock Interviews", path: "/mock-interviews" },
            { name: "FAQ", path: "/faqs" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-bold hover:text-[#324E91] hover:border-b-2 border-[#324E91] transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact-us"
            className="px-6 py-3 bg-[#324E91] text-white shadow font-bold"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-3xl z-50 transition-colors ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-full bg-[#E6E6F6] transform transition-transform duration-500 py-24 px-6 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-4 text-sm">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Courses", path: "/courses" },
            { name: "Mock Interviews", path: "/mock-interviews" },
            { name: "FAQ", path: "/faqs" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 font-bold border-b border-black/10 hover:text-[#324E91] transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <Link
            to="/contact-us"
            onClick={() => setOpen(false)}
            className="inline-block mt-6 px-6 py-3 bg-[#324E91] text-white font-bold shadow"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
