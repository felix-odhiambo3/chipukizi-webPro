import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // ensure logout completes
      setIsUserMenuOpen(false);
      navigate('/'); // redirect to home after logout
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Media', path: '/media' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' },
    // { name: 'CSR Stories', path: '/csr' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{ background: 'linear-gradient(135deg, #2c5aa0, #1e3f73)' }}
      className="shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Site Name */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-yellow-300 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons / Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="text-white"
                >
                  {user?.first_name || user?.username}
                </Button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Profile Settings
                    </Link>
                    {user?.roles?.some(role => role.name === 'admin') && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button asChild className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                  <Link to="/login">Log In</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </Button>
          </div>
        </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-br from-[#2c5aa0] to-[#1e3f73] rounded-lg mt-2">
                <PartnersMenu navItems={navItems} setIsMenuOpen={setIsMenuOpen} />
              </div>
            </div>
          )}
=======

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PartnersMenu({ navItems, setIsMenuOpen }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <>
      {navItems.map((item) => {
        if (item.name === 'Partners') {
          return (
            <div key={item.name} className="relative">
              <div
                className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:underline cursor-pointer"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              >
                <span>{item.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSubMenuOpen(!isSubMenuOpen);
                  }}
                  className="ml-2 text-white focus:outline-none"
                  aria-label="Toggle Partners submenu"
                >
                  {isSubMenuOpen ? '-' : '+'}
                </button>
              </div>
              {isSubMenuOpen && (
                <div className="pl-6 mt-1 space-y-1">
                  <Link
                    to="/partners"
                    className="block text-white hover:text-yellow-400 hover:underline px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Partners
                  </Link>
                  <Link
                    to="/partner"
                    className="block text-white hover:text-yellow-400 hover:underline px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partner With Us
                  </Link>
                  <Link
                    to="/ways-to-partner"
                    className="block text-white hover:text-yellow-400 hover:underline px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ways to Partner With Us
                  </Link>
                </div>
              )}
            </div>
          );
        }
        return (
          <Link
            key={item.name}
            to={item.path}
            className="text-white hover:text-yellow-400 hover:underline block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}

      </div>
    </header>
  );
};

export default Header;
