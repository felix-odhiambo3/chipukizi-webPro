import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader.jsx';
import AdminFooter from './AdminFooter.jsx';

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <main
        className="min-h-[70vh]"
        style={{
          backgroundImage: 'url(/images/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Outlet />
      </main>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
