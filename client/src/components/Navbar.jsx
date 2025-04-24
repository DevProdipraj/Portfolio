import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-transform duration-500 ease-in-out   backdrop-blur-lg ${
        showNavbar ? "lg:translate-y-8" : "-translate-y-full"
      }`}
    >
      <div className="   bg-[#0a0a1a]/90 backdrop-blur-lg mx-auto max-w-[1280px] px-4 sm:px-6 rounded-xl flex items-center justify-between border border-white/10">
        {/* Logo */}
        <div>
          <a href="#">
          <img
            className=" w-2/3 md:w-3/3  h-2/3"
            src="./Logo.svg"
            alt="Brand Icon"
          />
          </a>
         
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center text-white gap-x-6">
            <a href="#work" className="cursor-pointer text-[#2563eb]">
              Work
            </a>
            <a href="#service" className="cursor-pointer text-[#2563eb]">
              Service
            </a>
            <a href="#about" className="cursor-pointer text-[#2563eb]">
              About
            </a>
            <a href="#contact" className="cursor-pointer text-[#2563eb]">
              Contact
            </a>
            <a href="#contact">
              <input
                className="px-5 py-2 lg:px-6 lg:py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all cursor-pointer"
                type="button"
                value="Say Hello 👋"
              />
            </a>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {isOpen ? (
            <FiX className="text-2xl" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
      {/* mobile menu  */}
      <div
        className={`md:hidden fixed top-0 left-0 h-[100vh]  w-3/4 sm:w-1/2 bg-[#0a0a1a]/90 backdrop-blur-lg border-r border-white/10 px-6 py-6 space-y-4 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div>
          <img className="h-2/3" src="./Logo.svg" alt="Brand Icon" />
        </div>
        <a
          href="#work"
          onClick={() => setIsOpen(false)}
          className="block text-[#2563eb]"
        >
          Work
        </a>
        <a
          href="#service"
          onClick={() => setIsOpen(false)}
          className="block text-[#2563eb]"
        >
          Service
        </a>
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="block text-[#2563eb]"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="block text-[#2563eb]"
        >
          Contact
        </a>  
        <a href="#contact"
        onClick={() => setIsOpen(false)}
        >
          <input
            className="px-5 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all cursor-pointer"
            type="button"
            value="Say Hello 👋"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
