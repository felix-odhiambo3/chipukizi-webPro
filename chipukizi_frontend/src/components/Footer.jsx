import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTiktok, FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 overflow-hidden flex-shrink-0 rounded-md shadow">
                <img
                  src="/images/web.1.jpg"
                  alt="Chipukizi logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Chipukizi VOD</h3>
                <p className="text-sm text-gray-400">Voice of Drama</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              A youth-owned and run worker cooperative society promoting brands and providing 
              professional, customized entertainment that educates, informs, and inspires.
            </p>
            {/* Social Media Feed */}
            <div className="social-media bg-gray-100 py-8">
              <div className="social-container max-w-4xl mx-auto text-center">
                <h3 className="font-bold text-xl mb-4">Follow Us on Social Media</h3>
                <div className="social-icons flex justify-center gap-6 text-2xl">
                  <a href="https://www.youtube.com/watch?v=6UN8Tg-71Hg" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-red-600" /></a>
                  <a href="https://www.facebook.com/ChipukiziEntertainment" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-blue-600" /></a>
                  <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-pink-500" /></a>
                  <a href="https://www.tiktok.com/@chipukizivoiceofdrama?_t=ZM-8xL8gAQ77Ha&_r=1" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><FaTiktok className="text-black" /></a>
                  <a href="" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-blue-700" /></a>
                  <a href="https://x.com/drama_voice?t=WSBdb8YGtaBdasNwWZdnSg&s=08" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-blue-400" /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white hover:text-yellow-400 hover:underline px-3 py-2 text-sm font-medium transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white hover:text-yellow-400 hover:underline px-3 py-2 text-sm font-medium transition-all duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-yellow-400 hover:underline px-3 py-2 text-sm font-medium transition-all duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-white hover:text-yellow-400 hover:underline px-3 py-2 text-sm font-medium transition-all duration-200">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-white hover:text-yellow-400 hover:underline px-3 py-2 text-sm font-medium transition-all duration-200">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Drama & Plays</li>
              <li>Music & Dance</li>
              <li>Poetry & Spoken Word</li>
              <li>Adverts & Commercials</li>
              <li>Ushering Services</li>
              <li>Videography</li>
              <li>Public Address System</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  The Co-operative University of Kenya, Karen<br />
                  About 20km from Nairobi CBD, off Lang'ata Road <br/>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p><a href="tel:+254725710350">+254 725 710 350</a></p>
                  <p><a href="tel:+254782909349">+254 782 909 349</a></p> 
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm"><a href="mailto:voiceofdramacoop@gmail.com">voiceofdramacoop@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p>
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.6833763739523!2d36.725379174965795!3d-1.366653998620414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjEnNjAuMCJTIDM2wrA0Myc0MC42IkU!5e0!3m2!1sen!2ske!4v1753279855967!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chipukizi Location"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Chipukizi VOD Cooperative Society Limited. All rights reserved. <br />
              Powered by <a className="text-white hover:text-yellow-400 hover:underline px-3 py-2 text-sm font-medium transition-all duration-200" href="#">Fel@frika Technologies</a>
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for youth empowerment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;