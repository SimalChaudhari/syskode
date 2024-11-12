import { Link } from 'react-router-dom';
import { useState } from 'react';
import SyskodeLogo from "../../assets/images/SyskodeLogo.png";
import { CgClose, CgMenuLeft } from 'react-icons/cg';

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array of navigation links
  const menuItems = [
    { name: 'HOME', to: '/' },
    { name: 'OUR SERVICES', to: '/our-services' },
    { name: 'INDUSTRIES', to: '/industries' },
    { name: 'ZOHO', to: '/zoho' },
    { name: 'COMPANY', to: '/company' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-lg border-b-2 border-black relative">
      <nav className="container mx-auto flex justify-between items-center max-w-webContainer lg:px-0 md:px-5">
        <img src={SyskodeLogo} alt="logo" className="lg:ml-0 ml-3 w-[175px]" />

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center cursor-pointer lg:mr-0 mr-3" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CgClose className="text-3xl" />
          ) : (
            <CgMenuLeft className="text-3xl" />
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link key={item.to} to={item.to} className="text-lg text-custome-black font-bold hover:text-gray-400 transition-all py-8">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Fullscreen Mobile Menu from Right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-white p-8 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <CgClose className="text-3xl text-black cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start mt-10 space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-2xl text-black font-bold hover:text-gray-400 transition-all"
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
