import React, { useState, useEffect } from "react";
import { RiMenuAddFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 1, text: "HOME", target: "HOME" },
    { id: 2, text: "ABOUT", target: "ABOUT" },
    { id: 3, text: "PORTFOLIO", target: "PORTFOLIO" },
    { id: 4, text: "EXPERIENCE", target: "EXPERIENCE" },
    { id: 5, text: "CONTACTS", target: "CONTACTS" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the navbar and mobile menu
      const navbar = document.querySelector('.navbar-container');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (menuOpen && 
          !navbar.contains(event.target) && 
          !mobileMenu.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = (e) => {
    // Prevent event bubbling to avoid immediate closing
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (text, target) => {
    setActiveLink(text);
    
    if (menuOpen) {
      setTimeout(() => {
        setMenuOpen(false);
      }, 500);
    }

    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav className={`navbar-container sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="h-14 w-14 rounded-full border-2 border-gray-300 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
              VC
            </div>
            <div>
              <h2 className="font-bold text-lg cursor-pointer">
                Vikash <span className="text-500">Chaudhary</span>
              </h2>
              <p className="text-blue-500 text-sm">Web Developer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {navItems.map(({ id, text, target }) => (
              <li key={id} className="relative group">
                <button
                  onClick={() => handleLinkClick(text, target)}
                  className={`px-3 py-2 cursor-pointer transition-all duration-300 font-semibold ${
                    activeLink === text ? "text-red-600" : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {text}
                </button>
                <span 
                  className={`absolute left-0 -bottom-1 w-0 h-1 bg-red-500 rounded-full group-hover:w-full transition-all duration-300 ${
                    activeLink === text ? "w-full" : ""
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 z-50 relative"
              aria-label="Toggle menu"
            >
              {menuOpen ? <RxCross2 size={25} /> : <RiMenuAddFill size={25} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu md:hidden fixed left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out z-40 ${
            menuOpen 
              ? " opacity-100 visible" 
              : "-top-full opacity-0 invisible"
          }`}
          style={{
            height: menuOpen ? 'calc(100vh - 80px)' : '0'
          }}
        >
          <div className="flex flex-col h-full">
            <ul className="flex flex-col space-y-1 p-4">
              {navItems.map(({ id, text, target }) => (
                <li key={id}>
                  <button
                    onClick={() => handleLinkClick(text, target)}
                    className={`w-full text-left px-4 py-4 rounded-lg transition-all duration-200 font-semibold text-lg ${
                      activeLink === text 
                        ? "bg-red-100 text-red-600 border-l-4 border-red-500" 
                        : "text-gray-700 hover:bg-gray-100 hover:text-red-600"
                    }`}
                  >
                    {text}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="flex-1 bg-gray-50 p-4 mt-auto">
              <div className="text-center text-gray-500 text-sm">
                © 2024 Vikash Chaudhary
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu - Only show when menu is open */}
        {menuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;