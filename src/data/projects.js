export const projects = [
  {
    id: "tandoori-tales",
    title: "Tandoori Tales",
    subtitle: "Modern Restaurant Web Application",
    year: "2025",
    category: "Full Frontend SPA",
    featured: true,
    image: "/Tandoori Tales.png",
    demoUrl: "https://pratik-restaurants.vercel.app/",
    githubUrl: "https://github.com/JoshiPratik06/PratikRestaurants",
    description: "A high-performance restaurant web application featuring dynamic dietary filtering, live cart state management, and persistent order flows built with React and Tailwind CSS.",
    problem: "Restaurant ordering websites frequently suffer from slow category switching, cart loss on accidental browser refreshes, and clumsy mobile navigation.",
    solution: "Engineered a lightning-fast React application with LocalStorage persistence, instant client-side menu filtering, and reactive bill & tax calculations.",
    tags: ["React.js", "Tailwind CSS", "Vite", "JavaScript", "LocalStorage"],
    highlights: [
      { label: "Dynamic Category Filtering", desc: "Instant filtering for Veg, Non-Veg, and Starter dishes without layout shifts or reload latency." },
      { label: "Cart State Engine", desc: "Interactive quantity modification, item removal, and automatic real-time bill & tax computation." },
      { label: "Session Persistence", desc: "Synchronized with browser LocalStorage to preserve user shopping carts across refresh cycles." },
      { label: "Mobile-First UX", desc: "Fluid touch targets and ergonomic layout designed for smartphone diners and tablet POS." }
    ],
    metrics: [
      { label: "Load Time", value: "<0.8s" },
      { label: "Client State", value: "100% Persisted" },
      { label: "UI Polish", value: "Vite + Tailwind" }
    ]
  },
  {
    id: "joshiwada-palace",
    title: "JoshiWada Palace",
    subtitle: "Luxury Heritage Hotel & Dining",
    year: "2025",
    category: "Luxury Web Experience",
    featured: true,
    image: "/joshiwada-palace.png",
    demoUrl: "https://rajwada-palace.vercel.app/",
    githubUrl: "https://github.com/JoshiPratik06/rajwada-palace",
    description: "A luxury hospitality platform featuring interactive room booking flows, multilingual support (English, Hindi, Marathi), and cinematic Framer Motion micro-interactions.",
    problem: "Heritage and boutique hotel websites often feel static and fail to convey the physical ambiance and prestige of luxury hospitality.",
    solution: "Crafted a cinematic React 19 digital experience with physics-based scroll animations, trilingual localization, and a seamless client-side room booking engine.",
    tags: ["React 19", "Framer Motion", "Tailwind CSS", "Vite", "JavaScript"],
    highlights: [
      { label: "Multi-Room Booking Flow", desc: "Interactive room type selector, date range simulation, and live reservation summary drawer." },
      { label: "Trilingual Localization", desc: "Instant real-time switching between English, Hindi, and Marathi with localized content." },
      { label: "Cinematic Micro-Interactions", desc: "Orchestrated Framer Motion transitions, physics-based hover states, and smooth typography pacing." },
      { label: "Client-Side Architecture", desc: "100% client-side persistence for booking records, dining menus, and guest testimonials." }
    ],
    metrics: [
      { label: "Framework", value: "React 19" },
      { label: "Languages", value: "3 Supported" },
      { label: "Animation", value: "Framer Motion" }
    ]
  },
  {
    id: "2d-racing-game",
    title: "2D Browser Racing",
    subtitle: "Interactive Canvas Arcade Game",
    year: "2024",
    category: "Creative Development",
    featured: false,
    image: "/photo.png",
    demoUrl: "https://github.com/JoshiPratik06/2dmobiledestop",
    githubUrl: "https://github.com/JoshiPratik06/2dmobiledestop",
    description: "High-frame-rate 2D racing arcade game built with vanilla JavaScript and HTML5 Canvas, featuring responsive keyboard and mobile touch steering.",
    problem: "Achieving steady 60 FPS animation and collision physics across varied screen resolutions without external gaming frameworks.",
    solution: "Developed custom requestAnimationFrame game loop with vector-based collision detection and adaptable mobile touch button overlays.",
    tags: ["JavaScript (ES6+)", "HTML5 Canvas", "CSS3", "Game Physics"],
    highlights: [
      { label: "60 FPS Canvas Loop", desc: "Smooth rendering engine handling obstacles, speed scaling, and player tracking." },
      { label: "Dual Input Controls", desc: "Keyboard arrow control for desktop and responsive touch steer pads for smartphones." },
      { label: "Dynamic Score Tracker", desc: "Real-time distance calculation and difficulty escalation logic." }
    ],
    metrics: [
      { label: "Framerate", value: "60 FPS" },
      { label: "Dependencies", value: "Zero (Vanilla)" }
    ]
  }
];

