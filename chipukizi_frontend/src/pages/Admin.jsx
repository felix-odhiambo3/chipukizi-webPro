import React, { useEffect, useState } from 'react';
import { mediaAPI } from '@/lib/api.js';
import { isAdmin, isAuthenticated } from '@/lib/auth.js';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';

const Admin = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ video_url: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated() || !isAdmin()) {
      navigate('/login');
      return;
    }
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const data = await mediaAPI.getVideos();
      setVideos(data);
    } catch {
      setError('Failed to load videos');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
      fetchVideos();
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
      fetchVideos();
    } catch {
      setError('Failed to delete video');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin - Manage Media Videos</h1>
      {error && <div className="mb-4 text-red-600">{error}</div>}

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <Label htmlFor="video_url">Video URL</Label>
          <Input
            id="video_url"
            name="video_url"
            type="url"
            value={form.video_url}
            onChange={handleChange}
            required
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
        <Button type="submit">{editingId ? 'Update Video' : 'Add Video'}</Button>
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

      <h2 className="text-2xl font-semibold mb-4">Existing Videos</h2>
      {videos.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-left">Video URL</th>
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
  );
};

export default Admin;
