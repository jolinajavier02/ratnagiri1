import { useState, useEffect, useRef } from 'react';
import {
  MapPin, Star,
  ArrowRight,
  Heart, Car, Home,
  Utensils, Sparkles,
  Search, Globe, Check
} from 'lucide-react';
import brandLogo from './assets/logo.png';
import destinationVideo from './assets/Destination.mp4';
import tourVideo from './assets/Tour.mp4';
import bookingVideo from './assets/Booking.mp4';
import foodVideo from './assets/Food.mp4';
import traditionsVideo from './assets/Traditions.mp4';
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

const sectionVideos = {
  welcome: destinationVideo,
  destinations: destinationVideo,
  tours: tourVideo,
  booking: bookingVideo,
  foods: foodVideo,
  traditions: traditionsVideo
};

function VideoPageHeader({ videoSrc }) {
  return (
    <section className="destination-video-landing">
      <video
        className="destination-landing-video"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </section>
  );
}

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
    videoUrl: sectionVideos.welcome,
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
    videoUrl: sectionVideos.destinations,
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
    videoUrl: sectionVideos.tours,
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
    videoUrl: sectionVideos.booking,
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
    videoUrl: sectionVideos.foods,
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
    videoUrl: sectionVideos.traditions,
    thumbnail: sectionImages.traditions,
    link: '#/tradition'
  }
];

const HERO_PREVIEW_INTERVAL_MS = 7000;

const indiaRegionLabels = [
  { label: 'North India', x: 198, y: 122 },
  { label: 'West India', x: 128, y: 255 },
  { label: 'Central India', x: 238, y: 260 },
  { label: 'East India', x: 338, y: 258 },
  { label: 'South India', x: 246, y: 448 },
  { label: 'Northeast India', x: 410, y: 178 }
];

const ratnagiriRegionFeature = {
  id: 'ratnagiri',
  name: 'Ratnagiri',
  region: 'Maharashtra, West India',
  title: 'Ratnagiri, Maharashtra',
  subtitle: 'Konkan coast, Alphonso mangoes and sea forts',
  description: 'Ratnagiri is the active destination on this India regions map. Hover the coastal marker to highlight its Konkan shoreline, quiet beaches, hill roads, temples, mango orchards and historic sea-facing forts.',
  image: sectionImages.destinations,
  places: [
    'Ganpatipule Beach and Temple',
    'Ratnadurg Fort',
    'Thibaw Palace',
    'Pawas coastal villages'
  ]
};

const maharashtraIntroParagraphs = [
  'Government of Maharashtra, is dedicated to promoting and developing tourism in the state by showcasing Maharashtra\'s diverse attractions both within India and internationally. Our core objectives include enhancing tourism infrastructure, formulating strategic plans, and implementing sustainable tourism initiatives. We aim to provide comprehensive tourist services, including travel guides and information centers, to ensure a seamless and enjoyable experience for visitors.',
  'By organizing and promoting cultural, historical, and recreational events and festivals, such as the Ganesh Festival and the Hindavi Swarajya Mahotsav, we strive to highlight the unique heritage and vibrant culture of Maharashtra. Maharashtra boasts UNESCO World Heritage Sites like the Ajanta and Ellora Caves, picturesque hill stations such as Mahabaleshwar and Lonavala, and bustling urban centers like Mumbai and Pune.'
];

const rtsServices = [
  'Issuance of Eligibility Certificate to Tourist Entities under the Tourism Policy-2024',
  'Registration under the Women-Centered Tourism Policy. (Mahila kendrit tourism policy)',
  'Issuance of No Objection Certificate for Stamp Duty concession to Tourist Entities under the Tourism Policy-2024',
  'Registration of Tourism Villa under the Tourism Policy-2024',
  'Granting Industrial Status to the Hospitality Sector under the Tourism Policy-2024',
  'Registration of Tourism Apartments under the Tourism Policy-2024.',
  'Registration under the Agricultural Tourism Policy as per the Tourism Policy-2024',
  'Registration of Homestays under the Tourism Policy-2024.',
  'Registration under the Adventure Tourism Policy as per the Tourism Policy-2024',
  'Registration of Vacation Homes under the Tourism Policy-2024.',
  'Registration under the Caravan Tourism Policy as per the Tourism Policy-2024',
  'Registration and Renewal under the Bed & Breakfast Scheme.'
];

const exploreDistricts = [
  { name: 'Ratnagiri', region: 'Konkan Coast', desc: 'Alphonso mango orchards, Ganpatipule, sea forts and quiet coastal villages.', img: sectionImages.destinations },
  { name: 'Mumbai', region: 'Metro Heritage', desc: 'Gateway of India, Marine Drive, museums, markets and cinematic city energy.', img: sectionImages.booking },
  { name: 'Pune', region: 'Culture & Hills', desc: 'Historic wadas, forts, learning hubs and easy escapes toward the Sahyadris.', img: sectionImages.tours },
  { name: 'Aurangabad', region: 'World Heritage', desc: 'Ajanta, Ellora, Bibi ka Maqbara and layered Deccan history.', img: sectionImages.traditions },
  { name: 'Nashik', region: 'Pilgrimage & Wine', desc: 'Godavari ghats, Trimbakeshwar, vineyards and monsoon landscapes.', img: sectionImages.foods },
  { name: 'Sindhudurg', region: 'Beaches & Forts', desc: 'Clear waters, Malvan food, scuba experiences and coastal fort trails.', img: sectionImages.welcome }
];

const popularMaharashtraDestinations = [
  { id: 'ajanta', title: 'Ajanta & Ellora Caves', location: 'Chh. Sambhaji Nagar', category: 'UNESCO Heritage', rating: 4.9, img: sectionImages.traditions, desc: 'Rock-cut caves, ancient murals and sacred architecture carved into the Deccan cliffs.' },
  { id: 'mahabaleshwar', title: 'Mahabaleshwar', location: 'Satara', category: 'Hill Station', rating: 4.8, img: sectionImages.welcome, desc: 'Misty viewpoints, strawberry farms, forest drives and cool Sahyadri weather.' },
  { id: 'ratnagiri-popular', title: 'Ratnagiri Coast', location: 'Konkan', category: 'Coastal Escape', rating: 4.9, img: sectionImages.destinations, desc: 'Beaches, sea forts, mango orchards and temple towns along Maharashtra\'s coast.' }
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

const bookingSearchOptions = {
  homes: {
    whereLabel: 'Where',
    wherePlaceholder: 'Search places',
    dateLabel: 'When',
    datePlaceholder: 'Add dates',
    guestLabel: 'Who',
    guestPlaceholder: 'Add guests',
    panelTitle: 'Search hotels, resorts, and accommodations',
    suggestions: ['Mumbai', 'Goa', 'Rajasthan', 'Udaipur', 'Jaipur', 'Ratnagiri'],
    quickDates: ['June 12-14', 'This weekend', 'Next week', 'Flexible dates'],
    guestUnits: ['1 guest', '2 guests', '4 guests', 'Family stay']
  },
  experiences: {
    whereLabel: 'Tour',
    wherePlaceholder: 'Search tour packages',
    dateLabel: 'When',
    datePlaceholder: 'Add tour dates',
    guestLabel: 'Who',
    guestPlaceholder: 'Add travelers',
    panelTitle: 'Search guided tours and experiences',
    suggestions: ['Mumbai city heritage walk', 'Goa sunset cruise', 'Jaipur forts', 'Kerala houseboat', 'Ratnagiri coastal food trail'],
    quickDates: ['Today', 'Tomorrow', 'This weekend', 'Next month'],
    guestUnits: ['1 traveler', '2 travelers', 'Small group', 'Private tour']
  },
  services: {
    whereLabel: 'Transport',
    wherePlaceholder: 'Search flights, taxi, or car',
    dateLabel: 'When',
    datePlaceholder: 'Add pickup date',
    guestLabel: 'Who',
    guestPlaceholder: 'Add passengers',
    panelTitle: 'Search flights, taxis, and car booking',
    suggestions: ['Flights', 'Taxi', 'Car', 'Mumbai airport taxi', 'Goa private driver', 'Kerala coastal taxi'],
    quickDates: ['Today', 'Tomorrow', 'This weekend', 'Flexible pickup'],
    guestUnits: ['1 passenger', '2 passengers', '4 passengers', 'Group transfer']
  }
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

  const [activeIndiaPlace, setActiveIndiaPlace] = useState(ratnagiriRegionFeature.id);

  // Booking page state
  const [bookingTab, setBookingTab] = useState('homes');
  const [bookingSearchFocus, setBookingSearchFocus] = useState(null);
  const [bookingSearch, setBookingSearch] = useState({
    homes: { where: '', when: '', who: '' },
    experiences: { where: '', when: '', who: '' },
    services: { where: '', when: '', who: '' }
  });

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

  const activeRegionFeature = activeIndiaPlace === ratnagiriRegionFeature.id
    ? ratnagiriRegionFeature
    : ratnagiriRegionFeature;
  const currentBookingSearch = bookingSearch[bookingTab];
  const bookingSearchConfig = bookingSearchOptions[bookingTab];
  const searchTerm = currentBookingSearch.where.trim().toLowerCase();
  const activeBookingRows = bookingRows[bookingTab]
    .map((row) => ({
      ...row,
      items: searchTerm
        ? row.items.filter((item) =>
          `${row.title} ${item.title} ${item.meta}`.toLowerCase().includes(searchTerm)
        )
        : row.items
    }))
    .filter((row) => row.items.length > 0);

  const updateBookingSearch = (field, value) => {
    setBookingSearch((current) => ({
      ...current,
      [bookingTab]: {
        ...current[bookingTab],
        [field]: value
      }
    }));
  };

  const selectBookingSearchValue = (field, value) => {
    updateBookingSearch(field, value);
    setBookingSearchFocus(null);
  };

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
                <video
                  key={slide.id}
                  src={slide.videoUrl}
                  className={`hero-video ${idx === activeSlide ? 'active' : ''}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${slide.title} tourism preview video`}
                />
              ))}
            </div>

            <div className="hero-overlay" />

            <div className="hero-carousel-panel">
              <div className="hero-browse-cue" aria-hidden="true">
                <span>Browse Categories</span>
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
                      <video
                        src={card.videoUrl}
                        className="carousel-card-img"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`${card.category} preview video`}
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

          {/* 1. Maharashtra Tourism + RTS Services */}
          <section className="section-wrapper maharashtra-overview-section">
            <div className="maharashtra-overview-grid">
              <div className="maharashtra-copy-panel">
                <h2 className="maharashtra-heading">
                  <span>Maharashtra</span> Tourism
                </h2>
                <div className="maharashtra-title-underline" />
                {maharashtraIntroParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <button className="maharashtra-read-btn" type="button">Read Less</button>
              </div>

              <div className="rts-services-panel">
                <h2 className="rts-heading">Services Under RTS</h2>
                <div className="rts-heading-line" />
                <div className="rts-services-grid">
                  {rtsServices.map((service, index) => (
                    <article className={`rts-service-card tone-${index % 5}`} key={service}>
                      <Check size={18} />
                      <h3>{service}</h3>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 2. Explore Districts */}
          <section className="section-wrapper alternate">
            <span className="section-tag">Maharashtra Districts</span>
            <h2 className="section-title">Explore Districts</h2>
            <p className="section-subtitle">
              Move through coastal towns, heritage cities, hill stations, pilgrimage routes, food trails and adventure pockets across Maharashtra.
            </p>

            <div className="district-grid">
              {exploreDistricts.map((district) => (
                <article className="district-card" key={district.name} onClick={() => window.location.hash = '#/destinations'}>
                  <img src={district.img} alt={`${district.name} district`} />
                  <div>
                    <span>{district.region}</span>
                    <h3>{district.name}</h3>
                    <p>{district.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 3. Most Popular Destinations */}
          <section className="section-wrapper">
            <span className="section-tag">Handpicked for You</span>
            <h2 className="section-title">Most Popular Destinations</h2>
            <p className="section-subtitle">
              Discover Maharashtra's most loved heritage, hill station and coastal experiences.
            </p>

            <div className="destinations-showcase">
              {popularMaharashtraDestinations.map((dest) => (
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
                      <span>{dest.location}, Maharashtra</span>
                    </div>
                    <h3 className="destination-card-title">{dest.title}</h3>
                    <p className="experience-card-desc">{dest.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Upcoming Guided Tours */}
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

          {/* 5. Flavor in India */}
          <section className="section-wrapper flavor-home-section">
            <span className="section-tag">Flavor in India</span>
            <h2 className="section-title">Regional Flavors</h2>
            <p className="section-subtitle">
              Explore Maharashtra food trails alongside broader Indian culinary favorites.
            </p>

            <div className="home-feature-grid">
              {mockFoods.slice(0, 3).map((food) => (
                <article className="home-feature-card" key={food.id}>
                  <img src={food.img} alt={food.name} />
                  <div>
                    <span>{food.region}</span>
                    <h3>{food.name}</h3>
                    <p>{food.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 6. Traditions */}
          <section className="section-wrapper alternate traditions-home-section">
            <span className="section-tag">Living Heritage</span>
            <h2 className="section-title">Traditions</h2>
            <p className="section-subtitle">
              Festivals, rituals, music and historic celebrations keep Maharashtra's culture vivid across the year.
            </p>

            <div className="home-feature-grid">
              {mockTraditions.slice(0, 3).map((tradition) => (
                <article className="home-feature-card compact" key={tradition.id}>
                  <div>
                    <span>{tradition.date} | {tradition.place}</span>
                    <h3>{tradition.title}</h3>
                    <p>{tradition.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 7. Plan Your Trip */}
          <section className="section-wrapper">
            <div className="cta-banner">
              <div className="cta-banner-content">
                <span className="section-tag">Plan Your Trip</span>
                <h2 className="cta-title">Start Planning Your Maharashtra Journey</h2>
                <p className="cta-desc">
                  Browse stays, experiences, flights, taxis and guided routes for a seamless visit across Maharashtra.
                </p>
                <form className="cta-form" onSubmit={(e) => { e.preventDefault(); window.location.hash = '#/booking'; }}>
                  <input type="email" placeholder="Enter your email address" className="cta-input" required />
                  <button type="submit" className="cta-submit-btn">Plan My Trip</button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}

      {/* DESTINATIONS CATEGORY PAGE */}
      {currentRoute === '#/destinations' && (
        <>
          <VideoPageHeader
            videoSrc={sectionVideos.destinations}
          />

          <section className="india-regions-section">
            <div className="india-regions-heading">
              <span className="section-tag">Regions of India</span>
              <h2 className="section-title">Explore India By Region</h2>
            </div>

            <div className="india-regions-layout">
              <div className="india-map-panel" aria-label="Map of India regions">
                <svg className="india-map-svg" viewBox="0 0 520 560" role="img" aria-labelledby="india-map-title">
                  <title id="india-map-title">Regions of India map with Ratnagiri highlighted</title>
                  <path
                    className="india-map-land"
                    d="M218 38 276 48 306 82 338 99 354 136 393 151 418 196 398 235 413 286 379 309 354 350 333 393 307 420 294 474 257 531 224 466 194 421 158 392 144 337 112 304 124 252 103 215 126 170 157 139 174 92Z"
                  />
                  <path className="india-map-region north" d="M177 83 221 44 279 55 319 95 351 142 302 161 235 154 174 132Z" />
                  <path className="india-map-region west" d="M126 171 174 133 236 155 224 250 169 306 116 296 103 216Z" />
                  <path className="india-map-region central" d="M235 156 304 162 361 209 338 304 255 318 225 249Z" />
                  <path className="india-map-region east" d="M362 211 414 198 399 236 413 286 380 308 337 305Z" />
                  <path className="india-map-region south" d="M169 309 255 319 337 306 353 350 307 421 293 475 257 531 223 466 194 421 158 393 145 338Z" />
                  <path className="india-map-region northeast" d="M354 137 413 155 459 148 494 174 468 206 421 197 393 151Z" />

                  {indiaRegionLabels.map((region) => (
                    <text key={region.label} className="india-region-label" x={region.x} y={region.y}>
                      {region.label}
                    </text>
                  ))}

                  <g className="india-map-place static">
                    <circle cx="203" cy="120" r="5" />
                    <text x="92" y="113">Delhi</text>
                    <path d="M105 116H196" />
                  </g>
                  <g className="india-map-place static">
                    <circle cx="370" cy="270" r="5" />
                    <text x="386" y="273">Kolkata</text>
                    <path d="M376 270h54" />
                  </g>
                  <g className="india-map-place static">
                    <circle cx="257" cy="438" r="5" />
                    <text x="278" y="442">Bengaluru</text>
                    <path d="M263 438h64" />
                  </g>
                  <g className="india-map-place static">
                    <circle cx="147" cy="246" r="5" />
                    <text x="46" y="250">Mumbai</text>
                    <path d="M86 247h55" />
                  </g>

                  <g
                    className="india-map-ratnagiri"
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setActiveIndiaPlace(ratnagiriRegionFeature.id)}
                    onFocus={() => setActiveIndiaPlace(ratnagiriRegionFeature.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveIndiaPlace(ratnagiriRegionFeature.id);
                      }
                    }}
                    aria-label="Ratnagiri, Maharashtra"
                  >
                    <circle cx="159" cy="292" r="18" />
                    <circle cx="159" cy="292" r="7" />
                  </g>
                  <g className="india-map-place ratnagiri-label">
                    <text x="28" y="318">Ratnagiri</text>
                    <path d="M111 314 151 297" />
                  </g>
                </svg>
              </div>

              <aside className="india-place-panel">
                <img src={activeRegionFeature.image} alt={activeRegionFeature.title} className="india-place-image" />
                <div className="india-place-content">
                  <span>Explore</span>
                  <h3>{activeRegionFeature.name}</h3>
                  <p className="india-place-region">{activeRegionFeature.region}</p>
                  <p>{activeRegionFeature.description}</p>
                  <ul>
                    {activeRegionFeature.places.map((place) => (
                      <li key={place}>{place}</li>
                    ))}
                  </ul>
                  <button className="book-btn" type="button" onClick={() => window.location.hash = '#/booking'}>
                    Plan Ratnagiri Trip
                  </button>
                </div>
              </aside>
            </div>
          </section>
        </>
      )}

      {/* TOURS CATEGORY PAGE */}
      {currentRoute === '#/tours' && (
        <>
          <VideoPageHeader
            videoSrc={sectionVideos.tours}
          />

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
          <VideoPageHeader
            videoSrc={sectionVideos.booking}
          />

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
                      onClick={() => {
                        setBookingTab(tab.id);
                        setBookingSearchFocus(null);
                      }}
                    >
                      {tab.badge && <span className="booking-tab-badge">{tab.badge}</span>}
                      <TabIcon size={34} strokeWidth={1.7} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className={`booking-search-pill ${bookingSearchFocus ? 'expanded' : ''}`} role="search">
                <div className={`booking-search-field ${bookingSearchFocus === 'where' ? 'active' : ''}`}>
                  <button type="button" onClick={() => setBookingSearchFocus('where')}>
                    <strong>{bookingSearchConfig.whereLabel}</strong>
                    <input
                      type="text"
                      value={currentBookingSearch.where}
                      placeholder={bookingSearchConfig.wherePlaceholder}
                      onChange={(event) => updateBookingSearch('where', event.target.value)}
                      onFocus={() => setBookingSearchFocus('where')}
                    />
                  </button>
                </div>
                <div className={`booking-search-field ${bookingSearchFocus === 'when' ? 'active' : ''}`}>
                  <button type="button" onClick={() => setBookingSearchFocus('when')}>
                    <strong>{bookingSearchConfig.dateLabel}</strong>
                    <span>{currentBookingSearch.when || bookingSearchConfig.datePlaceholder}</span>
                  </button>
                </div>
                <div className={`booking-search-field ${bookingSearchFocus === 'who' ? 'active' : ''}`}>
                  <button type="button" onClick={() => setBookingSearchFocus('who')}>
                    <strong>{bookingSearchConfig.guestLabel}</strong>
                    <span>{currentBookingSearch.who || bookingSearchConfig.guestPlaceholder}</span>
                  </button>
                </div>
                <button className="booking-search-btn" type="button" onClick={() => setBookingSearchFocus(null)}>
                  <Search size={24} />
                  <span>Search</span>
                </button>
              </div>

              {bookingSearchFocus && (
                <div className="booking-search-panel">
                  {bookingSearchFocus === 'where' && (
                    <>
                      <h3>{bookingSearchConfig.panelTitle}</h3>
                      <div className="booking-suggestion-grid">
                        {bookingSearchConfig.suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            onClick={() => selectBookingSearchValue('where', suggestion)}
                          >
                            <Search size={17} />
                            <span>{suggestion}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {bookingSearchFocus === 'when' && (
                    <>
                      <div className="booking-date-toggle">
                        <button type="button" className="active">Dates</button>
                        <button type="button">Flexible</button>
                      </div>
                      <div className="booking-calendar-preview">
                        {['June 2026', 'July 2026'].map((month, monthIndex) => (
                          <div className="booking-calendar-month" key={month}>
                            <h3>{month}</h3>
                            <div className="booking-calendar-weekdays">
                              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                <span key={`${month}-${day}-${index}`}>{day}</span>
                              ))}
                            </div>
                            <div className="booking-calendar-days">
                              {Array.from({ length: 35 }, (_, index) => {
                                const offset = monthIndex === 0 ? 1 : 3;
                                const day = index - offset + 1;
                                const maxDay = monthIndex === 0 ? 30 : 31;
                                return (
                                  <button
                                    key={`${month}-${index}`}
                                    type="button"
                                    disabled={day < 1 || day > maxDay}
                                    onClick={() => selectBookingSearchValue('when', `${month.split(' ')[0]} ${day}`)}
                                  >
                                    {day > 0 && day <= maxDay ? day : ''}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="booking-chip-row">
                        {bookingSearchConfig.quickDates.map((date) => (
                          <button key={date} type="button" onClick={() => selectBookingSearchValue('when', date)}>
                            {date}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {bookingSearchFocus === 'who' && (
                    <>
                      <h3>{bookingTab === 'services' ? 'Choose passengers for your transport' : 'Choose guests for your booking'}</h3>
                      <div className="booking-chip-row large">
                        {bookingSearchConfig.guestUnits.map((unit) => (
                          <button key={unit} type="button" onClick={() => selectBookingSearchValue('who', unit)}>
                            {unit}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="booking-marketplace-content">
              {activeBookingRows.length === 0 && (
                <div className="booking-empty-state">
                  <h2>No matches yet</h2>
                  <p>Try another place, tour package, or transport search.</p>
                </div>
              )}

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
          <VideoPageHeader
            videoSrc={sectionVideos.foods}
          />

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
          <VideoPageHeader
            videoSrc={sectionVideos.traditions}
          />

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
