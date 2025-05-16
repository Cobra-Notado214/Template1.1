// Design system constants
export const COLORS = {
  primary: '#FFD700', // Gold
  primaryDark: '#E6C200',
  primaryLight: '#FFF0A8',
  secondary: '#333333',
  secondaryLight: '#555555',
  background: '#FFFFFF',
  backgroundAlt: '#F5F5F5',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
};

// Application constants
export const APP_NAME = 'StayGold';
export const APP_DESCRIPTION = 'Discover and book premium accommodations worldwide';
export const POINTS_PER_DOLLAR = 1;
export const POINTS_REDEMPTION_RATE = 100; // 100 points = $1

// Mock data for development
export const FEATURED_DESTINATIONS = [
  {
    id: '1',
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with stunning beaches and vibrant culture',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 342
  },
  {
    id: '2',
    name: 'Santorini, Greece',
    description: 'Iconic white buildings with breathtaking sea views',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 189
  },
  {
    id: '3',
    name: 'Kyoto, Japan',
    description: 'Ancient temples and traditional gardens',
    image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 256
  },
  {
    id: '4',
    name: 'Paris, France',
    description: 'Romantic city with iconic landmarks and cuisine',
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 415
  },
];

export const PROPERTY_TYPES = [
  { id: 'hotel', name: 'Hotels', icon: 'building' },
  { id: 'apartment', name: 'Apartments', icon: 'home' },
  { id: 'villa', name: 'Villas', icon: 'landmark' },
  { id: 'cottage', name: 'Cottages', icon: 'warehouse' },
  { id: 'resort', name: 'Resorts', icon: 'palm-tree' },
];

export const MOCK_PROPERTIES = [
  {
    id: '1',
    name: 'Grand Luxury Resort & Spa',
    location: 'Bali, Indonesia',
    rating: 4.8,
    reviewCount: 248,
    price: 199,
    description: 'Experience ultimate luxury in this beachfront resort with stunning ocean views and world-class amenities.',
    type: 'resort',
    features: ['Pool', 'Spa', 'Restaurant', 'Beach Access', 'Free WiFi'],
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'Urban Boutique Hotel',
    location: 'Paris, France',
    rating: 4.6,
    reviewCount: 186,
    price: 249,
    description: 'Stylish boutique hotel in the heart of the city, walking distance to major attractions and shopping.',
    type: 'hotel',
    features: ['Restaurant', 'Bar', 'Fitness Center', 'Room Service', 'Free WiFi'],
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    name: 'Seaside Villa Retreat',
    location: 'Santorini, Greece',
    rating: 4.9,
    reviewCount: 132,
    price: 349,
    description: 'Private villa with infinity pool and panoramic sea views, perfect for a romantic getaway.',
    type: 'villa',
    features: ['Private Pool', 'Sea View', 'Kitchen', 'Daily Housekeeping', 'Free WiFi'],
    image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    name: 'Traditional Garden Retreat',
    location: 'Kyoto, Japan',
    rating: 4.7,
    reviewCount: 94,
    price: 179,
    description: 'Experience authentic Japanese living in this traditional house with beautiful garden views.',
    type: 'cottage',
    features: ['Garden View', 'Tea Ceremony', 'Traditional Futon', 'Hot Bath', 'Free WiFi'],
    image: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    name: 'Modern City Apartment',
    location: 'London, UK',
    rating: 4.5,
    reviewCount: 156,
    price: 159,
    description: 'Contemporary apartment in a prime location with easy access to public transport and attractions.',
    type: 'apartment',
    features: ['Fully Equipped Kitchen', 'Washing Machine', 'Living Area', 'Work Space', 'Free WiFi'],
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    name: 'Mountain View Lodge',
    location: 'Swiss Alps, Switzerland',
    rating: 4.8,
    reviewCount: 112,
    price: 229,
    description: 'Cozy mountain lodge with breathtaking views, perfect for winter sports enthusiasts.',
    type: 'cottage',
    features: ['Fireplace', 'Mountain View', 'Ski Storage', 'Breakfast Included', 'Free WiFi'],
    image: 'https://images.pexels.com/photos/754268/pexels-photo-754268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'London, UK',
    quote: 'StayGold made our honeymoon absolutely perfect! The Gold Points system helped us upgrade to a luxury suite.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'San Francisco, USA',
    quote: 'As a frequent business traveler, the loyalty program has been a game-changer. Seamless booking and great properties!',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    location: 'Barcelona, Spain',
    quote: 'The customer service is exceptional. When our flight was delayed, they helped rearrange our booking with no extra fees.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
];