// ---------------------------------------------------------------------------
// Dream Interiors — content data
// Everything the site renders lives here, so copy, pricing and images can be
// updated without touching component code. Images use Lorem Picsum seeded
// placeholders — swap `image` / `src` fields for real photography before
// shipping to production.
// ---------------------------------------------------------------------------

export const brand = {
  name: 'Interior ',
  accent: 'Adda',
  tagline: 'Interior design studio',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journal', href: '#journal' },
];

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const hero = {
  kicker: 'Interior design studio, est. 2013',
  headlineTop: 'Rooms that feel',
  headlineBottom: 'like you, at last',
  paragraph:
    "We design homes around how you actually live — considered layouts, honest materials and light that changes the way a room feels through the day.",
  primaryCta: { label: 'Start your project', href: '#contact' },
  secondaryCta: { label: 'See our work', href: '#projects' },
  stat: { value: '130+', label: 'Homes designed since 2013' },
};

export const heroImages = [
  { id: 1, img : '/img/img1.jpg', src: 'https://picsum.photos/seed/di-hero-a/900/1100', alt: 'Sunlit living room with linen sofa and wood shelving' },
  { id: 2, img:'/img/img2.jpg' , src: 'https://picsum.photos/seed/di-hero-b/700/900', alt: 'Minimal bedroom with warm timber headboard' },
];

export const heroFilmstrip = [
  { id: 1, img : "/img/img3.jpg" , src: 'https://picsum.photos/seed/di-strip-1/500/620', alt: 'Kitchen with open wood shelving' },
  { id: 2,img : "/img/img4.jpg" ,  src: 'https://picsum.photos/seed/di-strip-2/500/620', alt: 'Reading corner with rattan chair' },
  { id: 3,img : "/img/img5.jpg" , src: 'https://picsum.photos/seed/di-strip-3/500/620', alt: 'Bedroom styled with warm textiles' },
  { id: 4,img : "/img/img6.jpg" , src: 'https://picsum.photos/seed/di-strip-4/500/620', alt: 'Living room with curved sofa' },
  { id: 5,img : "/img/img7.jpg" , src: 'https://picsum.photos/seed/di-strip-5/500/620', alt: 'Entryway with arched mirror' },
  { id: 6,img : "/img/img8.jpg" , src: 'https://picsum.photos/seed/di-strip-6/500/620', alt: 'Dining nook with pendant lighting' },
];

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  kicker: 'About the studio',
  headlineTop: 'Considered spaces,',
  headlineBottom: 'never over-designed',
  paragraph:
    "Dream Interiors began as a two-person studio working out of a converted garage in Jaipur. Twelve years on, we still start every project the same way: sitting in the space, talking about how you'll actually use it, and designing outward from there.",
  linkLabel: 'More about the studio',
  linkHref: '#services',
  images: [
    { id: 1,img : "/img/img9.jpg" , src: 'https://picsum.photos/seed/di-about-1/700/860', alt: 'Studio founder reviewing material samples' },
    { id: 2,img : "/img/img10.jpg" , src: 'https://picsum.photos/seed/di-about-2/620/500', alt: 'Warm-toned living room with arched doorway' },
  ],
  stats: [
    { id: 1, value: '12', suffix: '+', label: 'Years in practice' },
    { id: 2, value: '130', suffix: '+', label: 'Homes completed' },
    { id: 3, value: '9', suffix: '', label: 'Cities worked in' },
  ],
};

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export const servicesSection = {
  kicker: 'What we do',
  headlineTop: 'Three ways we',
  headlineBottom: 'shape a home',
  cta: { label: 'View all services', href: '#contact' },
};

export const services = [
  {
    id: 1,
    icon: 'LayoutGrid',
    title: 'Space planning',
    description:
      'We rework layouts around daily movement and light before a single finish is chosen, so the bones of the home work first.',
    href: '#contact',
  },
  {
    id: 2,
    icon: 'Lightbulb',
    title: 'Lighting design',
    description:
      'Layered lighting plans — ambient, task and accent — tuned room by room so evenings feel as good as afternoons.',
    href: '#contact',
  },
  {
    id: 3,
    icon: 'Sofa',
    title: 'Furniture & styling',
    description:
      'Sourced and custom pieces selected for scale, material and how they will actually age in your home.',
    href: '#contact',
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projectsSection = {
  kicker: 'Selected work',
  headlineTop: 'Recent homes,',
  headlineBottom: 'briefly told',
};

export const projects = [
  {
    id: 1,
    name: 'Haveli Modern',
    category: 'Residential · Full home',
    location: 'Jaipur, India',
    price: '₹18,50,000',
    image: '/img/img11.jpg',
    likes: 342,
    views: 4820,
    size: 'lg',
  },
  {
    id: 2,
    name: 'Cedar & Clay',
    category: 'Residential · Living & dining',
    location: 'Udaipur, India',
    price: '₹9,40,000',
    image: '/img/img12.jpg',
    likes: 198,
    views: 2610,
    size: 'md',
  },
  {
    id: 3,
    name: 'Amber Courtyard',
    category: 'Residential · Full home',
    location: 'Jaipur, India',
    price: '₹21,20,000',
    image: '/img/img13.jpg',
    likes: 276,
    views: 3190,
    size: 'md',
  },
  {
    id: 4,
    name: 'Coastal Light',
    category: 'Residential · Bedroom suite',
    location: 'Goa, India',
    price: '₹7,80,000',
    image: '/img/img14.jpg',
    likes: 415,
    views: 5230,
    size: 'lg',
  },
  {
    id: 5,
    name: 'The Reading Room',
    category: 'Residential · Study',
    location: 'Mumbai, India',
    price: '₹4,60,000',
    image: '/img/img15.jpg',
    likes: 152,
    views: 1980,
    size: 'md',
  },
];

// ---------------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------------

export const processSection = {
  kicker: 'How we work',
  headlineTop: 'A process built',
  headlineBottom: 'around fewer surprises',
};

export const process = [
  {
    id: 1,
    step: '01',
    icon: 'Compass',
    title: 'Consultation & vision',
    description:
      'We walk the space with you, talk through how each room gets used, and set a direction before anything is drawn.',
  },
  {
    id: 2,
    step: '02',
    icon: 'PenTool',
    title: 'Design & development',
    description:
      'Layouts, materials and lighting are developed together and reviewed with you at each stage, not unveiled at the end.',
  },
  {
    id: 3,
    step: '03',
    icon: 'PackageCheck',
    title: 'Execution & delivery',
    description:
      'Our site team manages contractors and installs, so what gets built matches what you approved, down to the details.',
  },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export const testimonialStats = [
  { id: 1, value: '4.9/5', label: 'Average client rating' },
  { id: 2, value: '130+', label: 'Homes designed' },
  { id: 3, value: '97%', label: 'Clients who refer us' },
];

export const featuredTestimonial = {
  image: '/img/img17.jpg',
  quote:
    'From the first walkthrough to the last cushion, everything had a reason. Our home finally feels like it was designed for how we live, not for a photograph.',
  name: 'Ritika Sharma',
  role: 'Homeowner, Jaipur',
  avatar: 'https://picsum.photos/seed/di-avatar-ritika/120/120',
};

export const testimonials = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Homeowner, Mumbai',
    avatar: 'https://picsum.photos/seed/di-avatar-arjun/120/120',
    quote:
      'They pushed back on our first-instinct choices, kindly, and the house is better for it. Worth every conversation.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Neha Kapoor',
    role: 'Apartment owner, Goa',
    avatar: 'https://picsum.photos/seed/di-avatar-neha/120/120',
    quote:
      'The lighting plan alone changed how we use our evenings. Small decisions, but they add up to a completely different home.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Devansh Rao',
    role: 'Design client, Udaipur',
    avatar: 'https://picsum.photos/seed/di-avatar-devansh/120/120',
    quote:
      'Clear timelines, honest budgets, and a team that answered the phone. Rare in this industry, genuinely appreciated.',
    rating: 5,
  },
];

// ---------------------------------------------------------------------------
// Journal / Blog
// ---------------------------------------------------------------------------

export const journalSection = {
  kicker: 'The journal',
  headlineTop: 'Notes on building',
  headlineBottom: 'a considered home',
  cta: { label: 'View all posts', href: '#' },
};

export const blogPosts = [
  {
    id: 1,
    day: '20',
    month: 'Jul',
    title: 'Why we design the layout before we pick a single finish',
    excerpt:
      'Paint and furniture are reversible. A bad layout is not. Here is how we sequence a project so the expensive decisions come last.',
    image: '/img/img18.jpg',
    readTime: '4 min read',
    href: '#',
  },
  {
    id: 2,
    day: '24',
    month: 'Aug',
    title: 'The lighting layers every room actually needs',
    excerpt:
      'Ambient, task and accent light do different jobs. Missing one is why a beautifully furnished room can still feel flat at night.',
    image: '/img/img19.jpg',
    readTime: '5 min read',
    href: '#',
  },
  {
    id: 3,
    day: '02',
    month: 'Sep',
    title: 'Materials that earn their place in a busy home',
    excerpt:
      'What actually holds up to daily life with kids, pets and guests — and where it is worth spending more to get it right.',
    image: '/img/img20.jpg',
    readTime: '3 min read',
    href: '#',
  },
];

// ---------------------------------------------------------------------------
// Footer / Contact
// ---------------------------------------------------------------------------

export const footerData = {
  headlineTop: 'Let’s design a home',
  headlineBottom: 'that feels like yours',
  cta: { label: 'Start a conversation', href: '#contact' },
  socialProofLabel: '220+ happy homeowners',
  socialProofAvatars: [
    'https://picsum.photos/seed/di-face-1/80/80',
    'https://picsum.photos/seed/di-face-2/80/80',
    'https://picsum.photos/seed/di-face-3/80/80',
    'https://picsum.photos/seed/di-face-4/80/80',
  ],
  contact: {
    address: '4/17 Willowbrook Street, C-Scheme, Jaipur 302001',
    email: 'hello@dreaminteriors.studio',
    phone: '+91 141 234 5678',
  },
  servicesLinks: ['Space planning', 'Lighting design', 'Furniture & styling', 'Full-home design'],
  companyLinks: ['About us', 'Our projects', 'Our process', 'Journal', 'Contact'],
};

export const socialLinks = [
  { id: 1, platform: 'Instagram', icon: 'Instagram', href: '#' },
  { id: 2, platform: 'Facebook', icon: 'Facebook', href: '#' },
  { id: 3, platform: 'Twitter', icon: 'Twitter', href: '#' },
  { id: 4, platform: 'LinkedIn', icon: 'Linkedin', href: '#' },
];
