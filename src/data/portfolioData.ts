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
  fullName: "Samy Andrés Sierra Suárez",
  displayShortName: "S. Sierra Suárez", // Visual brand matching the screens
  titleName: "S. SIERRA SUÁREZ // PROSPECT ID",
  role: "Desarrollador Java Full Stack",
  id: "#7000-M",
  marketValue: "70.0M €",
  potential: 4, // 4 out of 5 filled dots
  birthplace: "Bogotá, COL",
  experienceYears: "3+ YRS",
  currentClub: "Licisoluciones S.A.S. BIC",
  signedUntil: "Disponibilidad inmediata",
  profilePhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFAzrGXFuP--s586xInYyjbz4omKALj08X2Y6ARdNvhtim0O9rL11GZYuBMybIhTW0vj47dZS-6xgRb9Q77hfBzjvDOnpc5cHTSe1zzSd_V08EYjznkYIwbHnxvzXXvD5U_8Qj2LNKttnPlattM6SxvjWEKrstvwXHy2c8QOXnnJseQkbPosVDPkMOpEMl58OqEkiMQSqS0DGTmPjCigcNKn-YG9DdguJl4MdT56UYW6jmUwEdnFXmJkNxYsuNL95RXmxEyNcbuic",
  drawerPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWxvt2q14iejuS05n9PxvIFrNZSXnyv7x4tBuwecfiYbIBYDN-gCkYQlf0F8rAyds7RNv4I0DPGntswfdHfFM73QeJO6hBLzI4In-jA5w-aC5gwqBKUOUYd2JXSdadR0Hx6eXzEOuh-P8-eyyTkmnTYHF9dmEcBh6E27cHjTb8cUQn-kx56sn9mbF7EfJnhrFzA5H_-rGOqknuVRsbLn9o6L3FbTgpl7D_50tw4_VKzyI6wpBD8IX2Maml535pWtS-xg54HgQfix8",
  altPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGVSVpxmSxrjkoWfy_ezQs8LwxobXsysMOWWScexrDBkt18RnUN7kOnkHSJ6vOMKNkXdPab76cgVmBIMVndvkEIDGhzQHCv45nFrP61YUqyfx7IQS43-qwoQNyF-fhfYtV6fXTSQdACjvcmL5WfPtU3djpMQ_6SHFl346cdlZZnwfeMbN1WcB_ZpdCZf9Em6bgrGpBds_dZtbI-nVPWngXbwvVVJQLf7OKXWib_YKm8qfupLRH3zcKONZEyERzKoXQfb64qbszZpw",
  blueprintPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuBct2b1TfE3y_nyY8pkTo5P09FPP1Uscae3XxW2w7ylYMX9ssmTqWosEg8pxS-h3gpgtTJU8YcAJ208_Ee_mAyUaa9D-FM2eINH7YU_VhWUGONTRPKRwL6w9jgxUaxscIOOUH2n9FTcKGnVWocds0T7_fhwB5U-ehvqH7miHj8-I54eBtJfTGX4RmGT4jwovJRBJ2o8JIyYA0yfG093XMEqpmRKR8MoQo09LiWx7pstSxsFcQTTa4FXWALEUS8SkYlQi81xr1xC7qc",
  scoutNotes: "Desarrollador Java Full Stack con experiencia en backend, bases de datos, APIs REST, automatización e integración de pagos digitales e IA. Disponible para jornada completa en modalidad remota o híbrida."
};

export const workExperiences: WorkExperience[] = [
  {
    id: "exp-techmind-hackathon",
    period: "AGO. 2026",
    company: "Hackathon Oracle ONE + Alura + NoCountry // TEAM 13",
    role: "Lead Backend, Persistencia e Infraestructura",
    description: "Finalista Top 21 tras 130 horas de desarrollo integral en TechMind / LogiCore.",
    achievements: [
      "Finalista (Top 21 entre múltiples equipos) tras 130 horas de desarrollo integral en el proyecto TechMind / LogiCore.",
      "Diseñé una arquitectura híbrida orquestando Java (Spring Boot 3 + Vaadin 24) con un microservicio de Machine Learning en Python (FastAPI).",
      "Implementé infraestructura en PostgreSQL (Supabase) con migraciones Flyway seguras, gestionando la integridad referencial compleja para hilos de chat de IA, anotaciones y workflows dinámicos."
    ],
    tags: ["SPRING BOOT 3", "VAADIN 24", "FASTAPI", "POSTGRESQL", "FLYWAY"],
  },
  {
    id: "exp-granisammy",
    period: "MAY. 2023 – JUL. 2025",
    company: "Granisammy Acabados S.A.S.",
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
    tags: ["SPRING BOOT", "VAADIN", "SOLID", "SQL OPTIMIZATION"]
  },
  {
    id: "exp-licisoluciones",
    period: "AGO. 2025 – JUL. 2026",
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
    period: "AGO. 2022 – MAR. 2023",
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
    image: AmigoPhoto,
    demoUrl: "https://samysierradv.github.io/Juego-Amigo-Secreto-JS/"
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
    title: "Ingeniería de Sistemas (esperado 2027)",
    institution: "Universidad Central",
    type: "DEGREE",
    verified: true,
    tagText: "ENE. 2021 - DIC. 2027",
    icon: "GraduationCap"
  },
  {
    id: "acad2",
    title: "Oracle Next Education G9 - Principiante en Programación",
    institution: "Oracle + Alura Latam",
    type: "FORMATION",
    verified: true,
    tagText: "ENE. 2025 - AGO. 2025",
    icon: "Award"
  },
  {
    id: "acad3",
    title: "ONE Tech Foundation G9 - Back End",
    institution: "Alura + Oracle Next Education",
    type: "FORMATION",
    verified: true,
    tagText: "MAR. 2026",
    icon: "Award",
    durationVolume: "326 HORAS"
  },
  {
    id: "acad4",
    title: "Oracle Cloud Infrastructure (OCI) Foundations Associate",
    institution: "Oracle",
    type: "FORMATION",
    verified: true,
    tagText: "JUN 2026 - JUN 2028",
    icon: "Cloud",
    durationVolume: "CERTIFICATION VALID"
  }
];

export const skillsData = {
  lenguajes: [
    { name: "Java", icon: "Coffee", detail: "Lenguaje de programación" },
    { name: "Python", icon: "Code", detail: "Microservicios y procesamiento de datos" },
    { name: "JavaScript", icon: "Code", detail: "Lenguaje de programación" },
    { name: "SQL", icon: "Database", detail: "Bases de datos relacionales" }
  ],
  frameworks: [
    { name: "Spring Boot", icon: "Leaf", detail: "Desarrollo backend con Java" },
    { name: "Spring Security", icon: "ShieldCheck", detail: "Seguridad de aplicaciones" },
    { name: "Vaadin", icon: "Layout", detail: "Aplicaciones con Java" },
    { name: "React", icon: "Atom", detail: "Desarrollo Full Stack" },
    { name: "Node.js", icon: "Hexagon", detail: "Servicios RESTful" },
    { name: "FastAPI", icon: "Server", detail: "Microservicios en Python" }
  ],
  databases: [
    { name: "JPA/Hibernate", icon: "Layers", detail: "Persistencia y bases de datos" },
    { name: "PostgreSQL", icon: "Database", detail: "Base de datos relacional" },
    { name: "MySQL", icon: "Database", detail: "Base de datos relacional" },
    { name: "MongoDB", icon: "Database", detail: "Base de datos NoSQL" }
  ],
  tools: [
    { name: "APIs REST", icon: "Terminal", detail: "Diseño e integración de servicios" },
    { name: "Microservicios", icon: "Network", detail: "Arquitectura y prácticas" },
    { name: "SOLID", icon: "Box", detail: "Principios de diseño" },
    { name: "Oracle Cloud Infrastructure (OCI)", icon: "Cloud", detail: "Cloud y herramientas" },
    { name: "Docker", icon: "Box", detail: "Cloud y herramientas" },
    { name: "Git", icon: "GitBranch", detail: "Control de versiones" },
    { name: "GitHub", icon: "Github", detail: "Control de versiones" },
    { name: "Jira", icon: "Layout", detail: "Gestión de proyectos" }
  ],
  methodologies: [
    { name: "SCRUM", icon: "Users", detail: "Arquitectura y prácticas" },
    { name: "Pruebas unitarias", icon: "CheckCircle2", detail: "Arquitectura y prácticas" },
    { name: "Autenticación", icon: "ShieldCheck", detail: "Otros" },
    { name: "Pagos digitales", icon: "CreditCard", detail: "Otros" },
    { name: "Integración de IA", icon: "Brain", detail: "Otros" }
  ]
};

export const coreLanguages = ["Java", "Python", "JavaScript", "SQL"];
export const frameworks = ["Spring Boot", "Spring Security", "Vaadin", "React", "Node.js", "FastAPI"];
export const ecosystem = ["JPA/Hibernate", "PostgreSQL", "MySQL", "MongoDB", "OCI", "Docker", "Git", "GitHub", "Jira"];

export const tacticalNodes: TacticalNode[] = [
  {
    id: "node-microservices",
    label: "Microservices Arch",
    x: 50,
    y: 15,
    icon: "Hub",
    details: {
      description: "Integración de una arquitectura Java con un microservicio de Machine Learning en Python mediante FastAPI, junto con procesamiento de datos e infraestructura Docker.",
      tags: ["JAVA", "SPRING BOOT", "PYTHON", "FASTAPI", "DOCKER"],
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
      description: "Diseño e integración de APIs REST y endpoints para plataformas web y móviles.",
      tags: ["APIS REST", "SPRING BOOT", "NODE.JS", "REACT"],
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
      description: "Implementación de autenticación y seguridad de aplicaciones con Spring Security, incluida la protección de pagos digitales.",
      tags: ["SPRING SECURITY", "AUTENTICACIÓN", "PAGOS DIGITALES"],
      scalability: 90,
      resilience: 96,
      observability: 93,
      operationalStatus: "ACTIVE",
      codeId: "#SEC-403"
    }
  },
  {
    id: "node-cache",
    label: "Persistencia",
    x: 70,
    y: 65,
    icon: "Cpu",
    details: {
      description: "Persistencia de datos con JPA/Hibernate y bases de datos relacionales y NoSQL.",
      tags: ["JPA", "HIBERNATE", "POSTGRESQL", "MYSQL", "MONGODB"],
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
      description: "Uso de PostgreSQL y SQL para persistencia y optimización de consultas.",
      tags: ["POSTGRESQL", "SQL", "PERSISTENCIA"],
      scalability: 88,
      resilience: 93,
      observability: 86,
      operationalStatus: "ACTIVE",
      codeId: "#PSQL-5432"
    }
  },
  {
    id: "node-cloud",
    label: "OCI / Tools",
    x: 85,
    y: 85,
    icon: "Cloud",
    details: {
      description: "Uso de Oracle Cloud Infrastructure, Docker y herramientas de colaboración y control de versiones.",
      tags: ["OCI", "DOCKER", "GIT", "GITHUB", "JIRA"],
      scalability: 92,
      resilience: 91,
      observability: 90,
      operationalStatus: "ACTIVE",
      codeId: "#AWS-990"
    }
  }
];
