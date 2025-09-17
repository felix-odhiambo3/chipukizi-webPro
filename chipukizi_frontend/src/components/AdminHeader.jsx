import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '@/contexts/AuthContext.jsx';

const AdminHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/admin" className="flex items-center space-x-2">
          <div className="w-10 h-10 overflow-hidden flex-shrink-0 rounded-md shadow">
            <img
              src="/images/web.1.jpg"
              alt="Chipukizi logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-white text-lg">Admin Panel</h1>
          </div>
        </Link>
        <nav className="flex space-x-6 items-center">
          <Link to="/admin" className="hover:underline font-semibold">
            Manage Media
          </Link>
          <Link to="/admin/bookings" className="hover:underline font-semibold">
            Bookings
          </Link>
          <Button
            onClick={handleLogout}
            size="sm"
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Logout
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
