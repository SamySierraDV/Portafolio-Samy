# ⚽ Personal Developer Portfolio — Samy Sierra

> Portafolio interactivo de desarrollo de software diseñado con una temática única de ****Informe de Scouting Deportivo y Mercado de Fichajes****, presentando métricas de rendimiento técnico, trayectoria profesional y proyectos de arquitectura de software.

## 🌐 Demo en Vivo

Puedes explorar la aplicación desplegada y totalmente funcional en:

👉[****https://portafolio-samy.vercel.app/****](https://portafolio-samy.vercel.app/?utm_source=gemini)

## 🎨 Concepto y Propuesta de Valor

El concepto visual y conceptual del portafolio fusiona el ****análisis de datos de scouting futbolístico profesional**** con el ****perfilamiento técnico de ingeniería de software****:

-   ****Ficha de Jugador / Scouting Card:**** Presentación de habilidades y competencias técnicas organizadas como atributos de rendimiento (Backend, Frontend, Databases, Architecture).
-   ****Historial de Fichajes (Trayectoria):**** Línea de tiempo interactiva que detalla los roles profesionales en desarrollo backend y full-stack.
-   ****Partidos Destacados (Proyectos):**** Fichas técnicas detalladas de aplicaciones empresariales y microservicios construidos con Java, Spring Boot, Python y React.
-   ****Canal de Contacto Directo:**** Formulario optimizado para reclutadores técnicos y leads de ingeniería.

## 📊 Arquitectura del Proyecto

Fragmento de código

flowchart TD  
    subgraph Client\["🖥️ Navegador del Cliente"\]  
        UI\["Interfaz del Portafolio (UI)"\]  
        Components\["Componentes Interactivos / Scouting Cards"\]  
    end  
  
    subgraph Hosting\["☁️ Vercel Edge Network"\]  
        CDN\["Vercel Global CDN"\]  
        Build\["Build / Static Assets Pipeline"\]  
    end  
  
    subgraph UserInteraction\["👤 Visitante / Reclutador"\]  
        Visitor\["Recruiter / Tech Lead"\]  
    end  
  
    Visitor -->|Navega a portafolio-samy.vercel.app| CDN  
    CDN -->|Entrega HTML5/CSS3/JS| UI  
    UI <--> Components  
    Build --> CDN  

## ✨ Características Principales

| Sección                   | Descripción                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 🎴 Player Profile & Stats | Tarjeta de jugador personalizada con métricas técnicas avanzadas y especialización.                                |
| 🚀 Featured Showcase      | Proyectos destacados con links directos a repositorios de GitHub y desplegados.                                    |
| 📈 Technical Radar        | Desglose por niveles de dominio en Java (Spring Boot, Vaadin), Python, JavaScript, SQL/NoSQL y Cloud (OCI/Docker). |
| 📱 Responsive Design      | Adaptabilidad completa en dispositivos móviles, tablets y monitores ultrawide.                                     |
| ⚡ Performance Optimized   | Tiempos de carga ultrarrápidos y optimización SEO orientada al reclutamiento.                                      |

## 🛠️ Tecnologías Utilizadas

-   ****Frontend:**** HTML5, CSS3 (Custom Properties & Flexbox/Grid layout), JavaScript (ES6+).
-   ****Despliegue & CI/CD:**** Vercel (Continuous Deployment desde repositorio principal).
-   ****Assets & Branding:**** Gráficos vectoriales SVG, badges personalizados e insignias de stack tecnológico.

## 📁 Estructura del Repositorio

Plaintext

Portafolio-Samy/  
├── assets/  
│   ├── css/          # Estilos CSS, variables globales y temas  
│   ├── js/           # Scripts de interacción, animaciones y renderizado dinámico  
│   └── img/          # Logos, badges, gráficos vectoriales y capturas  
├── index.html        # Estructura principal y marcado semántico  
├── vercel.json       # Configuración de despliegue en Vercel  
└── README.md         # Documentación profesional  

## 🚀 Ejecución en Entorno Local

### Prerrequisitos

Un navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Pasos

1.  ****Clonar el repositorio:****  
    Bash
    
    git clone https://github.com/SamySierraDV/Portafolio-Samy.git  
    
2.  ****Acceder a la carpeta del proyecto:****  
    Bash
    
    cd Portafolio-Samy  
    
3.  ****Abrir el proyecto:****  
    Puedes abrir el archivo `index.html` directamente en tu navegador o ejecutar un servidor local mediante extensión (ej. __Live Server__ en VS Code):  
    Bash
    
    \# Alternativa con Python (si deseas un servidor local HTTP)  
    python -m http.server 8000  
    
    Accede a `http://localhost:8000` en tu navegador.

## 🤝 Contacto y Conexión Profesional

-   ****Desarrollador:**** Samy Andrés Sierra Suárez
-   ****Especialidad:**** Java Full-Stack Developer & Software Engineer
-   ****Portafolio Web:****[https://portafolio-samy.vercel.app/](https://portafolio-samy.vercel.app/?utm_source=gemini)
-   ****LinkedIn:****[https://www.linkedin.com/in/samy-sierra-dev](https://www.google.com/search?q=https://www.linkedin.com/in/samy-sierra-dev&utm_source=gemini)
