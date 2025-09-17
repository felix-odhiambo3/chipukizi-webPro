import React from 'react';
import './About.css';

// For icons, use react-icons (FontAwesome)
import { FaBullseye, FaEye, FaVideo, FaBullhorn, FaUsers, FaStar, FaHandshake, FaGraduationCap, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa';

const About = () => (
  <>
    {/* About Us Hero Section */}
    <section className="about-hero">
      <div className="about-hero-content">
        <h1>About Chipukizi VOD Cooperative Society</h1>
        <p>Empowering Youth Through Creative Excellence Since Our Foundation</p>
      </div>
    </section>

    {/* Main About Content */}
    <main className="about-main">
      <div className="container">
        {/* Our Story Section */}
        <section className="about-section">
          <h2 className="section-title">Our Story</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Established as a pioneering force in Kenya's entertainment and digital marketing landscape, Chipukizi VOD (Voice of Drama) Cooperative Society Limited is the region's premier choice for creative content production, digital marketing, and youth empowerment initiatives. We are a registered cooperative society under the Kenyan Cooperative Act, fully licensed and insured, providing comprehensive entertainment and marketing solutions to clients across East Africa.</p>
              <p>As one of Kenya's most innovative youth-driven cooperatives, we are the local experts in video production, social media marketing, brand promotion, and talent development. We provide content creation, marketing campaigns, and training services for individuals, businesses, and organizations throughout Kenya and beyond. Our creative hub, training facilities, and well-equipped production studio are strategically located in Kenya, enabling us to provide fast, professional services to clients across the region.</p>
              <p>We regularly collaborate with numerous well-known brands, local businesses, NGOs, educational institutions, government agencies, and international organizations. These partners count on Chipukizi VOD Cooperative Society for their digital marketing and entertainment needs, and you can too!</p>
            </div>
            <div className="about-image">
              <img src="/images/chairperson.jpg" alt="Chipukizi VOD Team" />
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="mission-vision">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <FaBullseye />
              <h3>Our Mission</h3>
              <p>To inform, entertain, and promote societal values by empowering youth through professional and decent creative performances that inspire, educate, and uplift.</p>
            </div>
            <div className="vision-card">
              <FaEye />
              <h3>Our Vision</h3>
              <p>To be the leading youth-powered entertainment and brand-promotion cooperative in Kenya, recognized for excellence, creativity, and transformative impact.</p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="values-section">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>Professionalism</h4>
              <p>We deliver high-quality, respectful performances.</p>
            </div>
            <div className="value-item">
              <h4>Creativity</h4>
              <p>We value originality and artistic expression.</p>
            </div>
            <div className="value-item">
              <h4>Teamwork</h4>
              <p>We grow and perform together as one co-op family.</p>
            </div>
            <div className="value-item">
              <h4>Empowerment</h4>
              <p>We transform young lives through skills and opportunities.</p>
            </div>
            <div className="value-item">
              <h4>Integrity</h4>
              <p>We honor commitments and uphold moral standards.</p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="services-overview">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            <div className="service-item">
              <FaVideo />
              <h4>Video Production</h4>
              <p>Professional video content creation for marketing, education, and entertainment purposes</p>
            </div>
            <div className="service-item">
              <FaBullhorn />
              <h4>Digital Marketing</h4>
              <p>Strategic social media campaigns and brand promotion across multiple platforms</p>
            </div>
            <div className="service-item">
              <FaUsers />
              <h4>Youth Training</h4>
              <p>Skills development programs for unemployed youth in media production and marketing</p>
            </div>
            <div className="service-item">
              <FaStar />
              <h4>Talent Development</h4>
              <p>Identifying and nurturing creative talent in drama, content creation, and digital arts</p>
            </div>
            <div className="service-item">
              <FaHandshake />
              <h4>Brand Partnerships</h4>
              <p>Collaborative marketing solutions that benefit both brands and our creative community</p>
            </div>
            <div className="service-item">
              <FaGraduationCap />
              <h4>Educational Content</h4>
              <p>Creating informative and inspiring content that educates and empowers communities</p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="team-section">
          <h2 className="section-title">Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/images/chairperson.jpg" alt="John Njuguna Maina" />
              </div>
              <div className="member-info">
                <h4>John Njuguna Maina</h4>
                <p className="member-title">Chairperson</p>
                <p>Njuguna is a passionate and visionary leader dedicated to youth empowerment through creative arts and cooperative enterprise. With over 10 years of experience in theatre performance, creative facilitation, and youth mobilization, he has trained and mentored numerous young talents across Kenya.
                  He is professionally trained in theatre arts and has practiced performance and youth-based art for both educational and entertainment purposes.
                  As a cooperator by profession, John combines his expertise in cooperative management with his deep commitment to nurturing youth potential—helping them transform their talents into sustainable livelihoods. Under his leadership, Chipukizi VOD has grown into a vibrant platform for talent development, brand promotion, and youth engagement.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/images/treasurer.jpg" alt="Treasurer" />
              </div>
              <div className="member-info">
                <h4>Vincent Ogonji</h4>
                <p className="member-title">Treasurer</p>
                <p>Vincent is a results-driven and visionary leader passionate about youth empowerment, financial accountability, and cooperative development. With over 5 years of experience in finance, community leadership, and creative arts, he brings a unique blend of financial expertise and youth-focused innovation to every initiative he supports.

                  He holds a Master of Business Administration (MBA) and a Bachelor of Commerce in Finance from the Cooperative University of Kenya, where he also served in several student leadership roles. His academic research on “Bookkeeping Skills and Financial Performance of SMEs in Kajiado County” reflects his commitment to strengthening financial literacy in underserved communities.

                  As the Treasurer of Chipukizi VOD, Vincent oversees all financial operations, including budgeting, reporting, and resource mobilization. His strategic financial leadership has enabled the platform to expand its reach, achieving a 20% increase in audience engagement through well-managed theatre programs and youth outreach.

                  Vincent combines his professional financial background with a strong passion for talent development and community upliftment. Under his financial stewardship, Chipukizi VOD has grown into a thriving platform for youth mentorship, brand promotion, and social impact through the arts.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/images/fel.png" alt="IT Technician" />
              </div>
              <div className="member-info">
                <h4>Felix Odhiambo</h4>
                <p className="member-title">IT Technician</p>
                <p>Felix is the digital engine behind Chipukizi VOD. With a BSc in IT from the Cooperative University of Kenya and a passion for youth and tech, he powers everything from system uptime to virtual stage lights. His focus on tech for social impact has helped increase digital engagement by 20%—proving that tech-savvy can spark real change. Whether solving glitches or mentoring creatives, Felix makes innovation feel personal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="contact-info-section">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p><a href="mailto:voiceofdramacoop@gmail.com">voiceofdramacoop@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p><a href="tel:0725710350">0725710350</a> / <a href="tel:0782909349">0782909349</a></p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Office Location</h4>
                <p>The Co-operative University of Kenya, Karen<br />About 20km from Nairobi CBD, off Lang'ata Road</p>
                <a href="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.6833763739523!2d36.725379174965795!3d-1.366653998620414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjEnNjAuMCJTIDM2wrA0Myc0MC42IkU!5e0!3m2!1sen!2ske!4v1753279855967!5m2!1sen!2ske" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View on Google Maps
                </a>
              </div>
            </div>
            <div className="contact-item">
              <FaClock />
              <h4>Business Hours</h4>
              <p>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </>
);

export default About;

