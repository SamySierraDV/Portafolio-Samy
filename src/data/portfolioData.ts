import { Project, AcademicCredential, WorkExperience, Skill, TacticalNode } from '../types';

export const developerProfile = {
  fullName: "Samy Luis Díaz Marulanda",
  displayShortName: "S. Sierra Suárez", // Visual brand matching the screens
  titleName: "S. SIERRA SUÁREZ // PROSPECT ID",
  role: "Backend Developer // Architect",
  id: "#7000-M",
  marketValue: "70.0M €",
  potential: 4, // 4 out of 5 filled dots
  birthplace: "Barrancas / Bogotá, COL",
  experienceYears: "3+ YRS",
  currentClub: "Granlsammy S.A.S",
  signedUntil: "30/07/2025",
  profilePhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFAzrGXFuP--s586xInYyjbz4omKALj08X2Y6ARdNvhtim0O9rL11GZYuBMybIhTW0vj47dZS-6xgRb9Q77hfBzjvDOnpc5cHTSe1zzSd_V08EYjznkYIwbHnxvzXXvD5U_8Qj2LNKttnPlattM6SxvjWEKrstvwXHy2c8QOXnnJseQkbPosVDPkMOpEMl58OqEkiMQSqS0DGTmPjCigcNKn-YG9DdguJl4MdT56UYW6jmUwEdnFXmJkNxYsuNL95RXmxEyNcbuic",
  drawerPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWxvt2q14iejuS05n9PxvIFrNZSXnyv7x4tBuwecfiYbIBYDN-gCkYQlf0F8rAyds7RNv4I0DPGntswfdHfFM73QeJO6hBLzI4In-jA5w-aC5gwqBKUOUYd2JXSdadR0Hx6eXzEOuh-P8-eyyTkmnTYHF9dmEcBh6E27cHjTb8cUQn-kx56sn9mbF7EfJnhrFzA5H_-rGOqknuVRsbLn9o6L3FbTgpl7D_50tw4_VKzyI6wpBD8IX2Maml535pWtS-xg54HgQfix8",
  altPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGVSVpxmSxrjkoWfy_ezQs8LwxobXsysMOWWScexrDBkt18RnUN7kOnkHSJ6vOMKNkXdPab76cgVmBIMVndvkEIDGhzQHCv45nFrP61YUqyfx7IQS43-qwoQNyF-fhfYtV6fXTSQdACjvcmL5WfPtU3djpMQ_6SHFl346cdlZZnwfeMbN1WcB_ZpdCZf9Em6bgrGpBds_dZtbI-nVPWngXbwvVVJQLf7OKXWib_YKm8qfupLRH3zcKONZEyERzKoXQfb64qbszZpw",
  blueprintPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBct2b1TfE3y_nyY8pkTo5P09FPP1Uscae3XxW2w7ylYMX9ssmTqWosEg8pxS-h3gpgtTJU8YcAJ208_Ee_mAyUaa9D-FM2eINH7YU_VhWUGONTRPKRwL6w9jgxUaxscIOOUH2n9FTcKGnVWocds0T7_fhwB5U-ehvqH7miHj8-I54eBtJfTGX4RmGT4jwovJRBJ2o8JIyYA0yfG093XMEqpmRKR8MoQo09LiWx7pstSxsFcQTTa4FXWALEUS8SkYlQi81xr1xC7qc",
  scoutNotes: "High versatility in backend systems with a growing specialization in decentralized architectures. The completion of the Oracle Next program suggests a disciplined approach to intensive technical upskilling."
};

export const workExperiences: WorkExperience[] = [
  {
    id: "exp1",
    period: "PRESENT – 2024",
    company: "Granlsammy S.A.S",
    role: "Backend Developer // Architect",
    description: "Led microservices migration achieving 40% reduction in latency. Architected scalable event-driven systems.",
    tags: ["KAFKA", "DOCKER"],
    isCurrent: true
  },
  {
    id: "exp2",
    period: "2022 – 2024",
    company: "Licisoluciones BIC",
    role: "Full Stack Developer",
    description: "Implemented legacy system modernization and high-performance API endpoints for fintech partners.",
    tags: ["JAVA", "REST APIS"]
  }
];

export const projects: Project[] = [
  {
    id: "project-nomina",
    title: "Sistema Nomina Empresarial",
    rating: "A+",
    matchRating: 9.6,
    description: "Enterprise-grade payroll orchestration engine designed for high-concurrency environments. Implements reactive data streams and modular micro-frontend architecture.",
    longDescription: "A fully resilient, clustered system designed to sustain massive synchronous calculator loads during month-end payroll distributions. Includes self-healing orchestration to prevent node crash during unexpected queueing surges.",
    technologies: ["Spring Boot", "Vaadin", "MongoDB", "Docker", "Sleuth"],
    complexity: "PRO",
    calcReduction: "80%",
    status: "LIVE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9toLULnObc7RJLIOCc_uSdqdoJ_8lm2W7f_qptVeoW238AS7tdu2iEcwzxC1Xb7OvM1qW7Q28ihX0EzdHq25f88R5_luSdJb4mZc8KbgjZhk32xdVSAPEhUw2Dlkf-EBPL9KinOTL5Vy_Ub0uQPD1ilq18Loo1vsGR6ZV5ldRq-O3hNcg2ultr2m4Pu00HZreUAkh1nJMjS5E6imkatwNLUHs1ji6HuVE_uuqtlxwt5lgEvccjbGzmcDtkr3jo3Jq6uUJ0xaLqY4",
    stats: {
      latencyReduction: 80,
      uptime: "99.98%",
      throughput: "120k req/s"
    },
    scoutNotes: "Excellent utilization of Vaadin as a high-fidelity control panel paired with the ultra-low read latency of MongoDB clusters. High availability metrics recorded."
  },
  {
    id: "project-granlsammy",
    title: "Granlsammy Core Ledger",
    rating: "A",
    matchRating: 9.2,
    description: "High-throughput financial ledger system migration and performance optimization for enterprise-scale transaction processing.",
    longDescription: "Execution was focused on decoupling the legacy monolith into an event-driven architecture. The core challenge involved synchronizing ledger states across distributed nodes without compromising ACID properties.",
    technologies: ["Java", "Spring Boot", "Kafka", "Docker"],
    complexity: "CORE",
    calcReduction: "40%",
    status: "STABLE",
    syncTime: "15ms",
    stats: {
      latencyReduction: 40,
      uptime: "99.99%",
      throughput: "50k req/s"
    },
    scoutNotes: "The implementation of a custom Kafka producer interceptor allowed for real-time observability of throughput bottlenecks, leading to the identification of a significant serialization overhead. Strategic deployment of Docker Swarm ensured high availability during peak transaction windows. Final 'Match' analysis confirms all mission-critical KPIs were exceeded by 15% on average."
  },
  {
    id: "project-literalura",
    title: "LiterAlura",
    rating: "A",
    matchRating: 8.9,
    description: "Advanced bibliographic search engine utilizing the Gutendex API for real-time literary data extraction.",
    longDescription: "A Java 17 service caching query profiles in structured schemas, avoiding external rate constraints while serving bibliographic indices rapidly. Interfaced seamlessly with custom parser layers.",
    technologies: ["Java 17", "PostgreSQL", "Jackson API"],
    complexity: "MEDIUM",
    calcReduction: "50%",
    status: "LIVE",
    stats: {
      latencyReduction: 50,
      uptime: "99.95%",
      throughput: "8k req/s"
    },
    scoutNotes: "Demonstrated refined skills in processing raw unstructured dynamic JSON formats streamingly using local Jackson parsers."
  },
  {
    id: "project-foro",
    title: "Foro Alura",
    rating: "B+",
    matchRating: 8.5,
    description: "High-security REST API for collaborative technical discussions, featuring encrypted authentication layers.",
    longDescription: "Collaborative portal backend featuring secure authentication protocols, custom permission routers, audit logging on threads, and robust database pooling triggers.",
    technologies: ["Java", "Spring Security", "JWT", "PostgreSQL"],
    complexity: "CORE",
    calcReduction: "35%",
    status: "ENCRYPTED ENVIRONMENT",
    secureProtocol: "JWT",
    extraBadge: "Encrypted Environment",
    stats: {
      latencyReduction: 35,
      uptime: "99.90%",
      throughput: "12k req/s"
    },
    scoutNotes: "High-security REST API adhering rigorously to OAuth standards. Tested resilience against standard threat profiles."
  },
  {
    id: "project-conversor",
    title: "Conversor Monedas",
    rating: "A",
    matchRating: 8.7,
    description: "Real-time currency arbitrage engine using HttpClient for high-frequency exchange rate synchronization.",
    longDescription: "High frequency rate puller pulling updates dynamically and using light thread pooling schemas to evaluate arbitrage positions on key quote pairings.",
    technologies: ["Java 11", "HttpClient", "Gson Parser"],
    complexity: "LIGHT",
    calcReduction: "20%",
    status: "LIVE",
    syncTime: "120ms",
    extraBadge: "USD / EUR Matrix",
    stats: {
      latencyReduction: 20,
      uptime: "99.99%",
      throughput: "30k req/s"
    },
    scoutNotes: "Remarkable latency control (120ms) directly matching high-speed remote API endpoints."
  },
  {
    id: "project-batatabit",
    title: "Batatabit",
    rating: "A",
    matchRating: 8.8,
    description: "Mobile-first cryptocurrency exchange landing page optimized for low-latency visual performance.",
    longDescription: "An incredibly responsive web portal presenting crypto rates with smooth layouts, SVG vectors, and immediate state updates across multiple mobile dimensions.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    complexity: "LIGHT",
    calcReduction: "60%",
    status: "RESPONSIVE MATRIX",
    extraBadge: "Responsive Matrix",
    stats: {
      latencyReduction: 60,
      uptime: "100%",
      throughput: "5k req/s"
    },
    scoutNotes: "Excellent demonstration of frontend optimization techniques, keeping visual rendering metrics outstanding under simulated high latency profiles."
  }
];

export const academicCredentials: AcademicCredential[] = [
  {
    id: "acad1",
    title: "Ingeniería de Sistemas",
    institution: "Universidad Central",
    type: "DEGREE",
    verified: true,
    tagText: "DEGREE",
    icon: "GraduationCap"
  },
  {
    id: "acad2",
    title: "Blockchain",
    institution: "Universidad Ean",
    type: "SPECIALIZATION",
    verified: true,
    tagText: "SPECIALIZATION",
    icon: "Database"
  },
  {
    id: "acad3",
    title: "Oracle Next Education",
    institution: "Intensive Technical Formation",
    type: "FORMATION",
    verified: true,
    tagText: "326h",
    icon: "Award",
    durationVolume: "326h TOTAL VOLUME"
  }
];

export const coreLanguages = ["Java", "SQL", "TypeScript", "Python"];
export const frameworks = ["Spring Boot", "Vaadin", "JPA/Hibernate"];
export const ecosystem = ["MongoDB", "PostgreSQL", "Git / GitHub", "Docker"];

export const tacticalNodes: TacticalNode[] = [
  {
    id: "node-microservices",
    label: "Microservices Arch",
    x: 50,
    y: 15,
    icon: "Hub",
    details: {
      description: "Expertise in event-driven patterns, service mesh, and container orchestration (K8s/Docker). Focus on high availability and fault tolerance. Implements robust inter-service communication using gRPC and message brokers.",
      tags: ["KUBERNETES", "DOCKER", "ISTIO", "KAFKA"],
      scalability: 98,
      resilience: 94,
      observability: 91,
      operationalStatus: "ACTIVE",
      codeId: "#MS-808"
    }
  },
  {
    id: "node-api",
    label: "API Integration",
    x: 50,
    y: 42,
    icon: "Terminal",
    details: {
      description: "Architecting high-throughput RESTful and GraphQL APIs with optimized gateways. Specialized in rate limiting, cache headers management and request sanitization.",
      tags: ["EXPRESS", "GRAPHQL", "SWAGGER", "SPRING GATEWAY"],
      scalability: 95,
      resilience: 92,
      observability: 89,
      operationalStatus: "ACTIVE",
      codeId: "#API-301"
    }
  },
  {
    id: "node-security",
    label: "Security",
    x: 30,
    y: 65,
    icon: "Shield",
    details: {
      description: "Hardening system perimeter utilizing OAuth2, JWT mechanisms, and TLS encryption protocols. Expert in dependency vulnerability scans, CORS mitigation and secure storage practices.",
      tags: ["SPRING SECURITY", "JWT", "BCRYPT", "OWASP"],
      scalability: 90,
      resilience: 96,
      observability: 93,
      operationalStatus: "ACTIVE",
      codeId: "#SEC-403"
    }
  },
  {
    id: "node-cache",
    label: "Data Cache",
    x: 70,
    y: 65,
    icon: "Cpu",
    details: {
      description: "Optimizing database responses via high-performance storage cache layers. Implements cache eviction algorithms (LRU, LFU) and read-through/write-through strategies.",
      tags: ["REDIS", "MEMCACHED", "EHCACHE", "SPRING LOGIC"],
      scalability: 97,
      resilience: 90,
      observability: 95,
      operationalStatus: "ACTIVE",
      codeId: "#CSH-6379"
    }
  },
  {
    id: "node-database",
    label: "PostgreSQL",
    x: 15,
    y: 85,
    icon: "Database",
    details: {
      description: "Relational database tuning, writing highly optimized complex SQL plans, designing indices properly, maintaining ACID requirements reliably on massive ledger tables.",
      tags: ["INDEXES", "SCHEMAS", "REPLICATION", "MONITORING"],
      scalability: 88,
      resilience: 93,
      observability: 86,
      operationalStatus: "ACTIVE",
      codeId: "#PSQL-5432"
    }
  },
  {
    id: "node-cloud",
    label: "AWS Cloud",
    x: 85,
    y: 85,
    icon: "Cloud",
    details: {
      description: "Deploying high-performance backends to cloud infrastructure. Provisioning secure VPC pipelines, managed containers (ECS/EKS) and monitoring performance budgets proactively.",
      tags: ["VPC", "ECS", "IAM", "CLOUDWATCH"],
      scalability: 92,
      resilience: 91,
      observability: 90,
      operationalStatus: "ACTIVE",
      codeId: "#AWS-990"
    }
  }
];
