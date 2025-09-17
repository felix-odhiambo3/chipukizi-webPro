import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { mediaAPI } from '@/lib/api.js';

const SERVICES = [
  'Drama & Plays',
  'Music & Dance',
  'Poetry & Spoken Word',
  'Adverts & Commercials',
  'Ushering Services',
  'Videography',
  'Public Address System',
  'Other (please specify)'
];

const Booknow = () => {
  const location = useLocation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    otherService: '',
    date: '',
    location: '',
    hours: '',
    description: '',
    pricing: '',
    contactMethod: 'email'
  });
  const [submitted, setSubmitted] = useState(false);

  // Auto-select service from query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam && SERVICES.includes(serviceParam)) {
      setForm(prev => ({ ...prev, service: serviceParam }));
    }
  }, [location.search]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = e => {
    setForm(prev => ({
      ...prev,
      service: e.target.value,
      otherService: ''
    }));
  };

  const isOther = form.service === 'Other (please specify)';

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await mediaAPI.bookService(form);
      setSubmitted(true);
    } catch (error) {
      alert('Failed to submit booking: ' + (error.message || 'Unknown error'));
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(rgba(44,90,160,0.7), rgba(30,63,115,0.7)), url('/images/bg.jpg') center/cover",
      }}
    >
      <div className="max-w-2xl w-full py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-white-700">Book Our Services</h1>
        <p className="text-center text-gray-100 mb-8">
          Fill out the form below to book Chipukizi VOD for your event. Our team will reach out via your preferred contact method to finalize details and pricing.
        </p>
        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded text-center">
            <h2 className="text-xl font-bold mb-2">Thank you for your booking!</h2>
            <p>Our admin will reach out to you soon via {form.contactMethod === 'call' ? 'phone call' : 'email'}.</p>
          </div>
        ) : (
          <form className="bg-white bg-opacity-95 rounded-lg shadow p-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium mb-1">Full Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email Address<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required={form.contactMethod === 'email'}
                className="border border-gray-300 rounded px-4 py-2 w-full"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number<span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required={form.contactMethod === 'call'}
                className="border border-gray-300 rounded px-4 py-2 w-full"
                placeholder="e.g. +254712345678"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Service<span className="text-red-500">*</span></label>
              <select
                name="service"
                value={form.service}
                onChange={handleServiceChange}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full"
              >
                <option value="">Select a service</option>
                {SERVICES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {isOther && (
                <input
                  type="text"
                  name="otherService"
                  value={form.otherService}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded px-4 py-2 w-full mt-2"
                  placeholder="Describe your service need"
                />
              )}
            </div>
            {/* Only show event details if not "Other" */}
            {!isOther && (
              <>
                <div>
                  <label className="block font-medium mb-1">Event Date<span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Event Location<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    placeholder="Venue/Address"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Event Hours<span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    name="hours"
                    value={form.hours}
                    onChange={handleChange}
                    required
                    min={1}
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    placeholder="Number of hours"
                  />
                </div>
              </>
            )}
            <div>
              <label className="block font-medium mb-1">Brief Description<span className="text-red-500">*</span></label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-4 py-2 w-full"
                rows={3}
                placeholder="Tell us about your event, audience, and any special requests"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Flexible Pricing Option</label>
              <select
                name="pricing"
                value={form.pricing}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              >
                <option value="">Select pricing preference</option>
                <option value="standard">Standard Package</option>
                <option value="custom">Custom Quote</option>
                <option value="negotiable">Negotiable</option>
                <option value="info">Need more info</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Preferred Contact Method<span className="text-red-500">*</span></label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={form.contactMethod === 'email'}
                    onChange={handleChange}
                    required
                  /> Email
                </label>
                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="call"
                    checked={form.contactMethod === 'call'}
                    onChange={handleChange}
                    required
                  /> Phone Call
                </label>
              </div>
            </div>
            <Button type="submit" className="w-full bg-purple-700 text-white font-bold py-2 rounded hover:bg-purple-800">
              Submit Booking
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Booknow;