export const allServices = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    image: require("../assets/images/services/web-development.webp"),
    desc: "Our web development team crafts modern, responsive websites and full-stack solutions that elevate your online presence and engage your audience.",
    link: "/web-development",
  },
  {
    id: 2,
    title: "App Development",
    image: require("../assets/images/services/app-development.webp"),
    desc: "Our team designs and builds innovative mobile apps tailored to your audience, delivering functionality  and an exceptional user experience.",
    link: "/app-development",
  },
  {
    id: 3,
    title: "Blockchain Development",
    image: require("../assets/images/services/blockchain.webp"),
    desc: "Secure, transparent, and efficient blockchain solutions to help modernize processes and create new  business opportunities.",
  },
  {
    id: 4,
    title: "Data Analytics and Business Intelligence",
    image: require("../assets/images/services/data-analytics.webp"),
    desc: "Transform your data into actionable insights with our comprehensive data analytics and business  intelligence solutions.",
  },
  {
    id: 5,
    title: "Artificial Intelligence Development",
    image: require("../assets/images/services/ai.webp"),
    desc: "Harness the power of AI and machine learning to uncover insights, optimize operations, and solve complex challenges with precision.",
  },
];

// Web Development Services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Website Design",
    image: require("../assets/images/landing page/Custom Website Design.webp"),
    description:
      "We design visually stunning, user-friendly websites that reflect your brand. Our responsive designs ensure a seamless experience across all devices.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: require("../assets/images/landing page/E-commerce Solutions.webp"),
    description:
      "We build secure, high-performing e-commerce platforms with seamless payment integration, boosting sales and enhancing user experience.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.webp"),
    description:
      "Our CMS solutions allow easy website management with platforms like WordPress, Joomla, and Drupal, requiring no technical expertise.",
  },
  {
    id: 4,
    title: "API Integration",
    image: require("../assets/images/landing page/API Integration.webp"),
    description:
      "We connect your website to third-party tools, ensuring smooth API integrations for payment gateways, CRM systems, and other services.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    image: require("../assets/images/landing page/Website Maintenance & Support.webp"),
    description:
      "We provide updates, security enhancements, and performance monitoring to keep your website secure, fast, and up to date.",
  },
];

// App Development Services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landing page/iOS App Development.webp"),
    description:
      "We create high-performance iOS apps optimized for iPhones, iPads, and Apple Watch, ensuring seamless user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landing page/Android App Development.webp"),
    description:
      "Our Android apps are built for smooth performance, scalability, and user engagement across all Android devices.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.webp"),
    description:
      "Using React Native and Flutter, we develop apps that run seamlessly on both iOS and Android, saving time and cost.",
  },
  {
    id: 4,
    title: "UI/UX Design for Apps",
    image: require("../assets/images/landing page/UIUX Design for Apps.webp"),
    description:
      "We craft intuitive, visually appealing UI/UX designs to enhance user engagement and ensure seamless app navigation.",
  },
  {
    id: 5,
    title: "App Testing & Deployment",
    image: require("../assets/images/landing page/App Testing & Deployment.webp"),
    description:
      "We rigorously test apps for performance, usability, and security, ensuring a smooth launch on the App Store and Google Play.",
  },
];

// Service details page content
export const serviceDetailsList = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    shortDescription: "End-to-end web solutions from frontend to backend",
    heroImage: "/images/services/web-dev.jpg", // Replace with your actual image path
    overview:
      "We build robust, scalable web applications that deliver seamless user experiences across all devices. Our full-stack solutions combine cutting-edge frontend technologies with powerful backend architectures to create performant, secure, and maintainable web applications.",
    features: [
      "Custom web application development",
      "Responsive and mobile-first design",
      "RESTful API development and integration",
      "Database design and optimization",
      "Cloud deployment and DevOps",
      "Progressive Web Apps (PWAs)",
      "Single Page Applications (SPAs)",
      "E-commerce solutions",
    ],
    technologies: [
      {
        name: "Frontend",
        items: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "Django", "Ruby on Rails", "Laravel"],
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
      },
      {
        name: "DevOps",
        items: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines"],
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Requirement analysis and planning",
      },
      {
        step: 2,
        title: "Design",
        description: "UI/UX design and architecture planning",
      },
      {
        step: 3,
        title: "Development",
        description: "Agile implementation with sprints",
      },
      {
        step: 4,
        title: "Testing",
        description: "Quality assurance and user testing",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Launch and performance optimization",
      },
      {
        step: 6,
        title: "Maintenance",
        description: "Ongoing support and updates",
      },
    ],
    benefits: [
      "Comprehensive solution from a single provider",
      "Faster time-to-market",
      "Better performance through optimized integration",
      "Consistent code quality across layers",
      "Scalable architecture for future growth",
    ],
  },
  {
    id: 2,
    title: "App Development",
    shortDescription: "Native and cross-platform mobile applications",
    heroImage: "/images/services/app-dev.jpg",
    overview:
      "We create high-performance mobile applications for iOS and Android platforms, combining native development with cross-platform solutions to deliver the best user experience. Our apps are designed for engagement, retention, and business growth.",
    features: [
      "Native iOS and Android development",
      "Cross-platform app development",
      "UI/UX optimized for mobile",
      "Offline functionality",
      "Push notifications",
      "In-app purchases",
      "Social media integration",
      "App store optimization",
    ],
    technologies: [
      { name: "Native", items: ["Swift", "Kotlin", "Java"] },
      { name: "Cross-Platform", items: ["React Native", "Flutter", "Ionic"] },
      { name: "Backend", items: ["Firebase", "AWS Amplify", "GraphQL"] },
      { name: "Testing", items: ["Jest", "Appium", "Detox"] },
    ],
    process: [
      {
        step: 1,
        title: "Concept",
        description: "Idea validation and market research",
      },
      {
        step: 2,
        title: "Prototyping",
        description: "Wireframing and MVP development",
      },
      { step: 3, title: "Design", description: "Mobile-first UI/UX design" },
      { step: 4, title: "Development", description: "Feature implementation" },
      { step: 5, title: "Testing", description: "QA on multiple devices" },
      { step: 6, title: "Launch", description: "App store deployment" },
    ],
    benefits: [
      "Faster development cycles",
      "Lower development costs",
      "Access to device-specific features",
      "Smooth animations and transitions",
      "Better app store visibility",
    ],
  },
  {
    id: 3,
    title: "Blockchain Development",
    shortDescription: "Decentralized solutions and smart contracts",
    heroImage: "/images/services/blockchain.jpg",
    overview:
      "We develop secure, transparent blockchain solutions including smart contracts, dApps, and enterprise blockchain implementations. Our solutions leverage distributed ledger technology to create trustless systems with immutable records.",
    features: [
      "Smart contract development",
      "Decentralized applications (dApps)",
      "Token creation (ERC-20, ERC-721)",
      "Blockchain integration",
      "NFT marketplaces",
      "DeFi solutions",
      "Wallet integration",
      "Blockchain consulting",
    ],
    technologies: [
      {
        name: "Platforms",
        items: ["Ethereum", "Polygon", "Solana", "Hyperledger"],
      },
      { name: "Languages", items: ["Solidity", "Rust", "Go", "Vyper"] },
      { name: "Tools", items: ["Truffle", "Hardhat", "Web3.js", "Ethers.js"] },
      { name: "Storage", items: ["IPFS", "Filecoin", "Arweave"] },
    ],
    process: [
      { step: 1, title: "Consultation", description: "Use case evaluation" },
      {
        step: 2,
        title: "Architecture",
        description: "Blockchain selection and design",
      },
      { step: 3, title: "Development", description: "Smart contract coding" },
      { step: 4, title: "Audit", description: "Security review and testing" },
      { step: 5, title: "Deployment", description: "Mainnet launch" },
      {
        step: 6,
        title: "Integration",
        description: "Frontend and backend connection",
      },
    ],
    benefits: [
      "Enhanced security and transparency",
      "Reduced intermediaries",
      "Immutable record keeping",
      "Automated processes via smart contracts",
      "New business models through tokenization",
    ],
  },
  {
    id: 4,
    title: "Data Analytics and Business Intelligence",
    shortDescription: "Data-driven decision making",
    heroImage: "/images/services/data-analytics.jpg",
    overview:
      "We transform your raw data into actionable insights through advanced analytics and business intelligence solutions. Our data experts help you uncover patterns, predict trends, and make informed business decisions.",
    features: [
      "Custom dashboard development",
      "Predictive analytics",
      "Data visualization",
      "ETL pipeline development",
      "Big data processing",
      "Machine learning integration",
      "KPI tracking",
      "Real-time analytics",
    ],
    technologies: [
      { name: "Tools", items: ["Tableau", "Power BI", "Looker", "Metabase"] },
      { name: "Languages", items: ["Python", "R", "SQL"] },
      { name: "Big Data", items: ["Hadoop", "Spark", "Kafka"] },
      {
        name: "Cloud",
        items: ["AWS Redshift", "Google BigQuery", "Snowflake"],
      },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Data source evaluation" },
      {
        step: 2,
        title: "Preparation",
        description: "Data cleaning and transformation",
      },
      { step: 3, title: "Modeling", description: "Data warehouse design" },
      {
        step: 4,
        title: "Analysis",
        description: "Statistical and predictive modeling",
      },
      { step: 5, title: "Visualization", description: "Dashboard creation" },
      {
        step: 6,
        title: "Deployment",
        description: "Integration with business processes",
      },
    ],
    benefits: [
      "Improved decision making",
      "Identification of new opportunities",
      "Operational efficiency",
      "Competitive advantage",
      "Measurable ROI",
    ],
  },
  {
    id: 5,
    title: "Artificial Intelligence Development",
    shortDescription: "Intelligent systems and automation",
    heroImage: "/images/services/ai.jpg",
    overview:
      "We build AI-powered solutions that automate processes, enhance decision-making, and create intelligent user experiences. Our machine learning and deep learning models are tailored to solve your specific business challenges.",
    features: [
      "Machine learning models",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
      "Recommendation engines",
      "Chatbots and virtual assistants",
      "AI-powered automation",
      "Custom neural networks",
    ],
    technologies: [
      {
        name: "Frameworks",
        items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      },
      { name: "Languages", items: ["Python", "R", "Julia"] },
      { name: "NLP", items: ["GPT", "BERT", "spaCy", "NLTK"] },
      { name: "Vision", items: ["OpenCV", "YOLO", "Detectron2"] },
    ],
    process: [
      {
        step: 1,
        title: "Problem Definition",
        description: "Identify AI opportunities",
      },
      {
        step: 2,
        title: "Data Collection",
        description: "Gather and label training data",
      },
      {
        step: 3,
        title: "Model Selection",
        description: "Choose appropriate algorithms",
      },
      {
        step: 4,
        title: "Training",
        description: "Model development and validation",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Integration with applications",
      },
      {
        step: 6,
        title: "Monitoring",
        description: "Performance tracking and improvement",
      },
    ],
    benefits: [
      "Process automation",
      "Enhanced customer experiences",
      "Improved accuracy in predictions",
      "24/7 intelligent assistance",
      "Competitive differentiation",
    ],
  },
];
