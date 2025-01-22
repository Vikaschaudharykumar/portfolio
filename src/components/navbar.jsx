import React, { useState } from 'react';
import pic from "../../public/image.jpg"; 
import { RiMenuAddFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Corrected unique id values in the navItenm array
  const navItenm = [
    {
      id: 1,
      text: 'HOME'
    },
    {
      id: 2,
      text: 'ABOUT'
    },
    {
      id: 3,
      text: 'PORTFOLIO'
    },
    {
      id: 4,
      text: 'EXPERIENCE'
    },
    {
      id: 5,
      text: 'CONTACTS'
    }
  ];

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='flex justify-between items-center h-20'>
          <div className='flex space-x-2'>  
            <img src={pic} className="h-14 w-14 rounded-full" alt="Vikash" />
            <h2 className='font-semibold text-sm cursor-pointer mt-2'>
              Vikash <span className="text-red-500">Chaudhary</span>
              <p className='text-green-500'>Web Developer</p>
            </h2>
          </div>
          <div>
            <ul className='hidden md:flex space-x-7'>
              {
                navItenm.map(({ id, text }) => (              
                  <li className='hover:text-red-600 scale-105 duration-200 cursor-pointer' key={id}>
                    <Link to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass='active'
                      onClick={handleLinkClick}
                    >
                      {text}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={toggleMenu}>
              {menuOpen ? <RxCross2 size={30} /> : <RiMenuAddFill size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile navbar */}
        {menuOpen && (
          <div className="md:hidden">
            <ul className='space-y-4'>
              {
                navItenm.map(({ id, text }) => (               
                  <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                    <Link to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass='active'
                      onClick={handleLinkClick} // Close the menu on click
                    >
                      {text}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
