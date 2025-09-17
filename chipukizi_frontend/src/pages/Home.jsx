import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// FontAwesome icons (using CDN in HTML, but in React use react-icons or similar)
import { FaCalendarCheck, FaVideo, FaGraduationCap } from 'react-icons/fa';

const Home = () => {

  return (
    <div>
{/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="hero py-16"
          style={{ backgroundImage: "url('/images/web.4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="hero-content max-w-4xl mx-auto text-center space-y-6 text-white-500">
            <div className="bg-black/50 p-6 rounded-lg inline-block">
              <h1 className="text-4xl font-bold mb-4">Chipukizi VOD Co-operative Society</h1>
              <div className="hero-description mb-6">
                <p>
                  Chipukizi VOD (Voice of Drama) Co-operative Society Limited is a youth-owned and run worker co-operative society registered under the Kenyan Co-operative Act. We promote brands and provide professional, customized entertainment that educates, informs, and inspires. We identify and train talented unemployed youth, polish their skills, and deliver meaningful content together as a team.
                </p>
              </div>
            </div>
            {/* Call-to-Action Buttons */}
            <div className="cta-buttons flex flex-wrap gap-4 justify-center">
              <Link to="/login" className="cta-btn primary bg-purple-600 text-white px-6 py-2 rounded font-bold shadow hover:bg-purple-700">Join Us</Link>
              <Link to="#partner" className="cta-btn secondary bg-blue-600 text-white px-6 py-2 rounded font-bold shadow hover:bg-blue-700">Partner With Us</Link>
              <Link to="/services" className="cta-btn tertiary bg-gray-100 text-purple-700 px-6 py-2 rounded font-bold shadow hover:bg-purple-200">View Services</Link>
              <Link to="/booknow" className="cta-btn primary bg-purple-600 text-white px-6 py-2 rounded font-bold shadow hover:bg-purple-700">Book Now</Link>
              <Link to="/contact" className="cta-btn secondary bg-blue-600 text-white px-6 py-2 rounded font-bold shadow hover:bg-blue-700">Contact Us</Link>
              {/* Temporary test button to simulate error */}
              {/* Removed Test Error button */}
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="updates-section py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="section-title text-3xl font-bold text-center mb-8">Latest Updates</h2>
            <div className="updates-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="update-card bg-white rounded-lg shadow p-6 flex flex-col items-center">
                <div className="update-icon text-purple-600 text-3xl mb-2">
                  <FaCalendarCheck />
                </div>
                <div className="update-content text-center">
                  <h3 className="font-bold text-lg mb-2">Talent Drama Show</h3>
                  <p className="text-gray-600 mb-2">
                    Successfully hosted "Love Edition Season 5" at The Cooperative University of Kenya on 28th February 2025
                  </p>
                  {/* <img src="" alt="" /> */}
                </div>
              </div>
              <div className="update-card bg-white rounded-lg shadow p-6 flex flex-col items-center">
                <div className="update-icon text-purple-600 text-3xl mb-2">
                  <FaVideo />
                </div>
                <div className="update-content text-center">
                  <h3 className="font-bold text-lg mb-2">Weekly Content</h3>
                  <p className="text-gray-600 mb-2">
                    New drama skits and spoken word pieces uploaded weekly on our social media platforms
                  </p>
                </div>
              </div>
              <div className="update-card bg-white rounded-lg shadow p-6 flex flex-col items-center">
                <div className="update-icon text-purple-600 text-3xl mb-2">
                  <FaGraduationCap />
                </div>
                <div className="update-content text-center">
                  <h3 className="font-bold text-lg mb-2">Mentorship Program</h3>
                  <p className="text-gray-600 mb-2">
                    Launching a new creative arts mentorship program this quarter for aspiring young artists
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Message Section */}
        <section className="welcome-section py-16 bg-transparent">
          <div className="container max-w-6xl mx-auto">
            <h2 className="section-title text-2xl font-bold mb-4 text-white">Welcome Message</h2>
            <div className="welcome-content flex flex-row items-center gap-4">
              </div>
                <div className="welcome-image flex-shrink-0">
                  <img src="/images/chairperson.jpg" alt="Professional team at work" className="rounded-lg w-64 h-64 object-contain" />
                </div>
            </div>
              <div className="welcome-text flex-1 text-left space-y-6 text-white">
                <div className="p-6 rounded-lg inline-block bg-black/50">
                <p>
                  I am delighted to extend a warm welcome to you on behalf of Chipukizi VOD Cooperative Society, a premier platform dedicated to empowering upcoming talented individuals and fostering creative excellence in the digital marketing landscape.
                </p>
                <p>
                  At Chipukizi VOD, we recognize the importance of nurturing creativity and innovation in today's competitive digital world. Our state-of-the-art video production facilities, cutting-edge marketing strategies, and industry-relevant services ensure that our clients and partners receive comprehensive support that aligns with the demands of the modern marketplace.
                </p>
                <p>
                  We specialize in marketing products through engaging video clips and strategic social media campaigns, helping businesses reach their target audiences effectively while providing opportunities for talented individuals to showcase their skills.
                </p>
                <div className="signature mt-4">
                  <p><strong>John Njuguna Maina</strong></p>
                  <p>Chairperson</p>
                  </div>
                </div>
              
          </div>
        </section>

        {/* Past Clients Section */}
        <section className="clients-section py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="section-title text-2xl font-bold mb-4">Past Clients & Partners</h2>
            <div className="clients-content">
              <div className="clients-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="client-item bg-white rounded shadow p-4">
                  <h4 className="font-bold">Global Communities</h4>
                  <p>CLEAR Program</p>
                </div>
                <div className="client-item bg-white rounded shadow p-4">
                  <h4 className="font-bold">Co-operative Alliance of Kenya</h4>
                  <p>CAK</p>
                </div>
                <div className="client-item bg-white rounded shadow p-4">
                  <h4 className="font-bold">International Co-operative Alliance</h4>
                  <p>ICA</p>
                </div>
                <div className="client-item bg-white rounded shadow p-4">
                  <h4 className="font-bold">Nairobi County</h4>
                  <p>Ushirika Day Celebrations</p>
                </div>
                <div className="client-item bg-white rounded shadow p-4">
                  <h4 className="font-bold">The Co-operative University</h4>
                  <p>of Kenya</p>
                </div>
                <div className="client-item bg-white rounded shadow p-4">
                  <h4 className="font-bold">NAWAKA CBO</h4>
                  <p>Community Organization</p>
                </div>
                <div className="client-item bg-white rounded shadow p-4">
                  <h4 className="font-bold">PCEA Karen Parish</h4>
                  <p>Religious Institution</p>
                </div>
                <div className="client-item bg-white rounded shadow p-4">
                  <h4 className="font-bold">Private Events</h4>
                  <p>City Weddings, Birthdays & More</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        
      </main>
    </div>
  );
};

export default Home;