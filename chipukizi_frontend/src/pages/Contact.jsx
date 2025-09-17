import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Kenya's Creative Experts Today</h1>
          <p>
            We're here to help with all your digital marketing and creative
            content needs. Contact us today for expert advice, free
            consultations, or to schedule a session.
          </p>
          <button className="cta-button">
            <a href="/contactform">Get Started!</a>
          </button>
          {/* Removed Test Error button */}
        </div>
      </section>

      {/* Contact Introduction */}
      <section className="contact-intro">
        <div className="container">
          <p>
            We're here to help with all your creative and digital marketing
            needs. Contact us today for expert advice, free consultations, or to
            schedule training sessions.
          </p>
        </div>
      </section>

      {/* Our Creative Services Section */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Creative & Digital Marketing Services</h2>
          <div className="services-preview-grid">
            <div className="service-preview-item">
              <i className="fas fa-video"></i>
              <h3>Video Production</h3>
              <p>
                Professional video content creation for marketing and educational
                purposes
              </p>
            </div>
            <div className="service-preview-item">
              <i className="fas fa-bullhorn"></i>
              <h3>Digital Marketing</h3>
              <p>Strategic social media campaigns and brand promotion</p>
            </div>
            <div className="service-preview-item">
              <i className="fas fa-users"></i>
              <h3>Youth Training</h3>
              <p>Skills development programs for creative professionals</p>
            </div>
            <div className="service-preview-item">
              <i className="fas fa-star"></i>
              <h3>Content Creation</h3>
              <p>Engaging content that educates and inspires audiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact">
        <div className="container">
          <div className="contact-grid">
            {/* Connect With Us */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-share-alt"></i>
              </div>
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/ChipukiziEntertainment"
                  className="fa fa-facebook"
                  aria-label="Facebook"
                ></a>
                <a
                  href="https://www.youtube.com/@chipukizivoiceofdrama5137"
                  className="fa fa-youtube"
                  aria-label="YouTube"
                ></a>
                <a href="https://www.tiktok.com/@chipukizivoiceofdrama?_t=ZM-8xL8gAQ77Ha&_r=1" 
                  className="fa fa-tiktok"
                  aria-label="TikTok" target="_blank" rel="noopener noreferrer"></a>
                <a href="#" className="fa fa-instagram" aria-label="Instagram"></a>
              </div>
            </div>

            {/* Main Office & Training Center */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Main Office & Training Center</h3>
              <p>
                <strong>Address:</strong> Nairobi, Kenya
              </p>
              <p>Visit our creative hub and training facilities</p>
            </div>

            {/* Phone */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Phone</h3>
              <p>
                <strong>General Inquiries:</strong>
              </p>
              <p>
                <a href="tel:+254725710350">+254 725 710 350</a>
              </p>
              <p>
                <strong>Training Programs:</strong>
              </p>
              <p>
                <a href="tel:+254725710350">+254 725 710 350</a>
              </p>
              <p>
                <strong>Marketing Services:</strong>
              </p>
              <p>
                <a href="tel:+254725710350">+254 725 710 350</a>
              </p>
            </div>

            {/* Business Hours */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Business Hours</h3>
              <p>
                <strong>Monday-Friday:</strong> 8am - 6pm
              </p>
              <p>
                <strong>Saturday:</strong> 9am - 4pm
              </p>
              <p>
                <strong>Sunday:</strong> Closed
              </p>
            </div>

            {/* Email */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>
                <strong>General:</strong>
              </p>
              <p>
                <a href="mailto:voiceofdramacoop@gmail.com">
                  voiceofdramacoop@gmail.com
                </a>
              </p>
              <p>
                <strong>Training:</strong>
              </p>
              <p>
                <a href="voiceofdramacoop@gmail.com">
                  voiceofdramacoop@gmail.com
                </a>
              </p>
              <p>
                <strong>Marketing:</strong>
              </p>
              <p>
                <a href="mailto:voiceofdramacoop@gmail.com">
                  voiceofdramacoop@gmail.com
                </a>
              </p>
            </div>

            {/* Registration Info */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Registration Info</h3>
              <p>
                <strong>Cooperative Society Registration:</strong>
              </p>
              <p>Registered under the Kenyan Cooperative Act</p>
              <p>
                <strong>License #:</strong> VOD-COOP-2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <h2>Schedule Training or Request a Consultation</h2>
          <form className="contact-form" id="contactForm">
            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="organization">Organization/Company</label>
                <input type="text" id="organization" name="organization" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="service">Service Type *</label>
                <select id="service" name="service" required>
                  <option value="">Select a service...</option>
                  <option value="video-production">Video Production</option>
                  <option value="digital-marketing">
                    Digital Marketing Campaign
                  </option>
                  <option value="youth-training">Youth Training Program</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="brand-promotion">Brand Promotion</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project or training needs..."
                ></textarea>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-method">Preferred Contact Method</label>
                <select id="contact-method" name="contact-method">
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="preferred-time">Preferred Time</label>
                <select id="preferred-time" name="preferred-time">
                  <option value="morning">Morning (8am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-5pm)</option>
                  <option value="evening">Evening (5pm-7pm)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Our Location</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <h3>Nairobi, Kenya</h3>
              <p>Visit our creative hub and training facilities</p>
              <button className="map-btn">Get Directions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
