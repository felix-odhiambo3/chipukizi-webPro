import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import PublicLayout from './components/PublicLayout.jsx';
import AdminLayout from './components/AdminLayout.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Media from './pages/Media.jsx';
import Booknow from './pages/Booknow.jsx';
import Register from './pages/Register.jsx';
import Contact from './pages/Contact.jsx';
import Partner from './pages/Partner.jsx';
import Events from './pages/Events.jsx';
import Login from './pages/Login.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import NotFound from './pages/NotFound.jsx';
import ContactForm from './pages/ContactForm.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard type="media" />} />
            <Route path="bookings" element={<AdminDashboard type="bookings" />} />
          </Route>
          <Route path="/user" element={
            <ProtectedRoute requiredRole="user">
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
                  <UserDashboard />
                </main>
                <Footer />
              </>
            </ProtectedRoute>
          } />
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="media" element={<Media />} />
            <Route path="register" element={<Register />} />
            <Route path="booknow" element={<Booknow />} />
            <Route path="contact" element={<Contact />} />
            <Route path="partners" element={<Partner />} />
            <Route path="events" element={<Events />} />
            <Route path="login" element={<Login />} />
            <Route path="contactform" element={<ContactForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
