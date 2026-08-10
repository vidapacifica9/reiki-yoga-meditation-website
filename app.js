// Web3Forms Access Key for email notifications (Send submissions to mariimontiel015@gmail.com)
// Obtain your free key at https://web3forms.com/ and paste it below:
const WEB3FORMS_ACCESS_KEY = "319d82eb-a017-4717-88ec-ca5303e2e815";

// Upcoming Events Bilingual Mock Data
const upcomingEvents = [
  {
    id: "event-1",
    format: "in-person",
    formatLabel: { en: "In-Person", es: "Presencial" },
    time: { en: "7:00 PM - 9:00 PM MST", es: "7:00 PM - 9:00 PM MST" },
    location: { en: "Jardín del Silencio, Madrid", es: "Jardín del Silencio, Madrid" },
    price: { en: "45 € Energy Exchange", es: "45 € Intercambio de Energía" },
    title: { en: "Full Moon Reiki & Sound Bath", es: "Reiki de Luna Llena y Baño de Sonido" },
    desc: {
      en: "A restorative evening blending physical hands-on Reiki adjustments with high-resonance crystal sound bowl frequencies. We align the energy bodies under the full moon.",
      es: "Una tarde restaurativa que combina ajustes de Reiki presenciales con frecuencias resonantes de cuencos. Alineamos los cuerpos energéticos bajo la luna llena."
    }
  },
  {
    id: "event-2",
    format: "online",
    formatLabel: { en: "Online Zoom", es: "En línea (Zoom)" },
    time: { en: "8:00 AM - 9:15 AM MST", es: "8:00 AM - 9:15 AM MST" },
    location: { en: "Virtual Classroom via Zoom", es: "Aula virtual por Zoom" },
    price: { en: "20 € or Donation", es: "20 € o Donación" },
    title: { en: "Morning Mindfulness & Pranayama Flow", es: "Mindfulness y Flujo de Pranayama Matutino" },
    desc: {
      en: "A breath-centric (Pranayama) morning flow combining restorative postures and silent meditation. Ideal for clearing physical stress before starting your day.",
      es: "Un flujo matutino centrado en la respiración (Pranayama) que combina posturas suaves y meditación en silencio. Ideal para liberar el estrés antes de tu día."
    }
  },
  {
    id: "event-3",
    format: "online",
    formatLabel: { en: "Online Zoom", es: "En línea (Zoom)" },
    time: { en: "10:00 AM - 12:30 PM MST", es: "10:00 AM - 12:30 PM MST" },
    location: { en: "Interactive Zoom Meeting", es: "Reunión interactiva de Zoom" },
    price: { en: "35 € Registration Fee", es: "35 € Tarifa de Registro" },
    title: { en: "Chakra Alignment & Meditation Workshop", es: "Taller de Alineación de Chakras y Meditación" },
    desc: {
      en: "An intensive guided session exploring the seven primary energy centers. Includes energy scanning techniques, specialized chants, and chakra clearing meditations.",
      es: "Sesión guiada intensiva para explorar los siete centros de energía primarios. Incluye escaneo de energía, cantos sagrados y meditación de limpieza."
    }
  },
  {
    id: "event-4",
    format: "in-person",
    formatLabel: { en: "In-Person", es: "Presencial" },
    time: { en: "4:00 PM - 6:30 PM MST", es: "4:00 PM - 6:30 PM MST" },
    location: { en: "Patio Zen, Madrid", es: "Patio Zen, Madrid" },
    price: { en: "50 € All Included", es: "50 € Todo Incluido" },
    title: { en: "Gentle Restorative Yoga & Tea Ceremony", es: "Yoga Restaurativo Suave y Ceremonia de Té" },
    desc: {
      en: "A combination of deep, passive stretches utilizing soft bolsters, localized Reiki healing, and ending with an organic tea appreciation and integration circle.",
      es: "Combinación de estiramientos pasivos profundos con cojines, sanación Reiki localizada, finalizando con una ceremonia de degustación de té orgánico."
    }
  }
];

// UI Bilingual Translations dictionary
const translations = {
  en: {
    // Nav links
    lnkAbout: "About",
    mobileLnkAbout: "About",
    lnkServices: "Services",
    mobileLnkServices: "Services",
    lnkEvents: "Upcoming Events",
    mobileLnkEvents: "Upcoming Events",
    lnkGuidance: "Seek Support",
    mobileLnkGuidance: "Seek Support",
    
    // Header booking btns
    btnHeaderConsultation: "Book Consultation",
    btnDrawerConsultation: "Book Consultation",
    
    // Hero
    heroBadge: "Restore your Prana",
    heroTitle: "Reclaim Your<br><span>Inner Peace & Energy</span>",
    heroDesc: "Experience transformative Reiki energy healing, alignment-focused yoga, and deep meditation classes designed to connect your physical state with spiritual tranquility.",
    btnHeroGuidance: "Request Healing Support",
    btnHeroEvents: "Upcoming Classes",
    
    // About
    aboutBadge: "Our Purpose",
    aboutHeader: "Awakening the Healer Within",
    aboutP1: "Hello, I am <strong>Maricela Montiel</strong>, a certified Usui Reiki Master, RYT-500 Yoga Instructor, and mindfulness guide. For over a decade, I have committed my practice to helping individuals locate their internal sources of wisdom, healing, and alignment.",
    aboutP2: "Through the gentle application of Reiki (universal life force energy), steady breathwork (Pranayama), restorative yoga postures, and deep meditation, I construct tailored pathways for clients looking to manage life's transitions, reduce acute anxiety, or reconnect with spiritual stillness.",
    aboutP3: "Whether we meet online via a virtual screen or in-person inside my quiet garden sanctuary, my mission is to hold a safe space for your healing.",
    
    // Services Section
    srvBadge: "Offerings",
    servicesTitle: "Healing Modalities",
    srvSubtitle: "Discover structured approaches to alignment. We offer private sessions online or in-person.",
    
    srvReikiTitle: "Usui Reiki Healing",
    srvReikiDesc: "Channeling universal lifeforce energy to release energetic blockages, activate the parasympathetic nervous system, and stimulate deep cellular recovery.",
    srvReikiLi1: "In-person hands-on healing",
    srvReikiLi2: "Distance / Online sessions",
    srvReikiLi3: "Chakra assessment & balancing",
    
    srvYogaTitle: "Yoga & Pranayama",
    srvYogaDesc: "Gentle movement flows, alignment techniques, and breathing exercises (Pranayama) tailored to restore mobility, ease joint stiffness, and generate fluid strength.",
    srvYogaLi1: "1-on-1 private tuition",
    srvYogaLi2: "Yin & Restorative alignments",
    srvYogaLi3: "Breathwork for anxious minds",
    
    srvMedTitle: "Guided Meditation",
    srvMedDesc: "Cultivate stillness and sensory awareness through sound-assisted meditations, chakra visualizations, and modern nidra sessions designed to anchor focus.",
    srvMedLi1: "Vocal guidance & sound bowls",
    srvMedLi2: "Mindfulness habit formation",
    srvMedLi3: "Yoga Nidra sleep journeys",
    
    // Events section
    evBadge: "Join Us",
    eventsTitle: "Upcoming Events & Gatherings",
    evSubtitle: "Secure your place in our next collective healing circle. Available both in-person at our sanctuary and online globally.",
    btnFilterAll: "All Gatherings",
    btnFilterInPerson: "In-Person",
    btnFilterOnline: "Online Zoom",
    
    // Guidance Form
    guidBadge: "Request Assistance",
    guidanceHeader: "Need Help Navigating<br><span>Life's Transitions?</span>",
    guidanceP1: "Life can present us with heavy burdens, blockages, or emotional fatigue. If you are seeking relief, transition assistance, or general spiritual alignment, please reach out.",
    guidanceP2: "This form is a confidential space. Share as much or as little as you feel comfortable. Maricela reviews every submission personally to suggest customized Reiki routines, meditation frequencies, or tailored class layouts to help support your situation.",
    guidanceP3: '<em>"The first step of healing is acknowledging where we feel tender."</em>',
    
    lblGuidName: "Name",
    lblGuidEmail: "Email Address",
    lblGuidMood: "How is your state today? (Select all that apply)",
    lblMoodAnxious: "Anxious / Overwhelmed",
    lblMoodTired: "Fatigued / Low energy",
    lblMoodPain: "Physical pain / Discomfort",
    lblMoodTransition: "Life transition / Change",
    lblMoodStuck: "Feeling stuck or blocked",
    lblMoodGrowth: "Seeking spiritual growth",
    
    lblGuidStory: "What can we help you hold or heal?",
    lblGuidFocus: "Preferred Focus",
    lblGuidSetting: "Preferred Setting",
    btnSubmitGuidance: "Send Confidential Request",
    
    // Testimonials
    tstBadge: "Experiences",
    testimonialsTitle: "Healing Journeys",
    tstSubtitle: "Real experiences shared by individuals who have practiced with Maricela.",
    tstQuote1: `"Maricela has a remarkable gift. After my first Reiki session, a constant tension in my chest that I'd carried for months simply dissipated. Distance Reiki felt just as profound as in-person."`,
    tstRole1: "Client since 2024 (Reiki & Meditation)",
    tstQuote2: `"The Restorative Yoga flow on Sunday mornings is my anchor. It has restored mobility in my shoulders and taught me how to breathe through high-stress moments at work."`,
    tstRole2: "Client since 2023 (Yoga)",
    tstQuote3: `"I filled out Maricela's guidance request form when going through a difficult divorce. Her compassionate response and subsequent custom meditation sequences were a lifeline."`,
    tstRole3: "Client since 2025 (Mentorship & Sound Circles)",
    
    // Modals
    bookingModalTitle: "Book Consultation",
    bookingModalDesc: "Reserve a complimentary 15-minute alignment call with Maricela to discuss your needs.",
    lblBkName: "Name",
    lblBkEmail: "Email Address",
    lblBkDate: "Preferred Date",
    lblBkTime: "Preferred Time",
    btnSubmitBooking: "Schedule Alignment Call",
    
    eventModalTitle: "Reserve Spot",
    eventModalDesc: "Join us for the next gathering.",
    lblEvRegName: "Name",
    lblEvRegEmail: "Email Address",
    lblEvRegTickets: "Attendance Count",
    lblEvRegOption: "Modality",
    btnSubmitEventReg: "Confirm Event Registration",
    
    // Dynamic JS assignments
    reserveBtnText: "Reserve Spot",
    bookBtnText: "Book Session",
    modalOnlineBookingDesc: "Request a day & time below to schedule a direct session. Maricela will reach out within 24 hours to confirm.",
    modalOnlineBookingTitle: "Book a {modality} Session",
    modalOnlineBookingSubmit: "Request Session Booking",
    
    // Feedback alerts
    alertRequiredFields: "Please fill in all required fields.",
    toastBookingSuccess: "Peace and blessings, {name}! Your slot request for \"{modality}\" has been sent.",
    toastEventSuccess: "Spot confirmed! Welcome, {name}. Check your email for event parameters.",
    toastGuidanceSuccess: "Thank you for sharing, {name}. Maricela will review your request with utmost care and respond via email shortly."
  },
  es: {
    // Nav links
    lnkAbout: "Sobre mí",
    mobileLnkAbout: "Sobre mí",
    lnkServices: "Servicios",
    mobileLnkServices: "Servicios",
    lnkEvents: "Próximos Eventos",
    mobileLnkEvents: "Próximos Eventos",
    lnkGuidance: "Solicitar Apoyo",
    mobileLnkGuidance: "Solicitar Apoyo",
    
    // Header booking btns
    btnHeaderConsultation: "Reservar Consulta",
    btnDrawerConsultation: "Reservar Consulta",
    
    // Hero
    heroBadge: "Restaura tu Prana",
    heroTitle: "Recupera tu<br><span>Paz Interior y Energía</span>",
    heroDesc: "Experimenta la sanación de Reiki, yoga restaurativo y meditaciones guiadas diseñadas para conectar tu bienestar físico con la tranquilidad espiritual.",
    btnHeroGuidance: "Solicitar Apoyo de Sanación",
    btnHeroEvents: "Próximas Clases",
    
    // About
    aboutBadge: "Nuestro Propósito",
    aboutHeader: "Despertar el Sanador Interior",
    aboutP1: "Hola, soy <strong>Maricela Montiel</strong>, maestra certificada de Reiki Usui, instructora de Yoga RYT-500 y guía de mindfulness. Por más de una década, he dedicado mi práctica a ayudar a las personas a encontrar sus fuentes internas de sabiduría, sanación y alineación.",
    aboutP2: "A través de la aplicación suave de Reiki (energía vital universal), respiración consciente (Pranayama), posturas de yoga restaurativo y meditación profunda, construyo caminos personalizados para quienes buscan gestionar transiciones de vida, aliviar la ansiedad o reconectar con la quietud espiritual.",
    aboutP3: "Ya sea que nos reunamos en línea a través de una pantalla virtual o en persona dentro de mi tranquilo santuario de jardín, mi misión es sostener un espacio seguro para tu sanación.",
    
    // Services Section
    srvBadge: "Servicios",
    servicesTitle: "Modalidades de Sanación",
    srvSubtitle: "Descubre enfoques estructurados para tu bienestar. Ofrecemos sesiones privadas presenciales o en línea.",
    
    srvReikiTitle: "Sanación Reiki Usui",
    srvReikiDesc: "Canalización de energía vital universal para liberar bloqueos, activar el sistema nervioso parasimpático y estimular una profunda recuperación celular.",
    srvReikiLi1: "Sanación presencial directa",
    srvReikiLi2: "Sesiones a distancia / en línea",
    srvReikiLi3: "Evaluación y alineación de chakras",
    
    srvYogaTitle: "Yoga y Pranayama",
    srvYogaDesc: "Flujos de movimiento suaves, técnicas de alineación y respiración (Pranayama) para restaurar la movilidad, aliviar la rigidez y generar fuerza fluida.",
    srvYogaLi1: "Clases particulares 1 a 1",
    srvYogaLi2: "Alineaciones de Yin y Yoga Restaurativo",
    srvYogaLi3: "Respiración consciente para calmar la mente",
    
    srvMedTitle: "Meditación Guiada",
    srvMedDesc: "Cultiva la quietud y la conciencia sensorial a través de meditaciones con sonido, visualizaciones de chakras y sesiones de yoga nidra diseñadas para enfocar la mente.",
    srvMedLi1: "Guía vocal y cuencos tibetanos",
    srvMedLi2: "Formación de hábitos de mindfulness",
    srvMedLi3: "Viajes de sueño Yoga Nidra",
    
    // Events section
    evBadge: "Acompáñanos",
    eventsTitle: "Próximos Eventos y Encuentros",
    evSubtitle: "Asegura tu lugar en nuestro próximo círculo de sanación colectiva. Disponible presencial en nuestro santuario y en línea.",
    btnFilterAll: "Todos los Encuentros",
    btnFilterInPerson: "Presencial",
    btnFilterOnline: "En Línea (Zoom)",
    
    // Guidance Form
    guidBadge: "Solicitar Apoyo",
    guidanceHeader: "¿Necesitas Ayuda para Navegar<br><span>las Transiciones de la Vida?</span>",
    guidanceP1: "La vida puede presentarnos cargas pesadas, bloqueos o fatiga emocional. Si buscas alivio, asistencia en transiciones o una alineación espiritual general, por favor escríbenos.",
    guidanceP2: "Este formulario es un espacio confidencial. Comparte tanto o tan poco como te sientas cómodo/a. Maricela revisa cada solicitud personalmente para sugerir rutinas de Reiki personalizadas, frecuencias de meditación o clases adaptadas para apoyarte.",
    guidanceP3: '<em>"El primer paso de la sanación es reconocer dónde nos sentimos vulnerables."</em>',
    
    lblGuidName: "Nombre",
    lblGuidEmail: "Correo Electrónico",
    lblGuidMood: "¿Cómo te sientes hoy? (Selecciona todo lo que aplique)",
    lblMoodAnxious: "Ansiedad / Estrés",
    lblMoodTired: "Cansancio / Baja energía",
    lblMoodPain: "Dolor físico / Malestar",
    lblMoodTransition: "Transición de vida / Cambio",
    lblMoodStuck: "Sensación de estancamiento / Bloqueo",
    lblMoodGrowth: "Crecimiento espiritual",
    
    lblGuidStory: "¿Qué podemos ayudarte a sostener o sanar?",
    lblGuidFocus: "Enfoque Preferido",
    lblGuidSetting: "Modalidad Preferida",
    btnSubmitGuidance: "Enviar Solicitud Confidencial",
    
    // Testimonials
    tstBadge: "Experiencias",
    testimonialsTitle: "Caminos de Sanación",
    tstSubtitle: "Experiencias reales compartidas por personas que han practicado con Maricela.",
    tstQuote1: `"Maricela tiene un don extraordinario. Después de mi primera sesión de Reiki, una tensión constante que llevaba meses en mi pecho simplemente desapareció. El Reiki a distancia fue igual de profundo."`,
    tstRole1: "Cliente desde 2024 (Reiki y Meditación)",
    tstQuote2: `"El flujo de Yoga Restaurativo de los domingos por la mañana es mi ancla. Ha restaurado la movilidad de mis hombros y me ha enseñado a respirar en momentos de gran estrés laboral."`,
    tstRole2: "Cliente desde 2023 (Yoga)",
    tstQuote3: `"Llené el formulario de solicitud de guía de Maricela cuando pasaba por un divorcio difícil. Su respuesta compasiva y las subsecuentes secuencias de meditación personalizadas fueron un salvavidas."`,
    tstRole3: "Cliente desde 2025 (Mentoría y Círculos de Sonido)",
    
    // Modals
    bookingModalTitle: "Reservar Consulta",
    bookingModalDesc: "Reserva una videollamada de alineación gratuita de 15 minutos con Maricela para conversar sobre tus necesidades.",
    lblBkName: "Nombre",
    lblBkEmail: "Correo Electrónico",
    lblBkDate: "Fecha de Preferencia",
    lblBkTime: "Hora de Preferencia",
    btnSubmitBooking: "Programar Llamada de Alineación",
    
    eventModalTitle: "Reservar Plaza",
    eventModalDesc: "Únete a nosotros en nuestro próximo encuentro.",
    lblEvRegName: "Nombre",
    lblEvRegEmail: "Correo Electrónico",
    lblEvRegTickets: "Número de Asistentes",
    lblEvRegOption: "Tipo de Entrada",
    btnSubmitEventReg: "Confirmar Registro al Evento",
    
    // Dynamic JS assignments
    reserveBtnText: "Reservar Plaza",
    bookBtnText: "Reservar Sesión",
    modalOnlineBookingDesc: "Elige fecha y hora. Maricela se pondrá en contacto contigo en un plazo de 24 horas para confirmar.",
    modalOnlineBookingTitle: "Reservar Sesión de {modality}",
    modalOnlineBookingSubmit: "Solicitar Reserva de Sesión",
    
    // Feedback alerts
    alertRequiredFields: "Por favor complete todos los campos obligatorios.",
    toastBookingSuccess: "¡Paz y bendiciones, {name}! Se ha enviado tu solicitud para la sesión de \"{modality}\".",
    toastEventSuccess: "¡Plaza confirmada! Bienvenido/a, {name}. Revisa tu correo para las instrucciones del evento.",
    toastGuidanceSuccess: "Gracias por compartir, {name}. Maricela revisará tu solicitud con el mayor cuidado y te responderá por correo pronto."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const navbar = document.getElementById("navbar");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const langToggleBtn = document.getElementById("langToggleBtn");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  
  // Modals
  const bookingModalOverlay = document.getElementById("bookingModalOverlay");
  const btnCloseBookingModal = document.getElementById("btnCloseBookingModal");
  const btnHeaderConsultation = document.getElementById("btnHeaderConsultation");
  const btnDrawerConsultation = document.getElementById("btnDrawerConsultation");
  const bookingForm = document.getElementById("bookingForm");
  
  const eventModalOverlay = document.getElementById("eventModalOverlay");
  const btnCloseEventModal = document.getElementById("btnCloseEventModal");
  const eventRegForm = document.getElementById("eventRegForm");
  
  // Toast
  const successToast = document.getElementById("successToast");
  const toastMsg = document.getElementById("toastMsg");
  
  // Forms
  const guidanceForm = document.getElementById("guidanceForm");
  
  // Dynamic grids & list items
  const eventsGrid = document.getElementById("eventsGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  
  // Testimonials
  const testimonialTrack = document.getElementById("testimonialTrack");
  const sliderDots = document.querySelectorAll(".slider-dot");

  // State
  let currentLang = localStorage.getItem("zen-lang") || "en";
  let activeFilter = "all";

  // ==========================================
  // 1. LANGUAGE SWITCHING LOGIC
  // ==========================================
  const applyLanguage = (lang) => {
    // Traverse translations and replace text
    const langDict = translations[lang];
    
    // Update elements that map exactly to IDs
    Object.keys(langDict).forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        // Use innerHTML if text contains markup (like spans, linebreaks, strong tags)
        if (el.tagName === "H1" || el.tagName === "H2" || el.id === "aboutP1" || el.id === "aboutP2" || el.id === "aboutP3" || el.id === "guidanceP3") {
          el.innerHTML = langDict[id];
        } else {
          el.textContent = langDict[id];
        }
      }
    });

    // Update select dropdown texts in guidance form
    const guidModality = document.getElementById("guidModality");
    if (guidModality) {
      guidModality.options[0].text = lang === "en" ? "Reiki Energy Flow" : "Flujo de Energía Reiki";
      guidModality.options[1].text = lang === "en" ? "Yoga & Breathwork" : "Yoga y Respiración";
      guidModality.options[2].text = lang === "en" ? "Guided Meditation" : "Meditación Guiada";
      guidModality.options[3].text = lang === "en" ? "Intuitive Combination" : "Combinación Intuitiva";
    }

    const guidSetting = document.getElementById("guidSetting");
    if (guidSetting) {
      guidSetting.options[0].text = lang === "en" ? "Online Zoom" : "Por Zoom (En línea)";
      guidSetting.options[1].text = lang === "en" ? "In-Person Sanctuary" : "Presencial";
      guidSetting.options[2].text = lang === "en" ? "Let Aria recommend" : "Que Maricela recomiende";
    }

    // Update form placeholders
    const guidStory = document.getElementById("guidStory");
    if (guidStory) {
      guidStory.placeholder = langDict.guidStoryPlaceholder;
    }
    
    const guidName = document.getElementById("guidName");
    if (guidName) {
      guidName.placeholder = lang === "en" ? "Your name" : "Tu nombre";
    }
    const guidEmail = document.getElementById("guidEmail");
    if (guidEmail) {
      guidEmail.placeholder = lang === "en" ? "Your email address" : "Tu correo electrónico";
    }
    const bkName = document.getElementById("bkName");
    if (bkName) {
      bkName.placeholder = lang === "en" ? "Your name" : "Tu nombre";
    }
    const bkEmail = document.getElementById("bkEmail");
    if (bkEmail) {
      bkEmail.placeholder = lang === "en" ? "Your email address" : "Tu correo electrónico";
    }
    const evRegName = document.getElementById("evRegName");
    if (evRegName) {
      evRegName.placeholder = lang === "en" ? "Your name" : "Tu nombre";
    }
    const evRegEmail = document.getElementById("evRegEmail");
    if (evRegEmail) {
      evRegEmail.placeholder = lang === "en" ? "Your email address" : "Tu correo electrónico";
    }

    // Update booking buttons inside cards
    const cardBookingButtons = document.querySelectorAll(".btnOpenBooking");
    cardBookingButtons.forEach(btn => {
      // Keep SVG arrow intact
      btn.innerHTML = `${langDict.bookBtnText} <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>`;
    });

    // Update language toggle button label (Shows the target language we can toggle to)
    langToggleBtn.textContent = lang === "en" ? "ES" : "EN";
    
    // Rerender events with new language translations
    renderEvents(activeFilter, lang);
  };

  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    localStorage.setItem("zen-lang", currentLang);
    applyLanguage(currentLang);
  });

  // ==========================================
  // 2. ZEN THEME SWITCHER
  // ==========================================
  const savedTheme = localStorage.getItem("zen-theme") || "solar";
  document.body.setAttribute("data-theme", savedTheme);
  
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const nextTheme = currentTheme === "solar" ? "lunar" : "solar";
    document.body.setAttribute("data-theme", nextTheme);
    localStorage.setItem("zen-theme", nextTheme);
    
    // Animate theme switch aura blobs
    const aura1 = document.getElementById("auraBlob1");
    const aura2 = document.getElementById("auraBlob2");
    if(aura1 && aura2) {
      aura1.style.transform = `scale(1.2) rotate(${nextTheme === "lunar" ? "180deg" : "0deg"})`;
      aura2.style.transform = `scale(0.8) rotate(${nextTheme === "lunar" ? "-180deg" : "0deg"})`;
    }
  });

  // ==========================================
  // 3. STICKY / BLURRED NAVBAR
  // ==========================================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ==========================================
  // 4. MOBILE MENU NAV DRAWER
  // ==========================================
  const toggleMobileNav = () => {
    mobileNavOverlay.classList.toggle("open");
  };

  mobileMenuToggle.addEventListener("click", toggleMobileNav);
  
  mobileNavOverlay.addEventListener("click", (e) => {
    if (e.target === mobileNavOverlay) {
      toggleMobileNav();
    }
  });

  // Close drawer when link clicked
  const drawerLinks = document.querySelectorAll(".mobile-nav-links a");
  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNavOverlay.classList.remove("open");
    });
  });

  // ==========================================
  // 5. EVENTS FILTERING & REGISTER MODAL
  // ==========================================
  const renderEvents = (filter = "all", lang = currentLang) => {
    eventsGrid.innerHTML = "";
    activeFilter = filter;
    
    const filtered = upcomingEvents.filter(ev => {
      if (filter === "all") return true;
      return ev.format === filter;
    });

    const langDict = translations[lang];

    if (filtered.length === 0) {
      eventsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">${lang === "en" ? "No events found matching this format." : "No se encontraron encuentros en este formato."}</p>`;
      return;
    }

    filtered.forEach(ev => {
      const card = document.createElement("div");
      card.className = `event-card reveal`;
      card.innerHTML = `
        <div class="event-header">
          <div class="event-date-badge">
            <div class="event-date-day">${ev.dateDay}</div>
            <div class="event-date-month">${ev.dateMonth}</div>
          </div>
          <span class="event-format ${ev.format}">${ev.formatLabel[lang]}</span>
        </div>
        <div class="event-body">
          <h3>${ev.title[lang]}</h3>
          <p>${ev.desc[lang]}</p>
          <div class="event-meta">
            <div class="event-meta-item">
              <svg viewBox="0 0 24 24"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/></svg>
              <span>${ev.time[lang]}</span>
            </div>
            <div class="event-meta-item">
              <svg viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/></svg>
              <span>${ev.location[lang]}</span>
            </div>
            <div class="event-meta-item" style="color: var(--accent-primary); font-weight: 500;">
              <svg viewBox="0 0 24 24" style="fill: var(--accent-primary);"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17H13V15H11V17M11,13H13V7H11V13Z"/></svg>
              <span>${ev.price[lang]}</span>
            </div>
          </div>
        </div>
        <div class="event-footer">
          <button class="btn btn-secondary btn-reserve" data-id="${ev.id}" data-title-en="${ev.title.en}" data-title-es="${ev.title.es}">${langDict.reserveBtnText}</button>
        </div>
      `;
      eventsGrid.appendChild(card);
    });

    setupScrollReveals();
  };

  // Event Filters Click Handlers
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderEvents(btn.getAttribute("data-filter"), currentLang);
    });
  });

  // Listen for dynamic Reserve button clicks
  eventsGrid.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("btn-reserve")) {
      const eventTitle = currentLang === "en" ? e.target.getAttribute("data-title-en") : e.target.getAttribute("data-title-es");
      const eventId = e.target.getAttribute("data-id");
      const langDict = translations[currentLang];
      
      document.getElementById("eventModalTitle").textContent = langDict.eventModalTitle;
      
      if (currentLang === "en") {
        document.getElementById("eventModalDesc").innerHTML = `Register to join Maricela for <strong>${eventTitle}</strong>. We will send coordinates and prep instructions to your email.`;
      } else {
        document.getElementById("eventModalDesc").innerHTML = `Regístrate para unirte a Maricela en <strong>${eventTitle}</strong>. Enviaremos las indicaciones y preparación a tu correo.`;
      }
      
      document.getElementById("eventTargetId").value = eventId;
      eventModalOverlay.classList.add("open");
    }
  });

  // ==========================================
  // 6. TOAST NOTIFICATIONS UTILITY
  // ==========================================
  const showToast = (message) => {
    toastMsg.textContent = message;
    successToast.classList.add("show");
    
    setTimeout(() => {
      successToast.classList.remove("show");
    }, 4500);
  };

  // ==========================================
  // 7. BOOKING & INQUIRY MODAL HANDLERS
  // ==========================================
  const openBookingModal = (modality = "General Alignment Call") => {
    document.getElementById("bkModality").value = modality;
    const langDict = translations[currentLang];
    
    if (modality !== "General Alignment Call") {
      document.getElementById("bookingModalTitle").textContent = langDict.modalOnlineBookingTitle.replace("{modality}", modality);
      document.getElementById("bookingModalDesc").textContent = langDict.modalOnlineBookingDesc;
      document.getElementById("btnSubmitBooking").textContent = langDict.modalOnlineBookingSubmit;
    } else {
      document.getElementById("bookingModalTitle").textContent = langDict.bookingModalTitle;
      document.getElementById("bookingModalDesc").textContent = langDict.bookingModalDesc;
      document.getElementById("btnSubmitBooking").textContent = langDict.btnSubmitBooking;
    }
    bookingModalOverlay.classList.add("open");
  };

  const closeBookingModal = () => {
    bookingModalOverlay.classList.remove("open");
    bookingForm.reset();
  };

  btnHeaderConsultation.addEventListener("click", () => openBookingModal("General Alignment Call"));
  btnDrawerConsultation.addEventListener("click", () => {
    mobileNavOverlay.classList.remove("open");
    openBookingModal("General Alignment Call");
  });
  
  // Booking buttons inside service cards
  document.body.addEventListener("click", (e) => {
    const serviceBtn = e.target.closest(".btnOpenBooking");
    if (serviceBtn) {
      const modality = serviceBtn.getAttribute("data-modality");
      openBookingModal(modality);
    }
  });

  btnCloseBookingModal.addEventListener("click", closeBookingModal);
  bookingModalOverlay.addEventListener("click", (e) => {
    if (e.target === bookingModalOverlay) closeBookingModal();
  });

  // Web3Forms API Email Sender Helper
  const sendEmailNotification = (formData, subjectLine, callback) => {
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      console.warn("Web3Forms Access Key is not configured. Email notification skipped.");
      callback(true);
      return;
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: subjectLine,
      from_name: "Maricela Montiel | Energía y Armonía",
      ...formData
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        callback(true);
      } else {
        console.error("Web3Forms error:", data.message);
        callback(false);
      }
    })
    .catch(err => {
      console.error("Web3Forms request failed:", err);
      callback(true); // Fallback to let UI proceed even on network blockages
    });
  };

  // Handle Booking Form Submit
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("bkName").value.trim();
    const email = document.getElementById("bkEmail").value.trim();
    const date = document.getElementById("bkDate").value;
    const time = document.getElementById("bkTime").value;
    const selectedModality = document.getElementById("bkModality").value;
    const langDict = translations[currentLang];
    
    if (!name || !email || !date) {
      alert(langDict.alertRequiredFields);
      return;
    }
    
    const btnSubmit = bookingForm.querySelector('button[type="submit"]');
    const originalBtnText = btnSubmit.textContent;
    btnSubmit.textContent = currentLang === "en" ? "Sending..." : "Enviando...";
    btnSubmit.disabled = true;

    const emailPayload = {
      "Form Type": "Consultation Booking Request",
      "Client Name": name,
      "Client Email": email,
      "Preferred Date": date,
      "Preferred Time": time,
      "Requested Modality": selectedModality
    };

    sendEmailNotification(emailPayload, `New Consultation Booking: ${name} (${selectedModality})`, (success) => {
      btnSubmit.disabled = false;
      btnSubmit.textContent = originalBtnText;
      
      closeBookingModal();
      const msg = langDict.toastBookingSuccess.replace("{name}", name).replace("{modality}", selectedModality);
      showToast(msg);
    });
  });

  // ==========================================
  // 8. EVENT REGISTRATION FORM HANDLERS
  // ==========================================
  const closeEventModal = () => {
    eventModalOverlay.classList.remove("open");
    eventRegForm.reset();
  };

  btnCloseEventModal.addEventListener("click", closeEventModal);
  eventModalOverlay.addEventListener("click", (e) => {
    if (e.target === eventModalOverlay) closeEventModal();
  });

  eventRegForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("evRegName").value.trim();
    const email = document.getElementById("evRegEmail").value.trim();
    const tickets = document.getElementById("evRegTickets").value;
    const modalityOption = document.getElementById("evRegOption").value;
    const eventId = document.getElementById("eventTargetId").value;
    const langDict = translations[currentLang];
    
    if (!name || !email) {
      alert(langDict.alertRequiredFields);
      return;
    }

    const eventObj = upcomingEvents.find(ev => ev.id === eventId);
    const eventTitle = eventObj ? eventObj.title[currentLang] : "Gathering";
    
    const btnSubmit = eventRegForm.querySelector('button[type="submit"]');
    const originalBtnText = btnSubmit.textContent;
    btnSubmit.textContent = currentLang === "en" ? "Sending..." : "Enviando...";
    btnSubmit.disabled = true;

    const emailPayload = {
      "Form Type": "Event Registration",
      "Client Name": name,
      "Client Email": email,
      "Event Title": eventTitle,
      "Tickets Requested": tickets,
      "Ticket Tier": modalityOption
    };

    sendEmailNotification(emailPayload, `Event Registration: ${name} for ${eventTitle}`, (success) => {
      btnSubmit.disabled = false;
      btnSubmit.textContent = originalBtnText;
      
      closeEventModal();
      const msg = langDict.toastEventSuccess.replace("{name}", name);
      showToast(msg);
    });
  });

  // ==========================================
  // 9. GUIDANCE REQUEST FORM SUBMISSION
  // ==========================================
  guidanceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("guidName").value.trim();
    const email = document.getElementById("guidEmail").value.trim();
    const story = document.getElementById("guidStory").value.trim();
    const focusModality = document.getElementById("guidModality").value;
    const preferredSetting = document.getElementById("guidSetting").value;
    const langDict = translations[currentLang];
    
    if (!name || !email || !story) {
      alert(langDict.alertRequiredFields);
      return;
    }

    // Collect selected state checkboxes
    const checkedBoxes = document.querySelectorAll("input[name='state']:checked");
    const states = Array.from(checkedBoxes).map(cb => {
      const pillSpan = cb.closest(".mood-pill").querySelector("span");
      return pillSpan ? pillSpan.textContent : cb.value;
    }).join(", ");
    
    const btnSubmit = guidanceForm.querySelector('button[type="submit"]');
    const originalBtnText = btnSubmit.textContent;
    btnSubmit.textContent = currentLang === "en" ? "Sending..." : "Enviando...";
    btnSubmit.disabled = true;

    const emailPayload = {
      "Form Type": "Confidential Healing Guidance Request",
      "Client Name": name,
      "Client Email": email,
      "Current State/Feelings": states || "None selected",
      "Client Message/Story": story,
      "Preferred Focus": focusModality,
      "Preferred Setting": preferredSetting
    };

    sendEmailNotification(emailPayload, `Confidential Support Request: ${name}`, (success) => {
      btnSubmit.disabled = false;
      btnSubmit.textContent = originalBtnText;

      guidanceForm.reset();
      const msg = langDict.toastGuidanceSuccess.replace("{name}", name);
      showToast(msg);
    });
  });

  // ==========================================
  // 10. CLIENT TESTIMONIALS SLIDER
  // ==========================================
  let currentSlide = 0;
  const slideCount = sliderDots.length;

  const goToSlide = (idx) => {
    currentSlide = idx;
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    sliderDots.forEach(dot => dot.classList.remove("active"));
    sliderDots[idx].classList.add("active");
  };

  sliderDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"), 10);
      goToSlide(index);
    });
  });

  // Auto-advance testimonials every 8 seconds
  setInterval(() => {
    let next = currentSlide + 1;
    if (next >= slideCount) next = 0;
    goToSlide(next);
  }, 8000);

  // ==========================================
  // 11. SCROLL REVEAL (INTERSECTION OBSERVER)
  // ==========================================
  function setupScrollReveals() {
    const revealElements = document.querySelectorAll(".reveal");
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      });
      
      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add("revealed"));
    }
  }

  // Set initial language from storage/default
  applyLanguage(currentLang);
});
