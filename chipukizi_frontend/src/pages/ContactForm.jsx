import React, { useState } from "react";
import { Send } from "lucide-react";
import { contactAPI } from "@/lib/api.js";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    service: '',
    message: '',
    contactMethod: 'email',
    preferredTime: 'morning',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await contactAPI.submitContact(form);
      setSuccess(true);
      setForm({
        name: '',
        phone: '',
        email: '',
        organization: '',
        service: '',
        message: '',
        contactMethod: 'email',
        preferredTime: 'morning',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact-form-section"
      style={{
        backgroundImage: 'url(/images/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <h2>Schedule Training or Request a Consultation</h2>
        {success && <div className="success-message">Thank you! Your message has been sent successfully.</div>}
        {error && <div className="error-message">{error}</div>}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
            </div>
          </div>

          {/* Phone + Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          {/* Organization */}
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="organization">Organization/Company</label>
              <input type="text" id="organization" name="organization" value={form.organization} onChange={handleChange} />
            </div>
          </div>

          {/* Service Type */}
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="service">Service Type *</label>
              <select id="service" name="service" value={form.service} onChange={handleChange} required>
                <option value="">Select a service...</option>
                <option value="video-production">Video Production</option>
                <option value="digital-marketing">Digital Marketing Campaign</option>
                <option value="youth-training">Youth Training Program</option>
                <option value="content-creation">Content Creation</option>
                <option value="brand-promotion">Brand Promotion</option>
                <option value="consultation">General Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project or training needs..."
              ></textarea>
            </div>
          </div>

          {/* Contact Method + Time */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactMethod">Preferred Contact Method</label>
              <select id="contactMethod" name="contactMethod" value={form.contactMethod} onChange={handleChange}>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time</label>
              <select id="preferredTime" name="preferredTime" value={form.preferredTime} onChange={handleChange}>
                <option value="morning">Morning (8am-12pm)</option>
                <option value="afternoon">Afternoon (12pm-5pm)</option>
                <option value="evening">Evening (5pm-7pm)</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <div className="form-submit">
            <button type="submit" className="submit-btn flex items-center gap-2" disabled={loading}>
              <Send className="w-4 h-4" />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
