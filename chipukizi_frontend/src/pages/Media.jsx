import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Play,
  Image,
  Music,
  Video,
  Eye,
  Heart,
  Share2,
  Download,
  Calendar,
  Filter
} from 'lucide-react';
import { mediaAPI } from '@/lib/api.js';

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await mediaAPI.getPublicVideos();
      const videos = response.media;
      // Transform backend data to match frontend structure
      const transformedVideos = videos.map(video => ({
        id: video.id,
        title: video.description || 'Video',
        type: 'video',
        category: 'drama', // Default category, can be enhanced
        thumbnail: '/api/placeholder/400/300', // Placeholder
        url: video.video_url,
        description: video.description || '',
        date: video.updated_at.split('T')[0], // Extract date
        views: 0, // Placeholder
        likes: 0, // Placeholder
        duration: '0:00', // Placeholder
        featured: false
      }));
      setMediaItems(transformedVideos);
    } catch {
      setError('Failed to load videos');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="min-h-[70vh] flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-[70vh] flex items-center justify-center text-red-600">{error}</div>;



  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'drama', name: 'Drama' },
    { id: 'dance', name: 'Dance' },
    { id: 'poetry', name: 'Poetry' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'outreach', name: 'Community Outreach' }
  ];

  const mediaTypes = [
    { id: 'all', name: 'All Media', icon: Filter },
    { id: 'video', name: 'Videos', icon: Video },
    { id: 'image', name: 'Photos', icon: Image },
    { id: 'audio', name: 'Audio', icon: Music }
  ];

  const filteredMedia = mediaItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const featuredMedia = filteredMedia.filter(item => item.featured);
  const regularMedia = filteredMedia.filter(item => !item.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getMediaIcon = (type) => {
    switch (type) {
      case 'video': return Video;
      case 'image': return Image;
      case 'audio': return Music;
      default: return Play;
    }
  };

  const MediaCard = ({ item }) => {
    const MediaIcon = getMediaIcon(item.type);
    
    return (
      <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${item.featured ? 'ring-2 ring-purple-500' : ''}`}>
        {item.featured && (
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-semibold">
            Featured Content
          </div>
        )}
        
        <div className="relative">
          <img 
            src={item.thumbnail} 
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <MediaIcon className="w-6 h-6 mr-2" />
              {item.type === 'video' ? 'Play' : item.type === 'audio' ? 'Listen' : 'View'}
            </Button>
          </div>
          
          {/* Media type indicator */}
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
            <MediaIcon className="w-3 h-3 mr-1" />
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </div>
          
          {/* Duration for video/audio */}
          {(item.type === 'video' || item.type === 'audio') && item.duration && (
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
              {item.duration}
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(item.date)}
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {item.views}
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                {item.likes}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              <Play className="w-4 h-4 mr-1" />
              View
            </Button>
            <Button size="sm" variant="outline">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our collection of performances, workshops, and community events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://www.youtube.com/watch?v=6UN8Tg-71Hg" target="_blank" rel="noopener noreferrer">
                <Video className="w-4 h-4 mr-2" />
                Watch on YouTube
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Image className="w-4 h-4 mr-2" />
              View Photo Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Media Type Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Media Type</h3>
            <div className="flex flex-wrap gap-4">
              {mediaTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? 'default' : 'outline'}
                  onClick={() => setSelectedType(type.id)}
                  className="flex items-center space-x-2"
                >
                  <type.icon className="w-4 h-4" />
                  <span>{type.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Category</h3>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="px-4 py-2"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      {featuredMedia.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMedia.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* Regular Media */}
      {regularMedia.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {featuredMedia.length > 0 ? 'More Content' : 'Our Media'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularMedia.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {filteredMedia.length === 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No media found</h3>
            <p className="text-gray-600">No media matches your selected filters. Try adjusting your selection.</p>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Media Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reaching audiences through powerful visual storytelling
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Videos Produced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Likes & Shares</div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our YouTube Channel
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't miss our latest performances and behind-the-scenes content. Subscribe for weekly updates!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://www.youtube.com/watch?v=6UN8Tg-71Hg" target="_blank" rel="noopener noreferrer">
              <Video className="w-4 h-4 mr-2" />
              Subscribe on YouTube
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Media;
