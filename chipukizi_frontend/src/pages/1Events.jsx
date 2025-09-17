import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Calendar, MapPin, Users, ArrowRight, Star, Edit, Trash2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Mock initial events
const initialEvents = [
  {
    id: 1,
    title: 'Love Edition Season 5',
    date: '2025-09-20',
    time: '6:00 PM',
    location: 'Cooperative University of Kenya',
    type: 'Drama',
    image: '/images/event1.jpg',
    description: 'A talent drama show featuring youth performances, spoken word, and music.',
    featured: true,
    fee: 500,
    registrations: [],
  },
  {
    id: 2,
    title: 'Corporate Talent Night',
    date: '2025-10-05',
    time: '7:00 PM',
    location: 'Nairobi Serena Hotel',
    type: 'Corporate',
    image: '/images/event2.jpg',
    description: 'An exclusive night for corporate clients with drama, music, and networking.',
    featured: false,
    fee: 1000,
    registrations: [],
  },
  {
    id: 3,
    title: 'Community Arts Festival',
    date: '2025-08-12',
    time: '2:00 PM',
    location: 'Uhuru Park',
    type: 'Festival',
    image: '/images/event3.jpg',
    description: 'A family-friendly festival with performances, workshops, and food stalls.',
    featured: false,
    fee: 0,
    registrations: [],
  },
];

const eventTypes = [
  { id: 'all', name: 'All Events' },
  { id: 'Drama', name: 'Drama' },
  { id: 'Corporate', name: 'Corporate' },
  { id: 'Festival', name: 'Festival' },
];

const testimonials = [
  {
    name: 'Jane Mwangi',
    role: 'Corporate Client',
    content: 'Chipukizi VOD made our corporate event unforgettable. The performances were top-notch!',
    rating: 5,
  },
  {
    name: 'Samuel Otieno',
    role: 'Community Leader',
    content: 'The arts festival brought our community together. Highly recommended!',
    rating: 5,
  },
];

function sortByDateSoonest(events) {
  return [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
}

const Events = () => {
  const { user } = useAuth();
  const isAdmin = user && user.roles && user.roles.some(role => role.name === 'admin');

  const [events, setEvents] = useState(initialEvents);
  const [selectedType, setSelectedType] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editEvent, setEditEvent] = useState(null);
  const [registration, setRegistration] = useState({ email: '', phone: '', feePaid: false });
  const [registrationError, setRegistrationError] = useState('');

  // Simulate real-time updates (WebSocket)
  useEffect(() => {
    // Example: Listen for new events (replace with real WebSocket logic)
    // For demo, nothing here
  }, []);

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Partition events
  const now = new Date();
  const upcomingEvents = sortByDateSoonest(
    filteredEvents.filter(ev => new Date(ev.date) >= now)
  );
  const pastEvents = sortByDateSoonest(
    filteredEvents.filter(ev => new Date(ev.date) < now)
  );

  // Admin: Add event
  const handleAddEvent = () => {
    setEditEvent({
      id: Date.now(),
      title: '',
      date: '',
      time: '',
      location: '',
      type: 'Drama',
      image: '',
      description: '',
      featured: false,
      fee: 0,
      registrations: [],
    });
    setShowEditModal(true);
  };

  // Admin: Edit event
  const handleEditEvent = (event) => {
    setEditEvent(event);
    setShowEditModal(true);
  };

  // Admin: Save event (add or update)
  const handleSaveEvent = () => {
    setEvents(prev =>
      prev.some(ev => ev.id === editEvent.id)
        ? prev.map(ev => (ev.id === editEvent.id ? editEvent : ev))
        : [...prev, editEvent]
    );
    setShowEditModal(false);
    setEditEvent(null);
  };

  // Admin: Delete event
  const handleDeleteEvent = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(ev => ev.id !== id));
    }
  };

  // Simulate real-time event addition
  const handleSimulateEvent = () => {
    const newEvent = {
      id: Date.now(),
      title: 'New Real-Time Event',
      date: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
      time: '5:00 PM',
      location: 'Virtual',
      type: 'Drama',
      image: '/images/event4.jpg',
      description: 'This event was added in real time!',
      featured: false,
      fee: 0,
      registrations: [],
    };
    setEvents(prev => [...prev, newEvent]);
  };

  // User registration for event
  const handleRegister = () => {
    setRegistrationError('');
    if (!registration.email || !registration.phone) {
      setRegistrationError('Please enter a valid email and phone number.');
      return;
    }
    if (
      selectedEvent.fee > 0 &&
      !registration.feePaid
    ) {
      setRegistrationError('Please confirm that you have paid the event fee.');
      return;
    }
    setEvents(events =>
      events.map(ev =>
        ev.id === selectedEvent.id
          ? {
              ...ev,
              registrations: [
                ...ev.registrations,
                {
                  email: registration.email,
                  phone: registration.phone,
                  feePaid: registration.feePaid,
                  registeredAt: new Date().toISOString(),
                },
              ],
            }
          : ev
      )
    );
    setRegistration({ email: '', phone: '', feePaid: false });
    setSelectedEvent(null);
    alert('Registration successful!');
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Dashboard</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Upcoming and past events. Register now!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Book Now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          {isAdmin && (
            <>
              <Button
                size="lg"
                className="ml-4 bg-green-600 text-white"
                onClick={handleAddEvent}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
              <Button
                size="lg"
                className="ml-4 bg-blue-600 text-white"
                onClick={handleSimulateEvent}
              >
                Simulate Real-Time Event
              </Button>
            </>
          )}
        </div>
      </section>

      {/* Search & Filter */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <Input
            type="text"
            placeholder="Search events by title or location..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="md:w-1/2"
          />
          <div className="flex gap-2 mt-4 md:mt-0">
            {eventTypes.map(type => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? 'default' : 'outline'}
                onClick={() => setSelectedType(type.id)}
                className="px-4 py-2"
              >
                {type.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Upcoming Events Grid */}
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              No upcoming events found.
            </div>
          ) : (
            upcomingEvents.map(event => (
              <div
                key={event.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border-2 ${
                  event.featured ? 'border-purple-500' : 'border-transparent'
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date} &nbsp; | &nbsp;
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                  <p className="text-gray-600 mb-4">{event.description.slice(0, 60)}...</p>
                  <Button asChild className="w-full bg-purple-600 text-white">
                    <Link to="#">Register</Link>
                  </Button>
                  {isAdmin && (
                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-600 text-green-600"
                        onClick={e => {
                          e.stopPropagation();
                          handleEditEvent(event);
                        }}
                      >
                        <Edit className="w-4 h-4 mr-1" /> Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-600 text-red-600"
                        onClick={e => {
                          e.stopPropagation();
                          handleDeleteEvent(event.id);
                        }}
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Delete
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Past Events Grid */}
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              No past events found.
            </div>
          ) : (
            pastEvents.map(event => (
              <div
                key={event.id}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border"
                onClick={() => setSelectedEvent(event)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date} &nbsp; | &nbsp;
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                  <p className="text-gray-600 mb-4">{event.description.slice(0, 60)}...</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Event Details & Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedEvent(null)}
            >
              &times;
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              {selectedEvent.date} &nbsp; | &nbsp;
              <MapPin className="w-4 h-4 mr-1" />
              {selectedEvent.location}
            </div>
            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            <div className="mb-4">
              <span className="font-semibold text-purple-700">Fee: </span>
              {selectedEvent.fee > 0 ? `KES ${selectedEvent.fee}` : 'Free'}
            </div>
            <h3 className="font-bold mb-2">Register for this event</h3>
            <div className="space-y-2 mb-2">
              <Input
                type="email"
                placeholder="Your email"
                value={registration.email}
                onChange={e => setRegistration({ ...registration, email: e.target.value })}
              />
              <Input
                type="tel"
                placeholder="Your phone number"
                value={registration.phone}
                onChange={e => setRegistration({ ...registration, phone: e.target.value })}
              />
              {selectedEvent.fee > 0 && (
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={registration.feePaid}
                    onChange={e => setRegistration({ ...registration, feePaid: e.target.checked })}
                  />
                  I have paid the event fee
                </label>
              )}
              {registrationError && (
                <div className="text-red-600 text-sm">{registrationError}</div>
              )}
              <Button className="w-full bg-purple-600 text-white" onClick={handleRegister}>
                Register
              </Button>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Registered Users:</h4>
              {selectedEvent.registrations.length === 0 ? (
                <div className="text-gray-500 text-sm">No registrations yet.</div>
              ) : (
                <ul className="text-sm">
                  {selectedEvent.registrations.map((reg, idx) => (
                    <li key={idx}>
                      {reg.email} ({reg.phone}) {reg.feePaid ? '✔️ Paid' : '❌ Not Paid'}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Admin: Add/Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => {
                setShowEditModal(false);
                setEditEvent(null);
              }}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">{editEvent && events.some(ev => ev.id === editEvent.id) ? 'Edit Event' : 'Add Event'}</h2>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Title"
                value={editEvent.title}
                onChange={e => setEditEvent({ ...editEvent, title: e.target.value })}
              />
              <Input
                type="date"
                placeholder="Date"
                value={editEvent.date}
                onChange={e => setEditEvent({ ...editEvent, date: e.target.value })}
              />
              <Input
                type="text"
                placeholder="Time"
                value={editEvent.time}
                onChange={e => setEditEvent({ ...editEvent, time: e.target.value })}
              />
              <Input
                type="text"
                placeholder="Location"
                value={editEvent.location}
                onChange={e => setEditEvent({ ...editEvent, location: e.target.value })}
              />
              <select
                className="border rounded px-3 py-2 w-full"
                value={editEvent.type}
                onChange={e => setEditEvent({ ...editEvent, type: e.target.value })}
              >
                {eventTypes.filter(t => t.id !== 'all').map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
              <Input
                type="text"
                placeholder="Image URL"
                value={editEvent.image}
                onChange={e => setEditEvent({ ...editEvent, image: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Fee (KES)"
                value={editEvent.fee}
                onChange={e => setEditEvent({ ...editEvent, fee: Number(e.target.value) })}
              />
              <textarea
                className="border rounded px-3 py-2 w-full"
                placeholder="Description"
                value={editEvent.description}
                onChange={e => setEditEvent({ ...editEvent, description: e.target.value })}
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={editEvent.featured}
                  onChange={e => setEditEvent({ ...editEvent, featured: e.target.checked })}
                />
                Featured Event
              </label>
              <Button className="w-full bg-green-600 text-white" onClick={handleSaveEvent}>
                Save Event
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Guests Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from people who attended our events
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Attend or Host an Event?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to book your spot or plan your next unforgettable event with Chipukizi VOD.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export const authAPI = { /* ...your auth API logic... */ };

export default Events;