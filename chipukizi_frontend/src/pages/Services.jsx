import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Music, 
  Mic, 
  Video, 
  Users, 
  Volume2,
  Megaphone,
  Star,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

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

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [reviews, setReviews] = useState([
    { name: "Sarah Wanjiku", role: "Event Coordinator, ABC Company", content: "Chipukizi VOD delivered an outstanding performance at our corporate event. The drama was engaging and perfectly aligned with our company values.", rating: 5 },
    { name: "Pastor John Kimani", role: "Faith Community Church", content: "Their youth drama group brought our church event to life. The message was powerful and the performance was professional.", rating: 5 },
    { name: "Mary Njeri", role: "Wedding Planner", content: "The ushering services were exceptional. The team was professional, well-dressed, and helped make our client's wedding day perfect.", rating: 5 }
  ]);
  const [reviewInput, setReviewInput] = useState({ name: '', role: '', content: '', rating: 5 });
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: 'Drama & Plays',
      category: 'performance',
      icon: Play,
      description: 'Professional theatrical performances for all occasions including corporate events, schools, churches, and community gatherings.',
      features: [
        'Custom script writing',
        'Professional actors',
        'Costume and props',
        'Educational themes',
        'Interactive performances'
      ],
      price: 'From KES 15,000',
      duration: '30-60 minutes',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Music & Dance',
      category: 'performance',
      icon: Music,
      description: 'Live musical performances featuring traditional and contemporary styles, including dance choreography.',
      features: [
        'Live band performances',
        'Traditional dances',
        'Contemporary choreography',
        'Cultural presentations',
        'Audience participation'
      ],
      price: 'From KES 20,000',
      duration: '45-90 minutes',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Poetry & Spoken Word',
      category: 'performance',
      icon: Mic,
      description: 'Powerful spoken word performances that inspire, educate, and entertain audiences of all ages.',
      features: [
        'Original poetry',
        'Motivational pieces',
        'Social commentary',
        'Youth empowerment themes',
        'Interactive sessions'
      ],
      price: '',
      duration: 'reach out to us',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Adverts & Commercials',
      category: 'media',
      icon: Megaphone,
      description: 'Creative advertising content for brands, including TV commercials, radio spots, and digital content.',
      features: [
        'Script development',
        'Professional acting',
        'Brand messaging',
        'Multi-platform content',
        'Post-production support'
      ],
      price: 'From KES 25,000',
      duration: 'Project-based',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Ushering Services',
      category: 'support',
      icon: Users,
      description: 'Professional ushering and event support services for conferences, weddings, and corporate events.',
      features: [
        'Trained ushers',
        'Professional attire',
        'Event coordination',
        'Guest management',
        'Protocol adherence'
      ],
      price: 'From KES 2,000/person',
      duration: 'Full event',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Videography',
      category: 'media',
      icon: Video,
      description: 'Professional video production services for events, documentaries, and promotional content.',
      features: [
        'HD video recording',
        'Professional editing',
        'Multiple camera angles',
        'Drone footage (optional)',
        'Quick turnaround'
      ],
      price: 'From KES 30,000',
      duration: 'Full event coverage',
      image: '/api/placeholder/400/300'
    },
    {
      id: 7,
      title: 'Public Address System',
      category: 'support',
      icon: Volume2,
      description: 'Professional sound system rental and operation for events of all sizes.',
      features: [
        'High-quality speakers',
        'Wireless microphones',
        'Sound mixing',
        'Technical support',
        'Setup and breakdown'
      ],
      price: 'From KES 5,000',
      duration: 'Full event',
      image: '/api/placeholder/400/300'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'performance', name: 'Performances' },
    { id: 'media', name: 'Media Production' },
    { id: 'support', name: 'Event Support' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewInput(prev => ({ ...prev, [name]: value }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewInput.name && reviewInput.content) {
      setReviews(prev => [...prev, reviewInput]);
      setReviewInput({ name: '', role: '', content: '', rating: 5 });
    }
  };



  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional entertainment and media services tailored to your needs
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/booknow">
              Book Now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          {/* Removed Test Error button */}
        </div>
      </section>

      {/* Service Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="px-6 py-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                  <div className="font-semibold text-purple-600">
                    {service.price}
                  </div>
                </div>
                <Button
                  className="w-full"
                  onClick={() => navigate(`/booknow?service=${encodeURIComponent(service.title)}`)}
                >
                  Book This Service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Chipukizi VOD?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring professionalism, creativity, and passion to every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600">Professional performers with years of experience in entertainment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">We deliver high-quality performances that exceed expectations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored content that fits your specific needs and message</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nationwide Coverage</h3>
              <p className="text-gray-600">We provide services throughout Kenya with flexible scheduling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Review Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
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
        {/* Review Us Form */}
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 mb-12">
          <h3 className="font-bold mb-4 text-center">Review Us</h3>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={reviewInput.name}
              onChange={handleReviewChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
            <input
              type="text"
              name="role"
              value={reviewInput.role}
              onChange={handleReviewChange}
              placeholder="Your Role/Organization (optional)"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <textarea
              name="content"
              value={reviewInput.content}
              onChange={handleReviewChange}
              placeholder="Your Review"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              rows={3}
              required
            />
            <div>
              <label className="block mb-1 font-medium">Rating:</label>
              <select
                name="rating"
                value={reviewInput.rating}
                onChange={handleReviewChange}
                className="border border-gray-300 rounded px-2 py-1"
              >
                {[5, 4, 3, 2, 1].map(r => (
                  <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded font-bold shadow hover:bg-purple-700 w-full"
            >
              Submit Review
            </button>
          </form>
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How to Book Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get started with your event
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Reach out via phone, email, or our contact form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your needs and provide a customized quote</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking</h3>
              <p className="text-gray-600">Confirm your booking with a deposit payment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">We deliver an outstanding performance at your event</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Our Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create an unforgettable experience for your audience. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

