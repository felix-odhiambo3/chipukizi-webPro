import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const PublicLayout = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default PublicLayout;
