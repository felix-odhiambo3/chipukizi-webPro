import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [partnerDropdown, setPartnerDropdown] = useState(false);

  // Optional: Use navigate for selectable dropdown links
  const navigate = useNavigate();

  const partnerOptions = [
    { label: 'Our Partners', path: '/partners/our-partners' },
    { label: 'Partner With Us', path: '/partners/partner-with-us' },
    { label: 'Ways to Partner With Us', path: '/partners/ways-to-partner' },
  ];

  return (
    <header className="bg-purple-700 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 overflow-hidden flex-shrink-0 rounded-md shadow">
            <img
              src="/images/web.1.jpg"
              alt="Chipukizi logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-white text-lg">Chipukizi VOD Co-operative Society</h1>
          </div>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <h1 className="font-bold"><Link to="/" className="hover:underline">Home</Link></h1>
          <h1 className="font-bold"><Link to="/services" className="hover:underline">Services</Link></h1>
          <h1 className="font-bold"><Link to="/about" className="hover:underline">About</Link></h1>
          <div
            className="relative"
            onMouseEnter={() => setPartnerDropdown(true)}
            onMouseLeave={() => setPartnerDropdown(false)}
          >
            <h1 className="font-bold cursor-pointer"><Link to="/partners" className="hover:underline">Partners</Link></h1>
            {partnerDropdown && (
              <div className="absolute left-0 mt-2 bg-white text-purple-700 rounded shadow-lg z-10 min-w-[200px]">
                {partnerOptions.map(option => (
                  <button
                    key={option.path}
                    className="block w-full text-left px-4 py-2 hover:bg-purple-100 font-bold cursor-pointer"
                    onClick={() => {
                      setPartnerDropdown(false);
                      navigate(option.path);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <h1 className="font-bold"><Link to="/events" className="hover:underline">Events</Link></h1>
          <h1 className="font-bold"><Link to="/media" className="hover:underline">Media</Link></h1>
          <h1 className="font-bold"><Link to="/contact" className="hover:underline">Contact</Link></h1>
          <Button
            asChild
            size="sm"
            className="bg-yellow-400 text-yellow-900 font-semibold border-none"
          >
            <Link to="/login">Login</Link>
          </Button>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-purple-800 px-4 py-2 space-y-2">
          <h1 className="font-bold"><Link to="/" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>Home</Link></h1>
          <h1 className="font-bold"><Link to="/services" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>Services</Link></h1>
          <h1 className="font-bold"><Link to="/about" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>About</Link></h1>
          <div className="relative">
            <h1 className="font-bold"><Link to="/partners" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>Partners</Link></h1>
            <div className="bg-white text-purple-700 rounded shadow-lg z-10 min-w-[200px]">
              {partnerOptions.map(option => (
                <button
                  key={option.path}
                  className="block w-full text-left px-4 py-2 hover:bg-purple-100 font-bold cursor-pointer"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(option.path);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <h1 className="font-bold"><Link to="/events" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>Events</Link></h1>
          <h1 className="font-bold"><Link to="/media" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>Media</Link></h1>
          <h1 className="font-bold"><Link to="/contact" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link></h1>
          <h1 className="font-bold"><Link to="/register" className="block py-2 hover:underline" onClick={() => setMenuOpen(false)}>Join Us</Link></h1>
          <Button
            asChild
            size="sm"
            className="w-full bg-yellow-400 text-yellow-900 font-semibold border-none mt-2"
          >
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;


