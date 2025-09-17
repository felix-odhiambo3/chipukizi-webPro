import React, { useEffect, useState } from 'react';
import { mediaAPI, contactAPI, userAPI, eventAPI } from '@/lib/api.js';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('bookings');
  const [videos, setVideos] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ file: null, description: '' });
  const [eventForm, setEventForm] = useState({ title: '', description: '', date: '', location: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingEventId, setEditingEventId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated() || !isAdmin()) {
      navigate('/login');
      return;
    }
    fetchData(activeTab);
  }, [activeTab]);

  const fetchData = async (tab) => {
    setLoading(true);
    try {
      if (tab === 'media') {
        const data = await mediaAPI.getVideos();
        setVideos(data);
      } else if (tab === 'bookings') {
        const data = await mediaAPI.getBookings();
        setBookings(data);
      } else if (tab === 'contacts') {
        const data = await contactAPI.getContacts();
        setContacts(data);
      } else if (tab === 'users') {
        const data = await userAPI.getUsers();
        setUsers(data);
      } else if (tab === 'events') {
        const data = await eventAPI.getEvents();
        setEvents(data);
      }
    } catch {
      setError(`Failed to load ${tab}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (editingId) {
        await mediaAPI.updateVideo(editingId, form);
      } else {
        await mediaAPI.addVideo(form);
      }
      setForm({ video_url: '', description: '' });
      setEditingId(null);
      fetchData('media');
    } catch (error) {
      setError(error.message || 'Failed to save video');
    }
  };

  const handleEdit = (video) => {
    setForm({ video_url: video.video_url, description: video.description || '' });
    setEditingId(video.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this video?')) return;
    try {
      await mediaAPI.deleteVideo(id);
      fetchData('media');
    } catch {
      setError('Failed to delete video');
    }
  };

  const handleResetPassword = async (id) => {
    if (!window.confirm('Are you sure you want to reset this user\'s password?')) return;
    try {
      const result = await userAPI.resetPassword(id);
      alert(`Password reset successfully. New password: ${result.new_password}`);
      fetchData('users');
    } catch (error) {
      setError(error.message || 'Failed to reset password');
    }
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventForm({ ...eventForm, [name]: value });
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (editingEventId) {
        await eventAPI.updateEvent(editingEventId, eventForm);
      } else {
        await eventAPI.addEvent(eventForm);
      }
      setEventForm({ title: '', description: '', date: '', location: '' });
      setEditingEventId(null);
      fetchData('events');
    } catch (error) {
      setError(error.message || 'Failed to save event');
    }
  };

  const handleEventEdit = (event) => {
    setEventForm({
      title: event.title,
      description: event.description || '',
      date: event.date.split('T')[0], // Extract date part
      location: event.location || ''
    });
    setEditingEventId(event.id);
  };

  const handleEventDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;
    try {
      await eventAPI.deleteEvent(id);
      fetchData('events');
    } catch {
      setError('Failed to delete event');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {error && <div className="mb-4 text-red-600">{error}</div>}

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <Button
          variant={activeTab === 'bookings' ? 'default' : 'outline'}
          onClick={() => setActiveTab('bookings')}
        >
          Bookings
        </Button>
        <Button
          variant={activeTab === 'contacts' ? 'default' : 'outline'}
          onClick={() => setActiveTab('contacts')}
        >
          Consultations
        </Button>
        <Button
          variant={activeTab === 'users' ? 'default' : 'outline'}
          onClick={() => setActiveTab('users')}
        >
          Users
        </Button>
        <Button
          variant={activeTab === 'media' ? 'default' : 'outline'}
          onClick={() => setActiveTab('media')}
        >
          Media
        </Button>
        <Button
          variant={activeTab === 'events' ? 'default' : 'outline'}
          onClick={() => setActiveTab('events')}
        >
          Events
        </Button>
      </div>

      {activeTab === 'bookings' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
          {bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">Email</th>
                  <th className="border border-gray-300 p-2 text-left">Phone</th>
                  <th className="border border-gray-300 p-2 text-left">Service</th>
                  <th className="border border-gray-300 p-2 text-left">Date</th>
                  <th className="border border-gray-300 p-2 text-left">Location</th>
                  <th className="border border-gray-300 p-2 text-left">Hours</th>
                  <th className="border border-gray-300 p-2 text-left">Description</th>
                  <th className="border border-gray-300 p-2 text-left">Pricing</th>
                  <th className="border border-gray-300 p-2 text-left">Contact Method</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="border border-gray-300 p-2">{booking.name}</td>
                    <td className="border border-gray-300 p-2">{booking.email}</td>
                    <td className="border border-gray-300 p-2">{booking.phone}</td>
                    <td className="border border-gray-300 p-2">{booking.service}</td>
                    <td className="border border-gray-300 p-2">{booking.date}</td>
                    <td className="border border-gray-300 p-2">{booking.location}</td>
                    <td className="border border-gray-300 p-2">{booking.hours}</td>
                    <td className="border border-gray-300 p-2">{booking.description}</td>
                    <td className="border border-gray-300 p-2">{booking.pricing}</td>
                    <td className="border border-gray-300 p-2">{booking.contactMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {activeTab === 'contacts' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Consultation Form Submissions</h2>
          {contacts.length === 0 ? (
            <p>No consultation submissions found.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">Email</th>
                  <th className="border border-gray-300 p-2 text-left">Phone</th>
                  <th className="border border-gray-300 p-2 text-left">Organization</th>
                  <th className="border border-gray-300 p-2 text-left">Service</th>
                  <th className="border border-gray-300 p-2 text-left">Message</th>
                  <th className="border border-gray-300 p-2 text-left">Contact Method</th>
                  <th className="border border-gray-300 p-2 text-left">Preferred Time</th>
                  <th className="border border-gray-300 p-2 text-left">Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td className="border border-gray-300 p-2">{contact.name}</td>
                    <td className="border border-gray-300 p-2">{contact.email}</td>
                    <td className="border border-gray-300 p-2">{contact.phone}</td>
                    <td className="border border-gray-300 p-2">{contact.organization}</td>
                    <td className="border border-gray-300 p-2">{contact.service}</td>
                    <td className="border border-gray-300 p-2">{contact.message}</td>
                    <td className="border border-gray-300 p-2">{contact.contactMethod}</td>
                    <td className="border border-gray-300 p-2">{contact.preferredTime}</td>
                    <td className="border border-gray-300 p-2">{contact.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {activeTab === 'users' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          {users.length === 0 ? (
            <p>No users found.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Email</th>
                  <th className="border border-gray-300 p-2 text-left">Role</th>
                  <th className="border border-gray-300 p-2 text-left">Created At</th>
                  <th className="border border-gray-300 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border border-gray-300 p-2">{user.email}</td>
                    <td className="border border-gray-300 p-2">{user.role}</td>
                    <td className="border border-gray-300 p-2">{user.created_at}</td>
                    <td className="border border-gray-300 p-2 text-center">
                      <Button size="sm" onClick={() => handleResetPassword(user.id)}>
                        Reset Password
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {activeTab === 'media' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Manage Media</h2>

          <form onSubmit={handleSubmit} className="mb-8 space-y-4">
            <div>
              <Label htmlFor="file">Upload Video or Photo</Label>
              <Input
                id="file"
                name="file"
                type="file"
                accept="video/*,image/*"
                onChange={handleChange}
                required={!form.file}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
              />
            </div>
            <Button type="submit">{editingId ? 'Update Media' : 'Upload Media'}</Button>
            {editingId && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setForm({ video_url: '', description: '' });
                  setEditingId(null);
                  setError(null);
                }}
              >
                Cancel
              </Button>
            )}
          </form>

          <h3 className="text-xl font-semibold mb-4">Existing Media</h3>
          {videos.length === 0 ? (
            <p>No media found.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Media URL</th>
                  <th className="border border-gray-300 p-2 text-left">Description</th>
                  <th className="border border-gray-300 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video) => (
                  <tr key={video.id}>
                    <td className="border border-gray-300 p-2 break-all">{video.video_url}</td>
                    <td className="border border-gray-300 p-2">{video.description}</td>
                    <td className="border border-gray-300 p-2 text-center space-x-2">
                      <Button size="sm" onClick={() => handleEdit(video)}>
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(video.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
      {activeTab === 'events' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Manage Events</h2>

          <form onSubmit={handleEventSubmit} className="mb-8 space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                value={eventForm.title}
                onChange={handleEventChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={eventForm.description}
                onChange={handleEventChange}
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={eventForm.date}
                onChange={handleEventChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                type="text"
                value={eventForm.location}
                onChange={handleEventChange}
              />
            </div>
            <Button type="submit">{editingEventId ? 'Update Event' : 'Add Event'}</Button>
            {editingEventId && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setEventForm({ title: '', description: '', date: '', location: '' });
                  setEditingEventId(null);
                  setError(null);
                }}
              >
                Cancel
              </Button>
            )}
          </form>

          <h3 className="text-xl font-semibold mb-4">Existing Events</h3>
          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Title</th>
                  <th className="border border-gray-300 p-2 text-left">Description</th>
                  <th className="border border-gray-300 p-2 text-left">Date</th>
                  <th className="border border-gray-300 p-2 text-left">Location</th>
                  <th className="border border-gray-300 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td className="border border-gray-300 p-2">{event.title}</td>
                    <td className="border border-gray-300 p-2">{event.description}</td>
                    <td className="border border-gray-300 p-2">{event.date.split('T')[0]}</td>
                    <td className="border border-gray-300 p-2">{event.location}</td>
                    <td className="border border-gray-300 p-2 text-center space-x-2">
                      <Button size="sm" onClick={() => handleEventEdit(event)}>
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleEventDelete(event.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
