import { useState, useEffect, useRef } from 'react';
import {
  MapPin, Star,
  Compass, Award, ArrowRight,
  Heart, Car, Home,
  Filter, Utensils, Sparkles,
  Search, Globe, Check, Info
} from 'lucide-react';
import brandLogo from './assets/logo.png';
import './App.css';

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', mark: 'f' },
  { label: 'X', href: 'https://twitter.com', mark: 'x' },
  { label: 'Instagram', href: 'https://instagram.com', mark: 'ig' },
  { label: 'YouTube', href: 'https://youtube.com', mark: 'yt' },
  { label: 'WhatsApp', href: 'https://whatsapp.com', mark: 'wa' },
  { label: 'Pinterest', href: 'https://pinterest.com', mark: 'p' },
  { label: 'LinkedIn', href: 'https://linkedin.com', mark: 'in' }
];

function SocialIconMark({ mark }) {
  if (mark === 'ig') {
    return (
      <svg className="social-svg" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="8" y="8" width="16" height="16" rx="5" />
        <circle cx="16" cy="16" r="4" />
        <circle cx="21" cy="11" r="1.4" />
      </svg>
    );
  }

  if (mark === 'yt') {
    return (
      <svg className="social-svg" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="6" y="10" width="20" height="12" rx="4" />
        <path d="M14 13.2 20 16l-6 2.8Z" />
      </svg>
    );
  }

  if (mark === 'wa') {
    return (
      <svg className="social-svg" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.3 24.2 10.5 20A9 9 0 1 1 14 23.2Z" />
        <path d="M13 12.2c.4-.8.8-.8 1.2-.5l1 1.6c.2.3.1.7-.2.9l-.6.6c.7 1.4 1.8 2.5 3.3 3.2l.7-.8c.3-.3.6-.3.9-.1l1.5.8c.4.2.5.6.3 1-.4.9-1.1 1.3-2 1.2-3.7-.4-6.7-3.3-7.2-7-.1-.3.3-.7 1.1-.9Z" />
      </svg>
    );
  }

  return (
    <svg className="social-svg" viewBox="0 0 32 32" aria-hidden="true">
      <text x="16" y="21" textAnchor="middle">{mark}</text>
    </svg>
  );
}

const coverImage = (filename) => `${import.meta.env.BASE_URL}generated/${filename}`;

const sectionImages = {
  welcome: coverImage('welcome-india-summer-cover.png'),
  destinations: coverImage('destinations-india-summer-cover.png'),
  tours: coverImage('tours-india-summer-cover.png'),
  booking: coverImage('booking-india-summer-cover.png'),
  foods: coverImage('foods-india-summer-cover.png'),
  traditions: coverImage('traditions-india-summer-cover.png')
};

const pageHeaderBackground = (image) =>
  `linear-gradient(to bottom, rgba(8,10,16,0.9) 0%, rgba(8,10,16,0.7) 100%), url('${image}')`;

// Slide categories in the requested preview order.
const slides = [
  {
    id: 'cover',
    category: 'Welcome',
    location: 'Summer Escapes - Coastal India',
    title: 'WELCOME TO INDIA',
    subtitle: 'Sunlit Shores & Timeless Journeys',
    previewText: 'Begin with the full coastal welcome experience.',
    description: 'A warm coastal welcome into India: golden beaches, blue water, palm shadows, relaxed resort stays, flavorful food, and culture glowing under the summer sun.',
    imageUrl: sectionImages.welcome,
    thumbnail: sectionImages.welcome,
    link: '#/'
  },
  {
    id: 'destinations',
    category: 'Destinations',
    location: 'Andaman Islands - India',
    title: 'DESTINATIONS',
    subtitle: 'Beach Sands & Island Light',
    previewText: 'Explore beaches, islands, forts, and scenic escapes.',
    description: 'The destination preview highlights India’s tropical side: white sand, turquoise water, palm-lined beaches, island cliffs, and quiet coastal escapes made for summer travel.',
    imageUrl: sectionImages.destinations,
    thumbnail: sectionImages.destinations,
    link: '#/destinations'
  },
  {
    id: 'tours',
    category: 'Tours',
    location: 'Goa Coast - India',
    title: 'TOURS',
    subtitle: 'Golden Hour Beach Walks',
    previewText: 'Follow curated routes, guided walks, and hosted trips.',
    description: 'The tours preview is about guided beach walks, sunset conversations, boat rides, local hosts, and easy routes through India’s brightest coastal experiences.',
    imageUrl: sectionImages.tours,
    thumbnail: sectionImages.tours,
    link: '#/tours'
  },
  {
    id: 'booking',
    category: 'Booking',
    location: 'Kerala Beach Resort - India',
    title: 'BOOKINGS',
    subtitle: 'Beach Resorts & Easy Arrivals',
    previewText: 'Plan stays, arrivals, transport, and travel details.',
    description: 'The bookings preview focuses on smooth arrivals: beach resorts, private stays, concierge planning, luggage-ready comfort, and sunlit check-ins by the sea.',
    imageUrl: sectionImages.booking,
    thumbnail: sectionImages.booking,
    link: '#/booking'
  },
  {
    id: 'foods',
    category: 'Food',
    location: 'Goa Food Trail - India',
    title: 'FOODS',
    subtitle: 'Coastal Flavors & Tropical Plates',
    previewText: 'Taste coastal plates, local spices, and fresh dishes.',
    description: 'The food preview celebrates coastal India: grilled seafood, coconut drinks, mango, banana leaf plates, fresh chutneys, and spice-rich dishes beside the beach.',
    imageUrl: sectionImages.foods,
    thumbnail: sectionImages.foods,
    link: '#/foods'
  },
  {
    id: 'tradition',
    category: 'Traditions',
    location: 'Kerala Coast - India',
    title: 'TRADITIONS',
    subtitle: 'Festivals by the Sea',
    previewText: 'Discover festivals, rituals, music, and heritage moments.',
    description: 'The traditions preview shows India’s coastal celebrations: diyas on sand, marigold rituals, music, dance, colorful clothing, and festival evenings by the water.',
    imageUrl: sectionImages.traditions,
    thumbnail: sectionImages.traditions,
    link: '#/tradition'
  }
];

const HERO_PREVIEW_INTERVAL_MS = 7000;

const districtList = [
  'Ahilyanagar',
  'Akola',
  'Amravati',
  'Beed',
  'Bhandara',
  'Buldhana',
  'Chandrapur',
  'Chh. Sambhaji Nagar',
  'Dharashiv',
  'Dhule',
  'Gadchiroli',
  'Gondia',
  'Hingoli',
  'Jalgaon',
  'Jalna',
  'Kolhapur',
  'Latur',
  'Madha',
  'Mumbai City',
  'Mumbai Suburban',
  'Nagpur',
  'Nanded',
  'Nandurbar',
  'Nashik',
  'Palghar',
  'Parbhani',
  'Pune',
  'Raigad',
  'Ratnagiri',
  'Sangli',
  'Satara',
  'Sindhudurg',
  'Solapur',
  'Thane',
  'Wardha',
  'Washim',
  'Yavatmal'
];

const mockDestinations = [
  { id: 1, title: 'Taj Mahal, Agra', state: 'Uttar Pradesh', region: 'North', category: 'Heritage', rating: 4.9, reviews: 45200, price: 45, img: sectionImages.destinations, desc: 'The world\'s most famous monument of love, built in stunning white marble along the Yamuna River.' },
  { id: 2, title: 'Munnar Tea Hills', state: 'Kerala', region: 'South', category: 'Nature', rating: 4.8, reviews: 12400, price: 30, img: sectionImages.welcome, desc: 'Rolling tea gardens, pristine mist, and exotic flora nestled in the Western Ghats of Southern India.' },
  { id: 3, title: 'Hampi Ruins', state: 'Karnataka', region: 'South', category: 'Heritage', rating: 4.9, reviews: 9800, price: 35, img: sectionImages.traditions, desc: 'An awe-inspiring open-air museum showcasing the grand ruins of the historic Vijayanagara Empire.' },
  { id: 4, title: 'Leh Ladakh Passes', state: 'Jammu & Kashmir', region: 'North', category: 'Adventure', rating: 4.9, reviews: 8500, price: 80, img: sectionImages.tours, desc: 'Rugged mountains, deep blue high-altitude lakes, and some of the world\'s highest motorable passes.' },
  { id: 5, title: 'Jaisalmer Desert Dunes', state: 'Rajasthan', region: 'West', category: 'Adventure', rating: 4.7, reviews: 7100, price: 50, img: sectionImages.booking, desc: 'Golden sandstone forts, desert safaris under starry skies, and rich Rajasthani traditional performances.' },
  { id: 6, title: 'Sundarbans Mangrove', state: 'West Bengal', region: 'East', category: 'Nature', rating: 4.6, reviews: 5400, price: 40, img: sectionImages.foods, desc: 'The largest mangrove forest in the world, home to the elusive Royal Bengal Tiger.' },
];

const mockTours = [
  {
    id: 1,
    title: 'Golden Triangle & Royal Rajasthan Tour',
    duration: '8 Days',
    price: '$799',
    rating: '4.9',
    category: 'Heritage & Culture',
    highlights: ['Agra Taj Mahal Sunrise Guided Tour', 'Jaipur Amer Fort Elephant Ride Experience', 'Delhi Chandni Chowk Food Crawl', 'Jodhpur Golden Palace Homestay'],
    img: sectionImages.booking,
    date: 'Starting 12 June, 2026'
  },
  {
    id: 2,
    title: 'Kerala Backwaters & Tropical Coastline',
    duration: '6 Days',
    price: '$599',
    rating: '4.8',
    category: 'Nature & Wellness',
    highlights: ['Overnight Luxury Houseboat Cruise', 'Kathakali Traditional Dance Performance', 'Munnar Organic Tea Garden Walk', 'Kovalam Beach Yoga Session'],
    img: sectionImages.welcome,
    date: 'Starting 20 June, 2026'
  },
  {
    id: 3,
    title: 'Himalayan Spiritual Yoga & Trekking Trail',
    duration: '10 Days',
    price: '$999',
    rating: '4.9',
    category: 'Adventure & Spirituality',
    highlights: ['Ganges Ganga Aarti Ceremony in Rishikesh', 'High Altitude Valley Trek in Dharamshala', 'Meditation Retreat with Masters', 'White Water River Rafting Class IV'],
    img: sectionImages.tours,
    date: 'Starting 05 July, 2026'
  }
];

const luxuryHotels = [
  { id: 1, name: 'Taj Lake Palace', type: 'Palace Hotel', location: 'Udaipur, Rajasthan', price: '₹55,000/N', img: sectionImages.booking },
  { id: 2, name: 'Kumarakom Lake Resort', type: 'Luxury Resort', location: 'Kottayam, Kerala', price: '₹22,000/N', img: sectionImages.welcome },
  { id: 3, name: 'Evolve Back Kabini', type: 'Eco Lodge', location: 'Kabini Forest, Karnataka', price: '₹34,000/N', img: sectionImages.destinations }
];

const bookingTabs = [
  { id: 'homes', label: 'Homes', icon: Home, badge: null },
  { id: 'experiences', label: 'Experiences', icon: Sparkles, badge: 'NEW' },
  { id: 'services', label: 'Services', icon: Car, badge: 'NEW' }
];

const bookingRows = {
  homes: [
    {
      title: 'Popular homes in Mumbai',
      items: [
        { id: 'mum-1', title: 'Sea-view apartment in Bandra', meta: 'Mumbai, Maharashtra', price: '₹7,850 for 2 nights', rating: '4.94', image: sectionImages.booking },
        { id: 'mum-2', title: 'Heritage suite near Colaba', meta: 'Mumbai, Maharashtra', price: '₹9,420 for 2 nights', rating: '4.89', image: sectionImages.destinations },
        { id: 'mum-3', title: 'Boutique room in Juhu', meta: 'Mumbai, Maharashtra', price: '₹6,180 for 2 nights', rating: '4.82', image: sectionImages.welcome },
        { id: 'mum-4', title: 'Modern stay by Marine Drive', meta: 'Mumbai, Maharashtra', price: '₹11,250 for 2 nights', rating: '4.96', image: sectionImages.tours },
        { id: 'mum-5', title: 'Garden villa in Powai', meta: 'Mumbai, Maharashtra', price: '₹8,760 for 2 nights', rating: '4.91', image: sectionImages.traditions },
        { id: 'mum-6', title: 'City studio near airport', meta: 'Mumbai, Maharashtra', price: '₹5,430 for 2 nights', rating: '4.78', image: sectionImages.foods }
      ]
    },
    {
      title: 'Available in Goa this weekend',
      items: [
        { id: 'goa-1', title: 'Beach hut in Palolem', meta: 'South Goa, Goa', price: '₹4,950 for 2 nights', rating: '4.88', image: sectionImages.welcome },
        { id: 'goa-2', title: 'Villa with private pool', meta: 'Assagao, Goa', price: '₹18,500 for 2 nights', rating: '4.97', image: sectionImages.booking },
        { id: 'goa-3', title: 'Portuguese home in Fontainhas', meta: 'Panaji, Goa', price: '₹7,300 for 2 nights', rating: '4.85', image: sectionImages.traditions },
        { id: 'goa-4', title: 'Palm cottage near Anjuna', meta: 'North Goa, Goa', price: '₹6,820 for 2 nights', rating: '4.92', image: sectionImages.destinations },
        { id: 'goa-5', title: 'Designer condo by the coast', meta: 'Candolim, Goa', price: '₹9,640 for 2 nights', rating: '4.9', image: sectionImages.tours },
        { id: 'goa-6', title: 'Riverside stay in Siolim', meta: 'Siolim, Goa', price: '₹5,970 for 2 nights', rating: '4.81', image: sectionImages.foods }
      ]
    },
    {
      title: 'Palace and resort stays in Rajasthan',
      items: [
        { id: 'raj-1', title: 'Lake palace suite', meta: 'Udaipur, Rajasthan', price: '₹32,000 for 2 nights', rating: '4.98', image: luxuryHotels[0].img },
        { id: 'raj-2', title: 'Desert haveli room', meta: 'Jaisalmer, Rajasthan', price: '₹12,400 for 2 nights', rating: '4.87', image: sectionImages.booking },
        { id: 'raj-3', title: 'Pink city heritage stay', meta: 'Jaipur, Rajasthan', price: '₹10,250 for 2 nights', rating: '4.9', image: sectionImages.traditions },
        { id: 'raj-4', title: 'Fort-view boutique hotel', meta: 'Jodhpur, Rajasthan', price: '₹13,890 for 2 nights', rating: '4.92', image: sectionImages.destinations },
        { id: 'raj-5', title: 'Courtyard resort retreat', meta: 'Pushkar, Rajasthan', price: '₹8,100 for 2 nights', rating: '4.84', image: sectionImages.welcome }
      ]
    }
  ],
  experiences: [
    {
      title: 'Tour packages by city',
      items: [
        { id: 'exp-1', title: 'Mumbai city heritage walk', meta: '3 hours · Hosted tour', price: '₹1,800 per guest', rating: '4.91', image: sectionImages.destinations },
        { id: 'exp-2', title: 'Goa sunset cruise and food trail', meta: '5 hours · Coastal package', price: '₹3,400 per guest', rating: '4.88', image: sectionImages.foods },
        { id: 'exp-3', title: 'Jaipur forts day tour', meta: 'Full day · Guided package', price: '₹5,200 per guest', rating: '4.96', image: sectionImages.traditions },
        { id: 'exp-4', title: 'Kerala backwater houseboat', meta: 'Overnight · Scenic package', price: '₹9,800 per guest', rating: '4.94', image: sectionImages.welcome },
        { id: 'exp-5', title: 'Himalayan sunrise trek', meta: '2 days · Adventure tour', price: '₹7,500 per guest', rating: '4.89', image: sectionImages.tours }
      ]
    },
    {
      title: 'Maharashtra weekend experiences',
      items: [
        { id: 'mh-1', title: 'Ratnagiri coastal food trail', meta: 'Ratnagiri · Local host', price: '₹2,200 per guest', rating: '4.92', image: sectionImages.foods },
        { id: 'mh-2', title: 'Ajanta and Ellora heritage route', meta: 'Chh. Sambhaji Nagar · 2 days', price: '₹6,900 per guest', rating: '4.95', image: sectionImages.traditions },
        { id: 'mh-3', title: 'Lonavala monsoon escape', meta: 'Lonavala · Day tour', price: '₹3,100 per guest', rating: '4.84', image: sectionImages.destinations },
        { id: 'mh-4', title: 'Konkan beach hopping tour', meta: 'Konkan Coast · 3 days', price: '₹8,450 per guest', rating: '4.9', image: sectionImages.welcome }
      ]
    }
  ],
  services: [
    {
      title: 'Flights across India',
      items: [
        { id: 'flt-1', title: 'Mumbai to Goa flights', meta: 'Daily departures · Economy to business', price: 'From ₹3,450', rating: '4.8', image: sectionImages.booking },
        { id: 'flt-2', title: 'Delhi to Jaipur flights', meta: 'Quick hops · Flexible fares', price: 'From ₹2,980', rating: '4.76', image: sectionImages.tours },
        { id: 'flt-3', title: 'Bengaluru to Kochi flights', meta: 'South India route', price: 'From ₹3,850', rating: '4.82', image: sectionImages.welcome },
        { id: 'flt-4', title: 'Mumbai to Udaipur flights', meta: 'Royal Rajasthan route', price: 'From ₹5,120', rating: '4.86', image: sectionImages.traditions }
      ]
    },
    {
      title: 'Car booking and taxis in India',
      items: [
        { id: 'cab-1', title: 'Airport taxi in Mumbai', meta: 'Sedan, SUV, premium cars', price: 'From ₹799', rating: '4.87', image: sectionImages.destinations },
        { id: 'cab-2', title: 'Goa private driver', meta: 'Hourly and full-day rental', price: 'From ₹2,400/day', rating: '4.91', image: sectionImages.welcome },
        { id: 'cab-3', title: 'Jaipur fort route cab', meta: 'Local driver · 8 hours', price: 'From ₹2,900/day', rating: '4.85', image: sectionImages.booking },
        { id: 'cab-4', title: 'Kerala coastal taxi', meta: 'Kochi, Alleppey, Munnar', price: 'From ₹3,200/day', rating: '4.88', image: sectionImages.foods },
        { id: 'cab-5', title: 'Ratnagiri local transfers', meta: 'Beach and temple routes', price: 'From ₹1,850/day', rating: '4.83', image: sectionImages.traditions }
      ]
    }
  ]
};

const mockFoods = [
  { id: 1, name: 'Butter Chicken & Naan', region: 'North India', type: 'non-veg', spiciness: 'Medium', desc: 'A rich, creamy, tomato-based curry loaded with tandoor-roasted chicken, served with hot butter garlic naan.', img: sectionImages.foods },
  { id: 2, name: 'Traditional Ghee Dosa', region: 'South India', type: 'veg', spiciness: 'Mild', desc: 'A super-crisp, thin fermented crepe made of rice and lentils, served with fresh coconut chutney and piping hot sambar.', img: sectionImages.welcome },
  { id: 3, name: 'Misal Pav & Farsan', region: 'West India', type: 'veg', spiciness: 'High', desc: 'A spicy curry made of sprouted moth beans, topped with crunchy savory farsan, onions, coriander, and soft pav buns.', img: sectionImages.booking },
  { id: 4, name: 'Shorba & Biryani Feast', region: 'East India', type: 'non-veg', spiciness: 'Medium', desc: 'Aromatic basmati rice cooked slowly with delicate herbs, spices, and marinated mutton, served with hot spiced gravy.', img: sectionImages.traditions }
];

const mockTraditions = [
  { id: 1, title: 'Diwali - The Festival of Lights', date: 'November', place: 'Nationwide', desc: 'India’s biggest and most stunning celebration, symbolizing the victory of light over darkness. The entire nation illuminates with millions of clay oil lamps (diyas), lanterns, and vibrant firework displays.' },
  { id: 2, title: 'Holi - The Festival of Colors', date: 'March', place: 'Mathura & Nationwide', desc: 'A chaotic, breathtaking festival celebrating spring, love, and colors. People smear organic colored powders on each other, dance to massive temple drum beats, and share traditional milk-based sweets.' },
  { id: 3, title: 'Kathakali Dance Drama', date: 'Year-Round', place: 'Kerala', desc: 'A spectacular, highly stylized classical dance drama known for its colorful makeup, elaborate costumes, and deep expressive hand gestures (mudras) describing ancient epics.' },
  { id: 4, title: 'Pushkar Camel Fair', date: 'November', place: 'Pushkar, Rajasthan', desc: 'One of the world\'s largest camel and livestock fairs, transforming a desert oasis into a vibrant carnival of folk dancers, musicians, camel races, and local bazaars.' }
];

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');
  const [scrolled, setScrolled] = useState(false);

  // Hero Carousel State
  const [activeSlide, setActiveSlide] = useState(0);

  // Destinations page filter state
  const [destFilterRegion, setDestFilterRegion] = useState('All');
  const [destFilterCat, setDestFilterCat] = useState('All');

  // Booking page state
  const [bookingTab, setBookingTab] = useState('homes');

  // Subpages refs
  const topRef = useRef(null);

  // Sync route changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scrolling to style header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycle the landing preview so each card advances smoothly.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((slide) => (slide + 1) % slides.length);
    }, HERO_PREVIEW_INTERVAL_MS);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  const selectSlide = (index) => {
    setActiveSlide(index);
  };

  const previewSlides = Array.from({ length: slides.length - 1 }, (_, index) => {
    const originalIndex = (activeSlide + index + 1) % slides.length;
    return { ...slides[originalIndex], originalIndex };
  });

  // Destinations page data combines main destinations and Maharashtra districts
  const districtObjects = districtList.map((name, idx) => ({
    id: 100 + idx,
    title: `${name}, Maharashtra`,
    state: 'Maharashtra',
    region: 'West',
    category: 'District',
    rating: 5,
    reviews: 0,
    price: 0,
    img: sectionImages.destinations,
    desc: `${name} district in Maharashtra.`
  }));
  const allDestinations = [...mockDestinations, ...districtObjects];

  // Filters for destinations
  const filteredDestinations = allDestinations.filter(d => {
    const matchesRegion = destFilterRegion === 'All' || d.region === destFilterRegion;
    const matchesCat = destFilterCat === 'All' || d.category === destFilterCat;
    return matchesRegion && matchesCat;
  });
  const activeBookingRows = bookingRows[bookingTab];

  return (
    <div ref={topRef}>
      {/* Dynamic Navigation Bar */}
      <div className={`site-chrome ${scrolled ? 'scrolled' : ''}`}>
        <div className="utility-bar">
          <div className="utility-contact">
            <span>+91 1800-425-4747</span>
            <span>info@maharashtratourism.gov.in</span>
          </div>
          <span className="utility-official">The Official Site of Maharashtra Tourism</span>
          <div className="utility-languages">
            <span>Language</span>
            <strong>English</strong>
            <span>मराठी</span>
            <span>हिन्दी</span>
          </div>
        </div>

        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <a href="#/" className="logo-container">
            <img src={brandLogo} alt="Maharashtra Tourism" className="logo-icon" />
            <div className="logo-text">
              <span className="logo-main">Incredible India</span>
              <span className="logo-sub">Maharashtra Tourism</span>
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="#/" className={`nav-link ${currentRoute === '#/' ? 'active' : ''}`}>Home</a></li>
            <li><a href="#/destinations" className={`nav-link ${currentRoute === '#/destinations' ? 'active' : ''}`}>Destinations</a></li>
            <li><a href="#/tours" className={`nav-link ${currentRoute === '#/tours' ? 'active' : ''}`}>Guided Tours</a></li>
            <li><a href="#/booking" className={`nav-link ${currentRoute === '#/booking' ? 'active' : ''}`}>Bookings</a></li>
            <li><a href="#/foods" className={`nav-link ${currentRoute === '#/foods' ? 'active' : ''}`}>Regional Foods</a></li>
            <li><a href="#/tradition" className={`nav-link ${currentRoute === '#/tradition' ? 'active' : ''}`}>Traditions</a></li>
          </ul>

          <div className="nav-actions">
            <button className="nav-action-btn" title="Search Site"><Search size={20} /></button>
            <button className="nav-action-btn" title="Change Language"><Globe size={20} /></button>
            <a href="#/booking" className="book-btn">Plan Your Trip</a>
          </div>
        </header>
      </div>

      {/* RENDER PAGES BASED ON SPA ROUTE */}
      {currentRoute === '#/' && (
        <>
          {/* HERO SECTION CONTAINER */}
          <section className="hero-container">
            <div className="hero-video-wrapper">
              {slides.map((slide, idx) => (
                <img
                  key={slide.id}
                  src={slide.imageUrl}
                  alt={`${slide.title} tourism preview`}
                  className={`hero-video ${idx === activeSlide ? 'active' : ''}`}
                />
              ))}
            </div>

            <div className="hero-overlay" />

            <div className="hero-carousel-panel">
              <div className="hero-browse-cue" aria-hidden="true">
                <svg className="hero-browse-arrow" viewBox="0 0 190 118">
                  <path
                    className="hero-browse-swirl"
                    d="M14 20c32-16 75-16 89 3 17 24-14 48-57 38-30-7-31-28-4-34 35-8 80 16 67 42-11 22-58 25-79 9-17-13-8-32 17-30 32 3 53 27 83 39"
                  />
                  <path className="hero-browse-head" d="M127 87l42 11-35 22M127 87l20 34" />
                </svg>
                <span>OR BROWSE CATEGORIES</span>
              </div>
              <div className="carousel-cards-container" key={activeSlide}>
                {previewSlides.map((card) => (
                  <div className="hero-preview-item" key={card.id}>
                    <div
                      className="carousel-card"
                      onClick={() => selectSlide(card.originalIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          selectSlide(card.originalIndex);
                        }
                      }}
                      aria-label={`Preview ${card.category}`}
                    >
                      <img
                        src={card.thumbnail}
                        alt={`${card.category} preview`}
                        className="carousel-card-img"
                      />
                      <div className="carousel-card-overlay">
                        <div className="carousel-card-copy">
                          <h4 className="carousel-card-title">{card.category}</h4>
                          <p className="carousel-card-desc">{card.previewText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BODY SECTION */}

          {/* 1. Experience Categories Grid */}
          <section className="section-wrapper">
            <span className="section-tag">Find Your Passion</span>
            <h2 className="section-title">Experience India By Theme</h2>
            <p className="section-subtitle">
              From snow-capped peaks in the north to deep tropical shores in the south, find itineraries customized to your desires.
            </p>

            <div className="experience-grid">
                <div className="experience-card" onClick={() => window.location.hash = '#/destinations'}>
                  <img src={sectionImages.tours} alt="Mountains" className="experience-card-img" />
                  <div className="experience-card-overlay">
                    <div className="experience-icon"><Compass size={24} /></div>
                    <h3 className="experience-card-title">Mountains</h3>
                    <p className="experience-card-desc">Trek the misty valleys of Himachal and scale high altitude mountain passes.</p>
                    <span className="experience-card-count">12 Active Trails</span>
                  </div>
                </div>

                <div className="experience-card" onClick={() => window.location.hash = '#/destinations'}>
                  <img src={sectionImages.welcome} alt="Beaches" className="experience-card-img" />
                  <div className="experience-card-overlay">
                    <div className="experience-icon"><Globe size={24} /></div>
                    <h3 className="experience-card-title">Beaches</h3>
                    <p className="experience-card-desc">Swaying palms, golden sands, and majestic coastal water cruises in Kerala.</p>
                    <span className="experience-card-count">24 Coastal Stays</span>
                  </div>
                </div>

                <div className="experience-card" onClick={() => window.location.hash = '#/destinations'}>
                  <img src={sectionImages.destinations} alt="Wildlife" className="experience-card-img" />
                  <div className="experience-card-overlay">
                    <div className="experience-icon"><Award size={24} /></div>
                    <h3 className="experience-card-title">Wildlife</h3>
                    <p className="experience-card-desc">Spot Bengal tigers, Asiatic lions, and curations of exotic tropical bird species.</p>
                    <span className="experience-card-count">9 Safaris Open</span>
                  </div>
                </div>

                <div className="experience-card" onClick={() => window.location.hash = '#/destinations'}>
                  <img src={sectionImages.traditions} alt="Heritage" className="experience-card-img" />
                  <div className="experience-card-overlay">
                    <div className="experience-icon"><Sparkles size={24} /></div>
                    <h3 className="experience-card-title">Heritage</h3>
                    <p className="experience-card-desc">Marvel at ancient temples, palace architecture, and UNESCO sites dating back millennia.</p>
                    <span className="experience-card-count">36 Monument Walks</span>
                  </div>
                </div>
              </div>
          </section>

          {/* 2. Popular Destinations Showcase */}
          <section className="section-wrapper alternate">
            <span className="section-tag">Handpicked for You</span>
            <h2 className="section-title">Most Popular Destinations</h2>
            <p className="section-subtitle">
              Discover the locations that captures travelers’ hearts across the Indian subcontinent.
            </p>

            <div className="destinations-showcase">
              {mockDestinations.slice(0, 3).map((dest) => (
                <div key={dest.id} className="destination-card">
                  <div className="destination-card-img-wrapper">
                    <img src={dest.img} alt={dest.title} className="destination-card-img" />
                    <span className="destination-tag-badge">{dest.category}</span>
                    <div className="destination-rating-badge">
                      <Star size={12} fill="#FFFFFF" />
                      {dest.rating}
                    </div>
                  </div>
                  <div className="destination-card-content">
                    <div className="destination-card-location">
                      <MapPin size={14} className="location-icon" />
                      <span>{dest.state}, India</span>
                    </div>
                    <h3 className="destination-card-title">{dest.title}</h3>
                    <p className="experience-card-desc">{dest.desc}</p>
                    <div className="destination-card-footer">
                      <div className="destination-card-stats">
                        <span className="destination-stats-label">Travelers</span>
                        <span className="destination-stats-value">{dest.reviews.toLocaleString()}+</span>
                      </div>
                      <div className="destination-card-price">
                        <span className="destination-price-label">Avg. Cost</span>
                        <span className="destination-price-value">${dest.price}/day</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <a href="#/destinations" className="book-btn" style={{ padding: '0.8rem 2.2rem' }}>View All Destinations</a>
            </div>
          </section>

          {/* 3. Why Choose India Section with Stats & Overlapping Collage */}
          <section className="section-wrapper">
            <div className="why-choose-grid">
              <div className="why-choose-content">
                <span className="section-tag" style={{ textAlign: 'left' }}>The Land of Diversity</span>
                <h2 className="why-choose-heading">Why Choose India For Your Next Adventure?</h2>
                <p className="why-choose-desc">
                  India offers a unique sensory celebration unmatched by any other destination. From spiritual retreats in ancient Ganges ghats to absolute luxury in Maharaja palaces, organic street foods, and rich cultural traditions, your perspective of life will change forever.
                </p>

                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-number">5,000+</span>
                    <span className="stat-label">Years</span>
                    <span className="stat-desc">Of continuous living history & culture</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">28</span>
                    <span className="stat-label">States</span>
                    <span className="stat-desc">Each offering distinct language & cuisines</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">36</span>
                    <span className="stat-label">UNESCO</span>
                    <span className="stat-desc">World Heritage archaeological masterpieces</span>
                  </div>
                </div>
              </div>

              {/* Overlapping Collage */}
              <div className="collage-container">
                <div className="collage-img collage-img-1">
                  <img src={sectionImages.destinations} alt="Collage 1" />
                </div>
                <div className="collage-img collage-img-2">
                  <img src={sectionImages.booking} alt="Collage 2" />
                </div>
                <div className="collage-img collage-img-3">
                  <img src={sectionImages.traditions} alt="Collage 3" />
                </div>
                <div className="collage-accent-badge">
                  <span className="collage-accent-num">#1</span>
                  <span className="collage-accent-text">Travel Choice</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Upcoming Tours Section */}
          <section className="section-wrapper alternate">
            <span className="section-tag">All-Inclusive Journeys</span>
            <h2 className="section-title">Upcoming Guided Tours</h2>
            <p className="section-subtitle">
              Join curated luxury groups led by master local guides, historical experts, and premium safety hosts.
            </p>

            <div className="tours-grid">
              {mockTours.slice(0, 2).map((tour) => (
                <div key={tour.id} className="tour-card">
                  <div className="tour-img-wrapper">
                    <img src={tour.img} alt={tour.title} className="tour-img" />
                    <span className="tour-duration-badge">{tour.duration}</span>
                  </div>
                  <div className="tour-info">
                    <div>
                      <span className="tour-date">{tour.date}</span>
                      <h3 className="tour-title">{tour.title}</h3>
                      <ul className="tour-highlights">
                        {tour.highlights.map((h, i) => (
                          <li key={i} className="tour-highlight-item">
                            <Check size={14} className="saffron-check" style={{ color: 'var(--saffron)' }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="tour-footer">
                      <div className="tour-price">
                        <span className="tour-price-label">Price/Guest</span>
                        <span className="tour-price-value">{tour.price}</span>
                      </div>
                      <button className="tour-book-btn" onClick={() => window.location.hash = '#/booking'}>Book Slots</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Call to Action Banner */}
          <section className="section-wrapper">
            <div className="cta-banner">
              <div className="cta-banner-content">
                <h2 className="cta-title">Start Planning Your Custom Journey</h2>
                <p className="cta-desc">
                  Subscribe to our premium catalog, or request customized itinerary guides from our travel planners. Let us curate your perfect vacation today.
                </p>
                <form className="cta-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing! Your travel guide is on the way.'); }}>
                  <input type="email" placeholder="Enter your email address" className="cta-input" required />
                  <button type="submit" className="cta-submit-btn">Request Catalog</button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}

      {/* DESTINATIONS CATEGORY PAGE */}
      {currentRoute === '#/destinations' && (
        <>
          <div className="page-header" style={{ backgroundImage: pageHeaderBackground(sectionImages.destinations) }}>
            <span className="page-subtitle">Curated Indian Wonders</span>
            <h1 className="page-title">Explore Indian Destinations</h1>
          </div>

          <div className="page-container">
            {/* Interactive Filters Bar */}
            <div className="filter-bar">
              <div className="filters-group">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                  <Filter size={16} style={{ marginRight: '0.4rem', color: 'var(--saffron)' }} /> Regions:
                </span>
                {['All', 'North', 'South', 'East', 'West'].map((region) => (
                  <button
                    key={region}
                    className={`filter-btn ${destFilterRegion === region ? 'active' : ''}`}
                    onClick={() => setDestFilterRegion(region)}
                  >
                    {region}
                  </button>
                ))}
              </div>

              <div className="filters-group">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                  <Compass size={16} style={{ marginRight: '0.4rem', color: 'var(--saffron)' }} /> Theme:
                </span>
                {['All', 'Heritage', 'Nature', 'Adventure'].map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${destFilterCat === cat ? 'active' : ''}`}
                    onClick={() => setDestFilterCat(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Destinations grid list */}
            {filteredDestinations.length > 0 ? (
              <div className="destinations-grid">
                {filteredDestinations.map((dest) => (
                  <div key={dest.id} className="destination-card">
                    <div className="destination-card-img-wrapper">
                      <img src={dest.img} alt={dest.title} className="destination-card-img" />
                      <span className="destination-tag-badge">{dest.category}</span>
                      <div className="destination-rating-badge">
                        <Star size={12} fill="#FFFFFF" />
                        {dest.rating}
                      </div>
                    </div>
                    <div className="destination-card-content">
                      <div className="destination-card-location">
                        <MapPin size={14} className="location-icon" />
                        <span>{dest.state}, India</span>
                      </div>
                      <h3 className="destination-card-title">{dest.title}</h3>
                      <p className="experience-card-desc" style={{ marginBottom: '1.2rem' }}>{dest.desc}</p>

                      <div className="destination-card-footer">
                        <div className="destination-card-stats">
                          <span className="destination-stats-label">Audience Reviews</span>
                          <span className="destination-stats-value">{dest.reviews.toLocaleString()}+</span>
                        </div>
                        <div className="destination-card-price">
                          <span className="destination-price-label">Avg. Cost</span>
                          <span className="destination-price-value">${dest.price}/day</span>
                        </div>
                      </div>

                      <button
                        className="book-btn"
                        onClick={() => window.location.hash = '#/booking'}
                        style={{ width: '100%', marginTop: '1.2rem', textAlign: 'center' }}
                      >
                        Plan Travel to {dest.title.split(',')[0]}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                <Info size={40} style={{ color: 'var(--saffron)', marginBottom: '1rem' }} />
                <h3>No Destinations Match Selected Filters</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Try changing your region or theme criteria.</p>
              </div>
            )}
          </div>
        </>
      )}

      {/* TOURS CATEGORY PAGE */}
      {currentRoute === '#/tours' && (
        <>
          <div className="page-header" style={{ backgroundImage: pageHeaderBackground(sectionImages.tours) }}>
            <span className="page-subtitle">Fully Accompanied Tours</span>
            <h1 className="page-title">Curated Indian Tour Packages</h1>
          </div>

          <div className="page-container">
            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {mockTours.map((tour) => (
                <div key={tour.id} className="tour-card" style={{ display: 'flex', flexDirection: 'row', minHeight: '380px' }}>
                  <div className="tour-img-wrapper" style={{ width: '45%' }}>
                    <img src={tour.img} alt={tour.title} className="tour-img" style={{ height: '100%' }} />
                    <span className="tour-duration-badge" style={{ fontSize: '0.9rem', padding: '0.4rem 1.2rem' }}>{tour.duration}</span>
                  </div>
                  <div className="tour-info" style={{ width: '55%', padding: '2.5rem' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                        <span className="tour-date">{tour.date}</span>
                        <span className="destination-rating-badge" style={{ position: 'static' }}>
                          <Star size={12} fill="#FFFFFF" /> {tour.rating}
                        </span>
                      </div>

                      <h3 className="tour-title" style={{ fontSize: '1.7rem', marginBottom: '1.2rem' }}>{tour.title}</h3>
                      <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--saffron)', fontWeight: '700', display: 'block', marginBottom: '1rem', letterSpacing: '1px' }}>
                        Core Tour Inclusions
                      </span>

                      <ul className="tour-highlights" style={{ marginBottom: '2rem' }}>
                        {tour.highlights.map((h, i) => (
                          <li key={i} className="tour-highlight-item" style={{ fontSize: '0.95rem', marginBottom: '0.6rem' }}>
                            <Check size={16} className="saffron-check" style={{ color: 'var(--saffron)' }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="tour-footer" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                      <div className="tour-price">
                        <span className="tour-price-label">All-Inclusive Per Guest</span>
                        <span className="tour-price-value" style={{ fontSize: '1.7rem', color: 'var(--saffron)' }}>{tour.price}</span>
                      </div>

                      <button
                        className="book-btn"
                        onClick={() => window.location.hash = '#/booking'}
                        style={{ padding: '0.8rem 2.2rem' }}
                      >
                        Enquire slots
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* BOOKING CATEGORY PAGE */}
      {currentRoute === '#/booking' && (
        <>
          <section className="booking-marketplace">
            <div className="booking-marketplace-top">
              <div className="booking-mode-tabs">
                {bookingTabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      className={`booking-mode-tab ${bookingTab === tab.id ? 'active' : ''}`}
                      type="button"
                      onClick={() => setBookingTab(tab.id)}
                    >
                      {tab.badge && <span className="booking-tab-badge">{tab.badge}</span>}
                      <TabIcon size={34} strokeWidth={1.7} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="booking-search-pill" role="search">
                <div className="booking-search-field">
                  <strong>Where</strong>
                  <span>Search destinations</span>
                </div>
                <div className="booking-search-field">
                  <strong>When</strong>
                  <span>Add dates</span>
                </div>
                <div className="booking-search-field">
                  <strong>Who</strong>
                  <span>Add guests</span>
                </div>
                <button className="booking-search-btn" type="button" aria-label="Search bookings">
                  <Search size={24} />
                </button>
              </div>
            </div>

            <div className="booking-marketplace-content">
              {activeBookingRows.map((row) => (
                <section className="booking-row" key={row.title}>
                  <div className="booking-row-header">
                    <h2>{row.title}</h2>
                    <button type="button" aria-label={`View more ${row.title}`}>
                      <ArrowRight size={20} />
                    </button>
                  </div>

                  <div className="booking-scroll-row">
                    {row.items.map((item) => (
                      <article className="booking-listing-card" key={item.id}>
                        <div className="booking-listing-image-wrap">
                          <img src={item.image} alt={item.title} className="booking-listing-image" />
                          <span className="booking-favorite-badge">Guest favorite</span>
                          <button className="booking-heart-btn" type="button" aria-label={`Save ${item.title}`}>
                            <Heart size={24} />
                          </button>
                        </div>
                        <div className="booking-listing-copy">
                          <h3>{item.title}</h3>
                          <p>{item.meta}</p>
                          <span>{item.price} · <Star size={13} fill="currentColor" /> {item.rating}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        </>
      )}

      {/* FOODS CATEGORY PAGE */}
      {currentRoute === '#/foods' && (
        <>
          <div className="page-header" style={{ backgroundImage: pageHeaderBackground(sectionImages.foods) }}>
            <span className="page-subtitle">A Sensory Spice Celebration</span>
            <h1 className="page-title">Regional Indian Cuisines</h1>
          </div>

          <div className="page-container">
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Indian Culinary Treasures</h2>
            <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
              Delve into heritage recipes passed down through generations, combining therapeutic ayurvedic spices with exquisite flavors.
            </p>

            <div className="foods-explorer">
              {mockFoods.map((food) => (
                <div key={food.id} className="food-card">
                  <div className="food-card-img-wrapper">
                    <img src={food.img} alt={food.name} className="food-card-img" />
                  </div>
                  <div className="food-card-content">
                    <span className="food-card-region">{food.region}</span>
                    <h3 className="food-card-name">{food.name}</h3>
                    <p className="food-card-desc">{food.desc}</p>

                    <div className="food-card-footer">
                      <span className={`food-card-badge ${food.type}`}>
                        {food.type === 'veg' ? 'PURE VEG' : 'NON-VEG'}
                      </span>
                      <span className="food-card-spiciness">
                        Spice: <strong style={{ color: 'var(--saffron)' }}>{food.spiciness}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '5rem', backgroundColor: 'var(--obsidian-card)', borderRadius: '24px', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <Utensils size={36} style={{ color: 'var(--saffron)', marginBottom: '1.2rem' }} />
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.8rem' }}>Curated Regional Food Trails</h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
                Join local celebrity chefs on multi-day journeys, wandering into traditional spice gardens, private royal chef kitchens, and high-energy street food walks in old heritage lanes.
              </p>
              <button className="book-btn" onClick={() => window.location.hash = '#/booking'}>
                Enquire Food Trails
              </button>
            </div>
          </div>
        </>
      )}

      {/* TRADITION CATEGORY PAGE */}
      {currentRoute === '#/tradition' && (
        <>
          <div className="page-header" style={{ backgroundImage: pageHeaderBackground(sectionImages.traditions) }}>
            <span className="page-subtitle">Centuries of living soul</span>
            <h1 className="page-title">Festivals, Culture & Performing Arts</h1>
          </div>

          <div className="page-container">
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Cultural Events Timeline</h2>
            <p className="section-subtitle" style={{ marginBottom: '5rem' }}>
              Time your journey to experience the explosion of color, devotion, dance, and music in their authentic regional hubs.
            </p>

            <div className="festivals-timeline">
              {mockTraditions.map((t) => (
                <div key={t.id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-date">{t.date} | Held in {t.place}</span>
                    <h3 className="timeline-title">{t.title}</h3>
                    <p className="timeline-desc">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cultural showcase video callout */}
            <div style={{ marginTop: '6rem', background: 'linear-gradient(135deg, #1A120B 0%, var(--obsidian-card) 100%)', borderRadius: '24px', padding: '3.5rem 4%', border: '1px solid rgba(255, 111, 0, 0.15)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'left' }}>
                <span className="section-tag" style={{ textAlign: 'left' }}>Royal Heritage Walks</span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1.2rem', lineHeight: '1.2' }}>
                  Uncover Ancient Monolithic Temple Sculptures
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.8rem' }}>
                  Wander through the breathtaking stone caverns of Ajanta & Ellora in Maharashtra, carved directly into rocky basalt cliffs starting in the 2nd century BCE, exhibiting spectacular Buddhist, Hindu, and Jain mural paintings and monolithic architecture.
                </p>
                <button className="book-btn" onClick={() => window.location.hash = '#/booking'}>
                  Book Heritage Walks
                </button>
              </div>

              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '300px', boxShadow: '0 15px 30px rgba(0,0,0,0.4)' }}>
                <img src={sectionImages.traditions} alt="Tradition Walk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(8,10,16,0.6) 0%, transparent 100%)' }} />
              </div>
            </div>
          </div>
        </>
      )}

      {/* GLOBAL FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#/" className="logo-container" style={{ alignSelf: 'flex-start' }}>
              <img src={brandLogo} alt="Maharashtra Tourism" className="logo-icon" />
              <div className="logo-text">
                <span className="logo-main" style={{ fontSize: '1.25rem' }}>Incredible India</span>
                <span className="logo-sub" style={{ fontSize: '0.7rem' }}>Maharashtra Tourism</span>
              </div>
            </a>
            <p className="footer-desc">
              Promoting responsible, luxury, and sustainable tourism across the rich states of India. Discover heritage sites, palaces, cuisines, and beaches in high-fidelity comfort.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="social-icon social-brand" target="_blank" rel="noreferrer" aria-label={social.label}>
                  <SocialIconMark mark={social.mark} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li className="footer-link"><a href="#/">Home Page</a></li>
              <li className="footer-link"><a href="#/destinations">Destinations Map</a></li>
              <li className="footer-link"><a href="#/tours">Guided Packages</a></li>
              <li className="footer-link"><a href="#/booking">Concierge Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Core Experiences</h4>
            <ul className="footer-links">
              <li className="footer-link"><a href="#/foods">Regional Foods</a></li>
              <li className="footer-link"><a href="#/tradition">Vibrant Traditions</a></li>
              <li className="footer-link"><a href="#/booking">Palace Suite Stays</a></li>
              <li className="footer-link"><a href="#/destinations">Adventure Safaris</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Concierge Contacts</h4>
            <ul className="footer-links">
              <li className="footer-link" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Toll Free: 1800-425-4747
              </li>
              <li className="footer-link" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Email: concierge@maharashtratourism.gov.in
              </li>
              <li className="footer-link" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Headquarters: Nariman Point, Mumbai, MH, India
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright">
            &copy; 2026 Maharashtra Tourism Corporation. Powered by Google Gemini Advanced Agentic Coding. All Rights Reserved.
          </span>
          <ul className="legal-links">
            <li className="legal-link"><a href="#/">Privacy Policy</a></li>
            <li className="legal-link"><a href="#/">Terms of Service</a></li>
            <li className="legal-link"><a href="#/">Sitemap</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
