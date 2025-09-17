const API_BASE = '/api';

import { getToken } from './auth.js';

function authHeader() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const authAPI = {
  login: async (credentials) => {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  },
  register: async (userData) => {
    const response = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
  }
};

export const mediaAPI = {
  getVideos: async () => {
    const response = await fetch(`${API_BASE}/media/list`, {
      headers: {
        ...authHeader(),
      },
    });
    if (!response.ok) throw new Error('Failed to fetch videos');
    return response.json();
  },
  getPublicVideos: async () => {
    const response = await fetch(`${API_BASE}/media/public/list`);
    if (!response.ok) throw new Error('Failed to fetch videos');
    return response.json();
  },
  addVideo: async (video) => {
    const formData = new FormData();
    if (video.file) {
      formData.append('file', video.file);
    }
    if (video.description) {
      formData.append('description', video.description);
    }
    const response = await fetch(`${API_BASE}/media/upload`, {
      method: 'POST',
      headers: {
        ...authHeader(),
      },
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to add video');
    return response.json();
  },
  deleteVideo: async (id) => {
    const response = await fetch(`${API_BASE}/media/${id}`, {
      method: 'DELETE',
      headers: {
        ...authHeader(),
      },
    });
    if (!response.ok) throw new Error('Failed to delete video');
    return response.json();
  },
  bookService: async (bookingData) => {
    const response = await fetch(`${API_BASE}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    if (!response.ok) throw new Error('Failed to submit booking');
    return response.json();
  },
  getBookings: async () => {
    const response = await fetch(`${API_BASE}/bookings`, {
      headers: {
        ...authHeader(),
      },
    });
    if (!response.ok) throw new Error('Failed to fetch bookings');
    return response.json();
  },
};

export const contactAPI = {
  submitContact: async (form) => {
    const response = await fetch(`${API_BASE}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit contact form');
    }
    return response.json();
  },
  getContacts: async () => {
    const response = await fetch(`${API_BASE}/contacts`, {
      method: 'GET',
      headers: {
        ...authHeader(),
      },
    });
    if (!response.ok) throw new Error('Failed to fetch contacts');
    return response.json();
  },
  deleteContact: async (id) => {
    const response = await fetch(`${API_BASE}/contacts/${id}`, {
      method: 'DELETE',
      headers: {
        ...authHeader(),
      },
    });
    if (!response.ok) throw new Error('Failed to delete contact');
    return response.json();
  },
};

export const userAPI = {
  getUsers: async () => {
    const response = await fetch(`${API_BASE}/users`, {
      method: 'GET',
      headers: {
        ...authHeader(),
      },
    });
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },
  resetPassword: async (id) => {
    const response = await fetch(`${API_BASE}/users/${id}/reset-password`, {
      method: 'POST',
      headers: {
        ...authHeader(),
      },
    });
    if (!response.ok) throw new Error('Failed to reset password');
    return response.json();
  },
};

export const eventAPI = {
  getEvents: async () => {
    const response = await fetch(`${API_BASE}/events`);
    if (!response.ok) throw new Error('Failed to fetch events');
    return response.json();
  },
  addEvent: async (eventData) => {
    const response = await fetch(`${API_BASE}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error('Failed to add event');
    return response.json();
  },
  updateEvent: async (id, eventData) => {
    const response = await fetch(`${API_BASE}/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error('Failed to update event');
    return response.json();
  },
  deleteEvent: async (id) => {
    const response = await fetch(`${API_BASE}/events/${id}`, {
      method: 'DELETE',
      headers: {
        ...authHeader(),
      },
    });
    if (!response.ok) throw new Error('Failed to delete event');
    return response.json();
  },
};
