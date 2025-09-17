import React from 'react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <p className="mb-4">Welcome, {user?.username}!</p>
      <p className="mb-4">This is your personal dashboard. Here you can manage your account and view your activities.</p>
      <Button onClick={handleLogout} variant="outline">Logout</Button>
    </div>
  );
};

export default UserDashboard;
