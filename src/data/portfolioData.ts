import { Project, AcademicCredential, WorkExperience, Skill, TacticalNode } from '../types';

import InvenarioPhoto from '../../assets/images/foto-inventario.webp';
import PayrollPhoto from '../../assets/images/foto-payroll.webp';
import MicroserviciosPhoto from '../../assets/images/foto-microservicios.webp';
import LiteraluraPhoto from '../../assets/images/foto-literalura.webp';
import ForoPhoto from '../../assets/images/foto-foro.webp';
import ConversorPhoto from '../../assets/images/foto-conversor.webp';
import AmigoPhoto from '../../assets/images/foto-amigo.webp';
import BatatabitPhoto from '../../assets/images/foto-batatabit.webp';
import LogicorePhoto from '../../assets/images/foto-logicore.webp';
import { i } from 'motion/react-client';

export const developerProfile = {
  fullName: "Samy Sierra Suárez",
  displayShortName: "S. Sierra Suárez", // Visual brand matching the screens
  titleName: "S. SIERRA SUÁREZ // PROSPECT ID",
  role: "Backend Developer // Architect",
  id: "#7000-M",
  marketValue: "70.0M €",
  potential: 4, // 4 out of 5 filled dots
  birthplace: "Bogotá, COL",
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
    id: "exp-granisammy",
    period: "AGO. 2025 – ACTUALIDAD",
    company: "Granlsammy Acabados S.A.S",
    role: "Software Developer",
    description: "Lidero la automatización de infraestructura crítica y optimización de arquitectura backend.",
    achievements: [
      "Desarrollé un sistema de nómina con Spring Boot y Vaadin, reduciendo el procesamiento manual en +60%.",
      "Implementé arquitectura SOLID, mejorando la mantenibilidad en un 35%.",
      "Diseñé +15 endpoints REST con tiempos de respuesta < 2s.",
      "Automaticé cálculos de horas extra y deducciones, reduciendo errores en -90%.",
      "Generé reportes automatizados para +100 empleados (de horas a minutos).",
      "Incrementé la eficiencia de RR. HH. en +40% mediante digitalización.",
      "Implementé control de acceso robusto para protección de datos sensibles.",
      "Optimización de consultas SQL mejorando el rendimiento en +30%."
    ],
    tags: ["SPRING BOOT", "VAADIN", "SOLID", "SQL OPTIMIZATION"],
    isCurrent: true
  },
  {
    id: "exp-licisoluciones",
    period: "ENE. 2024 – JUL. 2025",
    company: "Licisoluciones S.A.S BIC",
    role: "Java Software Engineer",
    description: "Desarrollo de ecosistemas digitales inteligentes para gestión comercial y financiera.",
    achievements: [
      "Desarrollé plataforma web/móvil para gestión de restaurantes (reservas, pagos, tracking).",
      "Implementé +10 funcionalidades críticas (pedidos QR, tracking en vivo, panel admin).",
      "Documenté +20 requerimientos funcionales asegurando cobertura total del sistema.",
      "Automatización de pedidos reduciendo tiempos de atención en +50%.",
      "Integración de pagos digitales seguros reduciendo errores en +80%.",
      "Sistema de recomendaciones con IA, aumentando potencial de ventas en +25%.",
      "Construí panel administrativo con métricas de ventas para toma de decisiones."
    ],
    tags: ["JAVA", "IA", "QR PAYMENTS", "API DESIGN"]
  },
  {
    id: "exp-freelance",
    period: "AGO. 2022 – ENE. 2023",
    company: "Self-Employed",
    role: "Desarrollador Freelance",
    description: "Construcción de soluciones a medida con enfoque en performance y escalabilidad.",
    achievements: [
      "Construcción de plataforma de criptomonedas con React, Node.js y MySQL.",
      "Incrementé la retención de usuarios en un 30% mediante notificaciones en tiempo real.",
      "Desarrollo y mantenimiento de apps web/móviles según requerimientos.",
      "Ejecución de pruebas unitarias asegurando calidad sin comprometer el rendimiento."
    ],
    tags: ["REACT", "NODE.JS", "MYSQL", "CRYPTO"]
  }
];

export const projects: Project[] = [
  // Projects with links first (order inverted relative to original)
  {
    id: "project-logicore",
    title: "ORGANIZACIÓN INTELIGENTE DEL CONOCIMIENTO (LOGICORE / TECHMIND)",
    rating: "A+",
    matchRating: 98,
    description: "Plataforma SaaS que transforma documentación técnica dispersa en conocimiento estructurado mediante ML, grafos y RAG.",
    longDescription: "Autoclasificación con TF-IDF, grafos de conocimiento interactivos y un agente IA conversacional (RAG). Integración Java/Spring Boot y microservicios Python para procesamiento de ML.",
    technologies: ["Java", "Spring Boot", "Vaadin", "Python", "FastAPI", "Machine Learning", "Supabase", "PostgreSQL"],
    complexity: "ELITE",
    calcReduction: "98%",
    status: "FINALISTA HACKATHON",
    image: LogicorePhoto,
    demoUrl: "https://logicore-app.duckdns.org/",
    githubUrl: "https://github.com/No-Country-simulation/-TechMind-Organizacion-Inteligente-del-Conocimiento-Tecnico-Team-13/tree/main",
    scoutNotes: "Video demo: https://youtu.be/iZzVtcGQqBE"
  },
  {
    id: "project-batatabit",
    title: "Batatabit",
    rating: "A",
    matchRating: 87,
    description: "Landing page de exchange de criptomonedas optimizada para dispositivos móviles (Mobile First).",
    longDescription: "Implementación de diseño responsivo con variables CSS nativas y HTML semántico. Desplegado en GitHub Pages como parte del catálogo de interfaces.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    complexity: "LIGHT",
    calcReduction: "60%",
    status: "OPERACIONAL",
    image: BatatabitPhoto,
    demoUrl: "https://samysierradv.github.io/BatatabitProyect/"
  },
  {
    id: "project-conversor",
    title: "Conversor Monedas",
    rating: "A",
    matchRating: 88,
    description: "Motor de arbitraje de divisas en tiempo real para conversiones USD ↔ ARS, BRL, COP.",
    longDescription: "Consumo de API externo con HttpClient de Java 17 y exportación de historial de transacciones a formato JSON. Reto Oracle Next Education.",
    technologies: ["Java 17", "HttpClient", "JSON"],
    complexity: "LIGHT",
    calcReduction: "20%",
    status: "OPERACIONAL",
    image: ConversorPhoto,
    githubUrl: "https://github.com/SamySierraDV/AluraLatam-Conversor-de-monedas"
  },
  {
    id: "project-foro",
    title: "Foro Alura",
    rating: "B+",
    matchRating: 90,
    description: "API REST para discusiones técnicas con capas de seguridad cifrada y autenticación JWT.",
    longDescription: "CRUD completo de temas con contraseñas BCrypt, migraciones automáticas con Flyway y políticas de acceso granulares para el Backend Challenge ONE.",
    technologies: ["Spring Boot", "Spring Security", "JWT", "MySQL"],
    complexity: "CORE",
    calcReduction: "35%",
    status: "ESTABLE",
    image: ForoPhoto,
    githubUrl: "https://github.com/SamySierraDV/AluraLatam-ForoHub-Challenge-Alura"
  },
  {
    id: "project-literalura",
    title: "LiterAlura",
    rating: "A",
    matchRating: 92,
    description: "Catálogo interactivo de libros que consume la API Gutendex en tiempo real con persistencia avanzada.",
    longDescription: "Desafío Oracle Next Education. Incluye filtrado por idioma, estadísticas de colección y listado de autores únicos por periodo histórico.",
    technologies: ["Java 17", "Spring Boot", "PostgreSQL"],
    complexity: "MEDIUM",
    calcReduction: "50%",
    status: "OPERACIONAL",
    image: LiteraluraPhoto,
    githubUrl: "https://github.com/SamySierraDV/AluraLatam-Litealura"
  },
  {
    id: "project-inventarios",
    title: "Gestión de Inventarios",
    rating: "PRO",
    matchRating: 98,
    description: "Sistema integral desarrollado para la optimización y control de existencias bajo arquitectura MVC y DAO.",
    longDescription: "Control total sobre productos, categorías y proveedores con seguimiento automatizado de entradas/salidas. Incluye monitoreo avanzado con Spring Boot Actuator.",
    technologies: ["Vaadin", "MongoDB", "Spring Boot"],
    complexity: "ELITE",
    calcReduction: "90%",
    status: "OPERACIONAL",
    image: InvenarioPhoto,
    demoUrl: "https://youtu.be/Ij4cdlLbVZs"
  },

  // Remaining projects without external links (order inverted)
  {
    id: "project-amigo-secreto",
    title: "Amigo Secreto",
    rating: "B",
    matchRating: 85,
    description: "Aplicación de sorteos grupales con animaciones suaves mediante Canvas 2D y Vanilla JS.",
    longDescription: "Sistema responsivo sin dependencias externas, con validaciones dinámicas y lógica de sorteo optimizada para el navegador.",
    technologies: ["JavaScript", "Canvas 2D", "CSS3"],
    complexity: "LIGHT",
    calcReduction: "10%",
    status: "ESTABLE",
    image: AmigoPhoto
  },
  {
    id: "project-microservicios",
    title: "E-Commerce Microservices",
    rating: "A",
    matchRating: 94,
    description: "Ecosistema de microservicios para comercio electrónico bajo patrón MVC puro y alta cobertura de pruebas.",
    longDescription: "Integración de servicios distribuidos con Laravel y Python, logrando una cobertura de código del 95% para asegurar estabilidad en producción.",
    technologies: ["Laravel", "Python", "Docker"],
    complexity: "PRO",
    calcReduction: "75%",
    status: "ESTABLE",
    image: MicroserviciosPhoto
  },
  {
    id: "project-nomina",
    title: "Nómina Empresarial",
    rating: "A+",
    matchRating: 96,
    description: "Automatización de salarios y devengados para más de 100 empleados mensuales con reducción de carga operativa.",
    longDescription: "Implementación de motores de cálculo reactivos con exportación de informes en PDF/Excel y seguridad perimetral en la capa API.",
    technologies: ["Spring Boot", "Vaadin", "MongoDB"],
    complexity: "PRO",
    calcReduction: "80%",
    status: "OPERACIONAL",
    image: PayrollPhoto
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

export const skillsData = {
  lenguajes: [
    { name: "Java", icon: "Coffee", detail: "4+ Años // Senior" },
    { name: "JavaScript", icon: "Code", detail: "3+ Años // Avanzado" },
    { name: "SQL", icon: "Database", detail: "3+ Años // Experto" },
    { name: "HTML5", icon: "FileCode", detail: "5+ Años // Dominio Total" },
    { name: "CSS3", icon: "Palette", detail: "5+ Años // Dominio Total" }
  ],
  frameworks: [
    { name: "Spring Boot", icon: "Leaf", detail: "3+ Años // Core Stack" },
    { name: "Spring Security", icon: "ShieldCheck", detail: "2+ Años // Security Lead" },
    { name: "Spring Data", icon: "Server", detail: "3+ Años // Persistence Master" },
    { name: "Vaadin", icon: "Layout", detail: "2+ Años // UI Orchestration" },
    { name: "React", icon: "Atom", detail: "2+ Años // Frontend Flow" },
    { name: "Node.js", icon: "Hexagon", detail: "2+ Años // Backend Services" }
  ],
  databases: [
    { name: "MongoDB", icon: "Database", detail: "3+ Años // NoSQL Guru" },
    { name: "MySQL", icon: "Database", detail: "3+ Años // Relational Master" },
    { name: "JPA/Hibernate", icon: "Layers", detail: "3+ Años // ORM Expert" }
  ],
  tools: [
    { name: "Git", icon: "GitBranch", detail: "4+ Años // Version Control" },
    { name: "GitHub", icon: "Github", detail: "4+ Años // CI/CD Specialist" },
    { name: "Microservicios", icon: "Network", detail: "2+ Años // Distributed Arch" },
    { name: "REST API", icon: "Terminal", detail: "3+ Años // High Throughput" },
    { name: "MVC", icon: "LayoutGrid", detail: "3+ Años // Design Pattern" },
    { name: "OOP", icon: "Box", detail: "4+ Años // Core Fundamentals" }
  ],
  methodologies: [
    { name: "SCRUM", icon: "Users", detail: "Sprints // Agile Execution" },
    { name: "Desarrollo Ágil", icon: "RefreshCw", detail: "Rapid Iteration" },
    { name: "Pasarelas de pago", icon: "CreditCard", detail: "Stripe / PayPal Integration" },
    { name: "Integración de IA", icon: "Brain", detail: "OpenAI / LLM Orchestration" }
  ]
};

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
