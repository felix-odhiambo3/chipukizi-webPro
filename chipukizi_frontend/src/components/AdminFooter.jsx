import React from 'react';

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {currentYear} Chipukizi VOD Cooperative Society Limited. Admin Panel.
        </p>
      </div>
    </footer>
  );
};

export default AdminFooter;
