export const projectsData = [
  {
    id: "4a8b9c7d1e2f3a4b",
    name: "Pixley AI - Personalized Kids Cartoons",
    description:
      "A generative AI platform that transforms kids' drawings, photos, or story ideas into fully animated personalized cartoon episodes. Backend AI logic is powered by OpenAI/Generative AI models, while the Full-Stack is built with Next.js and React. Integrations allow real-time story generation, animation rendering, and parent-guided customization.",
    tools: [
      "Next.js",
      "React",
      "OpenAI API",
      "Node.js",
      "Python",
      "FFmpeg",
      "Tailwind CSS",
      "n8n"
    ],
    role: "Full-stack Developer",
    code: "",
    demo: "https://pixleyai.com/",
    date: "2025",
    images: ["/projects/PixleyAI/pixleyai.png"],
    videos: [""],
    highlights: [
      "Built AI models to convert children's drawings and story prompts into animated episodes.",
      "Developed an intuitive, kid-friendly UI for parents to guide story creation.",
      "Integrated workflow automation for real-time episode generation."
    ],
    challenge: [
      "Generating animations that matched children's inputs accurately.",
      "Handling large AI model processing while keeping the UI responsive.",
      "Ensuring safe and child-appropriate content."
    ],
    solution: [
      "Created a prompt validation system to ensure animations match the story idea.",
      "Implemented async processing pipelines and queues to generate animations efficiently.",
      "Added content moderation filters and safety checks for child-friendly output."
    ],
  },
  {
  id: "7c3f1a2b4e5d6f8a",
  name: "EmpowerFit Online Fitness Platform",
  description:
    "A web platform for personalized fitness coaching, allowing clients to access live training sessions, track progress, and receive nutrition guidance. Built to improve client engagement and simplify trainer-client interactions with a responsive and user-friendly interface.",
  tools: [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Stripe API",
    "WebRTC"
  ],
  role: "Full-stack Developer",
  code: "",
  demo: "https://www.empowerfitllc.com/",
  date: "2023",
  images: ["/projects/EmpowerFit/empowerfitllc.png"],
  videos: [""],
  highlights: [
    "Built a responsive web platform for live online fitness sessions and client management.",
    "Integrated progress tracking dashboards for clients and trainers.",
    "Implemented secure payment processing for subscription-based fitness programs."
  ],
  challenge: [
    "Handling real-time video streaming for live online training sessions.",
    "Ensuring secure user authentication and client data privacy.",
    "Scaling the platform to handle multiple simultaneous live sessions."
  ],
  solution: [
    "Used WebRTC and Socket.io for low-latency live video training sessions.",
    "Implemented JWT-based authentication and encrypted client data storage.",
    "Optimized backend APIs and database queries for concurrent session handling."
  ]
}
,
{
  id: "cb9f2d7a1e4b6f8c",
  name: "ChooseTheBest AI Tool Directory",
  "description": "A web platform that curates and ranks AI tools across categories, helping users discover the most effective AI solutions for productivity, marketing, automation, and more. Designed to simplify AI tool exploration with a clean and user-friendly interface.",
  "tools": [
    "Python",
    "Django",
    "PostgreSQL",
    "Leaflet.js",
    "Bootstrap",
    "REST APIs",
    "Algolia Search API",
  ],
  "role": "Full-stack Developer",
  "code": "",
  "demo": "https://choosethebest.ai/",
  "date": "2025",
  "images": [
    "/projects/ChooseTheBest/choosethebest-homepage.png"
  ],
  "videos": [""],
  "highlights": [
    "Built a responsive web directory for AI tool discovery and comparison.",
    "Integrated searchable categories and ranking filters for better user experience.",
    "Enabled easy access to AI tools with links and curated recommendations."
  ],
  "challenge": [
    "Handling a large dataset of AI tools and keeping rankings updated.",
    "Implementing fast and accurate search across multiple categories.",
    "Ensuring the website is responsive and performs well on all devices."
  ],
  "solution": [
    "Used Algolia for fast and relevant search results across the platform.",
    "Structured data in MongoDB with automated scripts to update AI tool listings.",
    "Optimized frontend with React and Tailwind CSS for performance and mobile responsiveness."
  ]
},

{
  id: "h7t4u2s1k9f0g8d3",
  name: "FitGap AI Software Recommendation Platform",
  description: "A business software recommendation platform that helps companies discover the most compatible tools (CRM, ERP, HR, analytics, AI, and more) based on their needs. Users take a quick quiz to receive tailored insights into software solutions across categories, simplifying software selection and comparison.",
  tools: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "React",
    "Tailwind CSS",
    "OpenAI API "
  ],
  role: "Full-stack Developer",
  code: "",
  demo: "https://us.fitgap.com/",
  date: "2025",
  images: [
    "/projects/FitGap/fitgap-homepage.png"
  ],
  videos: [""],
  highlights: [
    "Built a Python-based backend to handle AI-driven software recommendation logic.",
    "Implemented quiz flow and dynamic results using FastAPI and PostgreSQL.",
    "Designed a responsive frontend with React and Tailwind CSS for user-friendly interaction."
  ],
  challenge: [
    "Mapping diverse business requirements to relevant software tools accurately.",
    "Maintaining performance and responsiveness with multiple concurrent users.",
    "Designing a backend logic that could scale as software categories expanded."
  ],
  solution: [
    "Used Python with FastAPI for API endpoints and recommendation processing.",
    "Implemented PostgreSQL with SQLAlchemy ORM for reliable, structured data storage.",
    "Integrated AI logic via OpenAI API to analyze user quiz answers and generate tailored recommendations.",
    "Optimized frontend with React and Tailwind CSS for smooth, responsive UI interactions."
  ]
}
,
{
  "id": "f4d7b9c2a6e8g1h3",
  "name": "Las Vegas Real Estate Portal",
  "description": "A local real estate website providing property listings, market updates, and resources for buyers, sellers, and investors in the Las Vegas, Nevada area. Designed to simplify property searches and provide insights on the local housing market.",
  "tools": [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Google Maps API",
    "MLS Integration",
  ],
  "role": "Full-stack Developer",
  "code": "",
  "demo": "https://www.lasvegasrealestate.org/",
  "date": "2023",
  "images": [
    "/projects/LasVegasRealEstate/lasvegasrealestate-homepage.png"
  ],
  "videos": [""],
  "highlights": [
    "Built a responsive web platform for browsing Las Vegas property listings.",
    "Integrated MLS data for real-time property updates and search.",
    "Implemented interactive maps and filtering tools for a better user experience."
  ],
  "challenge": [
    "Ensuring accurate and real-time integration with MLS property data.",
    "Handling a large volume of property listings efficiently.",
    "Making the platform mobile-friendly and responsive for all devices."
  ],
  "solution": [
    "Used Node.js and MongoDB to manage property data and optimize queries.",
    "Integrated Google Maps API for dynamic location-based searches.",
    "Optimized frontend with React and Tailwind CSS for fast, responsive UI."
  ]
}
,
{
  "id": "d2a8f6c9b1e3g4h5",
  "name": "EarKick AI Mental Health Chat",
  "description": "A web platform that provides AI-powered mental health support, offering users a conversational interface for stress management, mood tracking, and self-care guidance. Designed to make mental wellness accessible and easy through a responsive and interactive chat experience.",
  "tools": [
    "Python",
    "FastAPI",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "OpenAI API",
  ],
  "role": "Full-stack Developer",
  "code": "",
  "demo": "https://chat.earkick.com/",
  "date": "2026",
  "images": [
    "/projects/EarKick/earkick-chat-homepage.png"
  ],
  "videos": [""],
  "highlights": [
    "Built a responsive web chat platform for AI-driven mental health support.",
    "Implemented conversational AI for stress, anxiety, and mood tracking.",
    "Designed user-friendly interface for accessibility and ease of use."
  ],
  "challenge": [
    "Maintaining privacy and security of sensitive mental health conversations.",
    "Handling AI response generation with high relevance and empathy.",
    "Scaling the platform to handle multiple concurrent users effectively."
  ],
  "solution": [
    "Integrated OpenAI API for natural language conversational responses.",
    "Implemented secure user session management and encrypted storage.",
    "Optimized frontend performance with React and Tailwind CSS for responsive design."
  ]
}
  // … repeat similarly for other projects
];