import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 hover:underline text-lg">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
