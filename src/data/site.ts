import type { LandingConfig } from "@/types/landing.types";

export const landingData = {
  brand: {
    name: "Plomada",
    tagline: "Soluciones técnicas",
    monogram: "P",
    description: "Servicio de plomería, reparaciones e instalaciones en Buenos Aires.",
    homeAriaLabel: "Plomada, ir al inicio",
  },
  contact: {
    whatsapp: {
      number: "5491164095914",
      message:
        "Hola, vi la web de Plomada y quisiera solicitar un presupuesto. Mi consulta es por:",
      label: "WhatsApp",
      headerLabel: "Contacto",
      ariaLabel: "Contactar a Plomada por WhatsApp",
    },
  },
  seo: {
    title: "Plomero en Buenos Aires | Plomería y Mantenimiento | Plomada",
    description:
      "Servicio de plomería en Buenos Aires para hogares, empresas y consorcios. Pérdidas de agua, destapaciones, instalaciones, impermeabilización y mantenimiento.",
    keywords: [
      "plomero en Buenos Aires",
      "servicio de plomería",
      "plomería a domicilio",
      "reparación de pérdidas de agua",
      "destapaciones",
      "mantenimiento integral",
    ],
    applicationName: "Plomada",
    authors: ["Plomada"],
    creator: "Plomada",
    publisher: "Plomada",
    locale: "es_AR",
    icon: "/img/herramienta-de-construccion.png",
    themeColor: "#172329",
    colorScheme: "light",
    robots: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
    openGraph: {
      title: "Plomada | Plomería y mantenimiento en Buenos Aires",
      description:
        "Reparaciones, instalaciones, destapaciones y mantenimiento con respuesta rápida, trabajo prolijo y presupuesto claro.",
    },
    twitter: {
      title: "Plomada | Plomería y mantenimiento",
      description:
        "Soluciones técnicas para hogares, empresas y consorcios en Buenos Aires.",
    },
  },
  navigation: {
    mainLabel: "Navegación principal",
    menuOpenLabel: "Abrir menú",
    menuCloseLabel: "Cerrar menú",
    main: [
      { label: "Inicio", href: "#inicio" },
      { label: "Servicios", href: "#servicios" },
      { label: "Cómo trabajamos", href: "#proceso" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Cobertura", href: "#cobertura" },
    ],
    footer: [
      { label: "Servicios", href: "#servicios" },
      { label: "Cómo trabajamos", href: "#proceso" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Cobertura", href: "#cobertura" },
    ],
  },
  hero: {
    id: "inicio",
    eyebrow: "Plomería · Reparaciones · Mantenimiento integral",
    title: "Servicio de plomería y mantenimiento en",
    highlightedTitle: "Buenos Aires",
    description:
      "Soluciones profesionales para hogares, empresas y consorcios. Resolvemos reparaciones, instalaciones, destapaciones e impermeabilización con criterio técnico, prolijidad y precios transparentes.",
    primaryCta: {
      label: "Solicitar presupuesto",
    },
    secondaryCta: {
      label: "Ver servicios",
      href: "#servicios",
    },
    guaranteesLabel: "Beneficios del servicio",
    guarantees: ["Respuesta ágil", "Presupuesto claro", "Trabajo con garantía"],
    image: {
      src: "/img/fondo/nosotros.jpg",
      alt: "Técnico de Plomada realizando una reparación de plomería",
    },
    serviceTag: {
      label: "Servicio técnico",
      title: "Profesional y prolijo",
    },
    location: {
      label: "Zona de atención",
      value: "CABA + GBA",
    },
    experience: {
      number: "01",
      lines: ["Un equipo.", "Todo resuelto."],
    },
    bottomNotes: [
      "Atención en Buenos Aires y alrededores",
      "Consultanos por disponibilidad en tu zona",
    ],
  },
  benefits: {
    headingId: "beneficios-title",
    eyebrow: "Por qué elegir Plomada",
    title: "Un servicio pensado para darte tranquilidad",
    items: [
      {
        icon: "clock",
        title: "Respuesta rápida",
        text: "Priorizamos urgencias y coordinamos según tu zona.",
      },
      {
        icon: "fileText",
        title: "Presupuesto claro",
        text: "Te explicamos el alcance antes de comenzar.",
      },
      {
        icon: "tool",
        title: "Trabajo prolijo",
        text: "Cuidamos el espacio y resolvemos con criterio técnico.",
      },
      {
        icon: "shield",
        title: "Garantía real",
        text: "Revisamos el resultado y respondemos por el trabajo.",
      },
    ],
  },
  services: {
    id: "servicios",
    headingId: "servicios-title",
    eyebrow: "Nuestros servicios",
    title: "Todo lo que tu instalación necesita",
    description:
      "Trabajos técnicos para resolver urgencias, prevenir problemas y mantener cada instalación funcionando como corresponde.",
    items: [
      {
        icon: "plumbing",
        title: "Plomería general",
        text: "Instalación y reparación de cañerías, griferías, sanitarios, válvulas, conexiones de agua y desagües.",
      },
      {
        icon: "waterDrop",
        title: "Pérdidas de agua",
        text: "Detección y solución de filtraciones, humedad, caños dañados y pérdidas visibles u ocultas.",
      },
      {
        icon: "cleaning",
        title: "Destapaciones",
        text: "Desagües, rejillas, cloacas, piletas, baños, cocinas y cañerías tapadas.",
      },
      {
        icon: "fire",
        title: "Calefones y termotanques",
        text: "Instalación, revisión y reparación de sistemas de agua caliente en viviendas y comercios.",
      },
      {
        icon: "waterDamage",
        title: "Impermeabilización",
        text: "Tratamiento de filtraciones y humedad en terrazas, techos, balcones y paredes.",
      },
      {
        icon: "apartment",
        title: "Empresas y consorcios",
        text: "Mantenimiento programado para edificios, oficinas, locales, administraciones y propiedades.",
      },
    ],
  },
  process: {
    id: "proceso",
    headingId: "proceso-title",
    eyebrow: "Cómo trabajamos",
    titleLines: ["Simple de coordinar.", "Profesional de principio a fin."],
    description:
      "Un proceso ordenado para que siempre sepas qué sigue y qué estás contratando.",
    items: [
      {
        icon: "message",
        title: "Consulta inicial",
        text: "Nos contás el problema, la ubicación y el tipo de servicio que necesitás.",
      },
      {
        icon: "search",
        title: "Diagnóstico",
        text: "Evaluamos el caso con fotos, una descripción o una visita técnica.",
      },
      {
        icon: "calendar",
        title: "Coordinación",
        text: "Definimos día y horario según la urgencia y complejidad del trabajo.",
      },
      {
        icon: "tool",
        title: "Ejecución",
        text: "Trabajamos con herramientas adecuadas y cuidando cada detalle.",
      },
      {
        icon: "checkCircle",
        title: "Revisión y garantía",
        text: "Verificamos el resultado y dejamos recomendaciones claras.",
      },
    ],
  },
  about: {
    id: "nosotros",
    headingId: "nosotros-title",
    eyebrow: "Sobre Plomada",
    title: "Oficio, criterio técnico y una forma clara de trabajar",
    quote: "“No alcanza con tapar el problema. Hay que resolverlo bien.”",
    details: ["Buenos Aires", "Hogares + Empresas"],
    paragraphs: [
      "Sabemos que una pérdida de agua, una cañería tapada o una instalación mal resuelta puede alterar por completo un hogar, una empresa o un edificio.",
      "Por eso brindamos un servicio de plomería y mantenimiento enfocado en la respuesta ágil, la transparencia y la calidad. Buscamos resolver el problema de raíz, cuidar el lugar y dejar cada trabajo correctamente terminado.",
    ],
    commitments: ["Diagnóstico honesto", "Materiales adecuados", "Comunicación directa"],
    cta: {
      label: "Solicitar servicio",
    },
  },
  audienceCoverage: {
    id: "cobertura",
    headingId: "cobertura-title",
    audience: {
      eyebrow: "A quiénes ayudamos",
      title: "Servicios para hogares, empresas y consorcios",
      description:
        "Nos adaptamos a las necesidades y tiempos de cada propiedad, desde una reparación puntual hasta un plan de mantenimiento integral.",
      items: [
        { icon: "home", label: "Propietarios de viviendas" },
        { icon: "briefcase", label: "Empresas y oficinas" },
        { icon: "grid", label: "Consorcios y edificios" },
        { icon: "map", label: "Barrios privados" },
        { icon: "key", label: "Inmobiliarias" },
        { icon: "users", label: "Administradores" },
      ],
    },
    coverage: {
      status: "Cobertura activa",
      regionCode: "BA — ARG",
      mapLabel: "CABA",
      compassLabel: "N",
      eyebrow: "Zona de cobertura",
      title: "Buenos Aires y alrededores",
      description:
        "Atendemos en CABA, GBA y zonas cercanas. Consultanos por WhatsApp para confirmar disponibilidad según ubicación, horario y tipo de servicio.",
      map: {
        position: [-34.6037, -58.3816],
        zoom: 10,
        popup: "Zona de atención Plomada",
      },
    },
  },
  finalCta: {
    id: "contacto",
    headingId: "contacto-title",
    eyebrow: "¿Tenés un problema para resolver?",
    title: "Hablemos de la solución.",
    description:
      "Contanos qué necesitás y coordinamos un servicio claro, rápido y profesional.",
    cta: {
      label: "Pedir presupuesto ahora",
    },
    microcopy:
      "Consultas por plomería, destapaciones, pérdidas, filtraciones, instalaciones y mantenimiento.",
  },
  footer: {
    navigationLabel: "Navegación del pie de página",
    copyright: "© 2026 Plomada. Todos los derechos reservados.",
    credit: "Sitio desarrollado por Pablo Daniel Chávez.",
  },
  loadingText: "Cargando Plomada…",
} satisfies LandingConfig;
