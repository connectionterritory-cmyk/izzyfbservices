/**
 * IZZY Financial & Business Services — script.js
 * Features: sticky header, mobile nav, scroll reveal, smooth scroll, i18n ES/EN
 */

(function () {
  'use strict';

  const LEADS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxSbryrhzhA58y5RoyY6bXXnagUE8WVFF5z0UDWDgMs7GXGrtQNvNXos-WoXzGJoKeNfQ/exec';
  const DEFAULT_LANG = 'es';

  const t = {
    es: {
      navServicios: 'Orientacion',
      navModelo: 'Vida',
      navAgentes: 'Career',
      navSistema: 'Retiro',
      navDebt: 'Mediator Debt Solutions · Alivio de deuda',
      navDebtWa: 'Hola, quiero informacion sobre alivio de deuda (Mediator Debt Solutions).',
      navContacto: 'Contactanos',
      heroBadge: 'Orientacion financiera bilingue para la comunidad hispana',
      heroTitle: 'Todo lo que necesitas para<br><span class="gradient-text">proteger tu familia y planificar tu futuro.</span>',
      heroSubtitle: 'Te ayudamos a entender tus opciones en seguro de vida, salud, Medicare, retiro y educacion financiera con una conversacion clara, humana y bilingue.',
      intentAria: 'Elige tu prioridad',
      intentCliente: 'Proteccion familiar',
      intentAgente: 'Salud y Medicare',
      intentOficina: 'Retiro',
      heroCareerLink: '¿Buscas una oportunidad profesional? Explorar Career',
      trust: ['Atencion bilingue', 'California & Florida', 'Consulta sin costo', 'Orientacion personalizada', 'Proteccion a largo plazo'],
      stats: ['Servicios', 'Estados', 'Equipo'],
      visualEyebrow: 'Atencion real, imagen profesional',
      visualTitle: 'Una experiencia <span class="gradient-text">moderna y confiable</span>',
      visualDesc: 'Combinamos asesoria humana, estructura clara y acompanamiento bilingue para familias que quieren tomar mejores decisiones financieras.',
      visualCards: {
        titles: ['Asesoria clara', 'Planificacion estructurada', 'Seguimiento constante'],
        descs: [
          'Orientacion simple para proteger ingresos, familia y patrimonio.',
          'Recomendaciones claras para vida, salud, Medicare y retiro.',
          'Revision anual, ajustes y acompanamiento para cada etapa de vida.'
        ]
      },
      categories: ['Seguro de vida', 'Salud y Medicare', 'Career', 'Retiro y anualidades', 'Educacion financiera'],
      caminos: {
        eyebrow: 'Elige tu prioridad',
        title: 'Soluciones para <span class="gradient-text">proteger hoy y planificar manana</span>',
        desc: 'IZZY conecta orientacion, comparacion de opciones y acompanamiento bilingue para que cada familia avance con mas confianza.',
        labels: ['Proteccion familiar', 'Salud y Medicare', 'Retiro'],
        cardTitles: [
          'Cuida a tu familia con una base solida.',
          'Encuentra cobertura con mas claridad.',
          'Construye ingresos y tranquilidad a largo plazo.'
        ],
        cardDescs: [
          'Explora opciones de seguro de vida, proteccion de ingresos y estrategias para cuidar a quienes mas quieres.',
          'Te ayudamos a entender planes de salud, elegibilidad y opciones Medicare sin complicaciones innecesarias.',
          'Revisa estrategias de retiro, acumulacion y preservacion para tomar decisiones con mas vision y menos incertidumbre.'
        ],
        links: ['Quiero proteccion →', 'Ver opciones de salud →', 'Planificar mi retiro →']
      },
      servicios: {
        eyebrow: 'Servicios financieros',
        title: 'Servicios que ayudan a <span class="gradient-text">proteger, organizar y crecer</span>',
        desc: 'Nos enfocamos en las areas financieras que mas impacto tienen en la tranquilidad de una familia: proteccion, salud, retiro y educacion financiera.',
        pills: ['Atencion bilingue', 'California & Florida', 'Consulta inicial sin costo'],
        link: 'Consulta gratis →',
        titles: [
          'Vida',
          'Salud y Medicare',
          'Retiro',
          'Educacion financiera'
        ],
        descs: [
          'Seguro de termino, vida entera e IUL para proteger a tu familia, crear legado y reducir el impacto de imprevistos.',
          'Comparamos coberturas medicas, elegibilidad y periodos de inscripcion para que elijas con claridad en cualquier etapa.',
          'Estrategias de acumulacion, anualidades e ingresos garantizados para un retiro con metas claras y menos incertidumbre.',
          'Explicamos conceptos, escenarios y decisiones para que avances con confianza y no solo con urgencia.'
        ],
        secondaryLabel: 'Tambien ofrecemos',
        secondaryItems: ['Proteccion de ingresos', 'Medicare', 'Anualidades', 'Revision financiera anual']
      },
      modelo: {
        eyebrow: 'Retiro y patrimonio',
        title: 'Construye un retiro con <span class="gradient-text">claridad y disciplina.</span>',
        desc: 'La meta no es solo ahorrar. Es crear una estrategia que combine proteccion, acumulacion, ingresos futuros y revisiones periodicas.'
      },
      agentes: {
        eyebrow: 'Career',
        title: 'Una oportunidad con <span class="gradient-text">ruta de crecimiento clara</span>',
        desc: 'Tambien puedes explorar el camino profesional de IZZY como oportunidad complementaria dentro del ecosistema, desde el inicio hasta desarrollo de liderazgo y construccion de agencia.',
        benefitTitles: ['Ruta paso a paso', 'Vision de crecimiento', 'Presentacion lista', 'Mensaje consistente', 'Uso comercial', 'Puente con IZZY'],
        benefitDescs: [
          'La presentacion explica la progresion desde Trainee hasta Marketing Director de forma simple.',
          'Muestra produccion, desarrollo de equipo y construccion de agencia dentro de una misma ruta.',
          'El deck interactivo ya esta preparado para usar en Zoom o compartir como recurso visual.',
          'Ayuda a explicar la oportunidad con una narrativa mas ordenada y profesional.',
          'Sirve para conversaciones iniciales, seguimiento y presentaciones uno a uno o grupales.',
          'Career queda conectado con la marca principal como oportunidad secundaria, sin quitar el foco financiero del home.'
        ],
        ctas: ['Quiero informacion de Career', 'Abrir presentacion']
      },
      sistema: {
        eyebrow: 'Sistema IZZY',
        title: 'Infraestructura para <span class="gradient-text">crecer con orden</span>',
        desc: 'La diferencia esta en el seguimiento. IZZY combina educacion, proceso y acompanamiento para convertir una consulta en una estrategia de largo plazo.',
        itemTitles: ['Diagnostico inicial', 'WhatsApp follow-up', 'Educacion continua', 'Revision anual', 'Explicacion bilingue', 'Proceso claro'],
        itemDescs: [
          'Empezamos entendiendo objetivo, presupuesto, etapa de vida y preocupaciones reales.',
          'Mensajes claros para resolver dudas y mantener continuidad despues de cada conversacion.',
          'Contenido y conversaciones enfocadas en vida, salud, Medicare y retiro.',
          'Revisiones periodicas para adaptar tu proteccion a cambios familiares y financieros.',
          'Traducimos procesos y opciones a un lenguaje simple que genera confianza real.',
          'Una experiencia consistente desde la primera pregunta hasta la revision anual.'
        ]
      },
      porque: {
        eyebrow: 'Nuestra diferencia',
        title: '¿Por que <span class="gradient-text">IZZY</span>?',
        desc: 'Porque combinamos confianza comunitaria con claridad, seguimiento y una experiencia financiera mas humana.',
        itemTitles: ['100% Bilingue', 'Orientacion objetiva', 'Proceso ordenado', 'Enfocados en la comunidad'],
        itemDescs: [
          'Atencion completa en espanol e ingles. Explicamos detalles sin barreras de idioma.',
          'Te ayudamos a entender opciones y comparar con una conversacion centrada en tu necesidad real.',
          'No improvisamos el seguimiento. Organizamos cada paso para que sepas que sigue.',
          'Servimos principalmente a familias latinas con empatia, paciencia y respeto.'
        ]
      },
      resultados: {
        eyebrow: 'Base de confianza',
        title: 'Estamos en fase de <span class="gradient-text">lanzamiento</span>',
        desc: 'Todavia no publicamos metricas numericas. Preferimos transparencia total mientras construimos resultados medibles.',
        metricsStrong: ['Atencion bilingue', 'Cobertura activa', 'Consulta inicial', 'Seguimiento'],
        metricsDesc: ['Espanol e ingles', 'California y Florida', 'Orientacion clara por WhatsApp o llamada', 'Proceso paso a paso y revision anual'],
        testimonialText: [
          'Familia que quiere proteger ingresos y seres queridos con una explicacion simple y sin presion.',
          'Persona que necesita entender Medicare o cobertura medica y agradece una guia clara en su idioma.',
          'Cliente que busca ordenar su retiro con una estrategia mas consciente, sostenible y revisable.'
        ],
        testimonialRole: ['Caso tipo · Vida', 'Caso tipo · Salud', 'Caso tipo · Retiro']
      },
      ctaFinal: {
        title: 'Empieza por el camino correcto.',
        desc: 'Ya sea que quieras proteger a tu familia, revisar tu salud o planificar tu retiro, IZZY te recibe con una conversacion clara. Y si tambien quieres explorar la oportunidad profesional, Career sigue disponible.',
        cards: ['Seguro de vida', 'Salud y Medicare', 'Retiro'],
        cardSubs: ['Proteccion familiar y legado', 'Cobertura medica con claridad', 'Estrategia, acumulacion e ingresos'],
        careerInlineCopy: '¿Tambien quieres conocer la oportunidad? Mira la presentacion interactiva de Career.',
        careerInlineLink: 'Abrir Career'
      },
      footer: {
        tagline: 'Protegiendo familias, construyendo futuros.',
        plataforma: 'Plataforma',
        serviciosClave: 'Servicios clave',
        contacto: 'Contacto',
        links1: ['Servicios', 'Career', 'Career deck', 'Soluciones', 'Sistema IZZY'],
        links2: ['Seguro de vida', 'Proteccion de ingresos', 'Salud individual', 'Medicare', 'Anualidades', 'Planificacion de retiro'],
        contactMeta: ['California & Florida', 'Lun-Sab · Atencion por cita'],
        disclaimer: 'IZZY Financial & Business Services ofrece orientacion general sobre servicios financieros y de seguros. Algunos servicios pueden requerir licencia, autorizacion, revision profesional independiente o cumplimiento de requisitos estatales y federales. La disponibilidad puede variar segun el estado, proveedor, elegibilidad y regulacion aplicable. No se garantizan aprobaciones, tarifas, coberturas, ahorros ni resultados. IZZY Financial & Business Services no esta afiliado, respaldado ni aprobado por ninguna entidad gubernamental o carrier, salvo que se indique expresamente por escrito. © 2026 IZZY Financial & Business Services. Todos los derechos reservados.'
      },
      contactFormAria: 'Formulario de contacto inicial',
      contactFormTitle: 'Cuentanos que necesitas',
      formName: 'Nombre',
      formPhone: 'Telefono',
      formIntent: 'Prioridad',
      formState: 'Estado',
      formNamePlaceholder: 'Tu nombre',
      formSubmit: 'Enviar por WhatsApp',
      eventForm: {
        aria: 'Formulario de confirmacion de asistencia para Sabor y Finanzas',
        title: 'Confirma tu asistencia a Sabor y Finanzas',
        context: 'Completa tu nombre y telefono para registrar tu asistencia. Al enviar, tambien se abrira WhatsApp con tu confirmacion.',
        submit: 'Confirmar asistencia'
      },
      callNow: 'Llamar ahora',
      states: ['California', 'Florida', 'Otro'],
      intents: ['Proteccion familiar', 'Career', 'Retiro'],
      validation: {
        name: 'Ingresa tu nombre.',
        phone: 'Ingresa un telefono valido (minimo 10 digitos).',
        intent: 'Selecciona tu prioridad.',
        state: 'Selecciona tu estado.',
        review: 'Revisa los campos marcados antes de enviar.',
        saving: 'Guardando lead...',
        ok: 'Listo: lead guardado en Google Sheets y enviado por WhatsApp.',
        fail: 'Enviado por WhatsApp. No se pudo confirmar guardado en Sheets.',
        savingEvent: 'Guardando tu confirmacion...',
        okEvent: 'Listo: asistencia confirmada en Google Sheets y enviada por WhatsApp.',
        failEvent: 'Abrimos WhatsApp, pero no pudimos confirmar el guardado de tu asistencia.'
      },
      wa: {
        hero: {
          cliente: { label: 'Empezar consulta', text: 'Hola, quiero orientacion inicial sobre proteccion familiar.' },
          agente: { label: 'Ver opciones de salud', text: 'Hola, quiero orientacion sobre salud y Medicare.' },
          oficina: { label: 'Planificar mi retiro', text: 'Hola, quiero orientacion sobre retiro y anualidades.' }
        },
        formIntro: 'Hola, quiero una consulta sobre servicios financieros.',
        eventIntro: 'Hola, confirmo mi asistencia a Sabor y Finanzas.',
        fields: { name: 'Nombre', phone: 'Telefono', intent: 'Prioridad', state: 'Estado', event: 'Evento' }
      }
    },
    en: {
      navServicios: 'Guidance',
      navModelo: 'Life',
      navAgentes: 'Career',
      navSistema: 'Retirement',
      navDebt: 'Mediator Debt Solutions',
      navDebtWa: 'Hi, I would like information about debt relief (Mediator Debt Solutions).',
      navContacto: 'Contact Us',
      heroBadge: 'Bilingual financial guidance for the Hispanic community',
      heroTitle: 'Everything you need to<br><span class="gradient-text">protect your family and plan your future.</span>',
      heroSubtitle: 'We help you understand your options in life insurance, health, Medicare, retirement, and financial education through a clear, human, bilingual conversation.',
      intentAria: 'Choose your priority',
      intentCliente: 'Family protection',
      intentAgente: 'Health & Medicare',
      intentOficina: 'Retirement',
      heroCareerLink: 'Looking for a professional opportunity? Explore Career',
      trust: ['Bilingual service', 'California & Florida', 'Free consultation', 'Personalized guidance', 'Long-term protection'],
      stats: ['Services', 'States', 'Team'],
      visualEyebrow: 'Real care, professional image',
      visualTitle: 'A <span class="gradient-text">modern and trusted</span> experience',
      visualDesc: 'We combine human guidance, clear structure, and bilingual support for families who want to make stronger financial decisions.',
      visualCards: {
        titles: ['Clear guidance', 'Structured planning', 'Ongoing follow-up'],
        descs: [
          'Simple guidance to protect income, family, and long-term security.',
          'Clear recommendations for life, health, Medicare, and retirement.',
          'Annual reviews, adjustments, and support for every life stage.'
        ]
      },
      categories: ['Life insurance', 'Health & Medicare', 'Career', 'Retirement & annuities', 'Financial education'],
      caminos: {
        eyebrow: 'Choose your priority',
        title: 'Solutions to <span class="gradient-text">protect today and plan ahead</span>',
        desc: 'IZZY combines guidance, option comparison, and bilingual support so every family can move forward with greater confidence.',
        labels: ['Family protection', 'Health & Medicare', 'Retirement'],
        cardTitles: [
          'Protect your family with a stronger foundation.',
          'Find coverage with more clarity.',
          'Build long-term income and peace of mind.'
        ],
        cardDescs: [
          'Explore life insurance, income protection, and strategies to care for the people who matter most.',
          'We help you understand health plans, eligibility, and Medicare options without unnecessary confusion.',
          'Review retirement, accumulation, and preservation strategies so you can decide with more vision and less uncertainty.'
        ],
        links: ['I want protection →', 'View health options →', 'Plan my retirement →']
      },
      servicios: {
        eyebrow: 'Financial services',
        title: 'Services that help you <span class="gradient-text">protect, organize, and grow</span>',
        desc: 'We focus on the financial areas that have the greatest impact on family peace of mind: protection, health, retirement, and financial education.',
        pills: ['Bilingual service', 'California & Florida', 'Free initial consultation'],
        link: 'Free consultation →',
        titles: [
          'Life',
          'Health & Medicare',
          'Retirement',
          'Financial education'
        ],
        descs: [
          'Term, whole life, and IUL options to protect your family, create legacy, and reduce the impact of the unexpected.',
          'We compare medical coverage, eligibility, and enrollment periods so you can choose with clarity at any stage.',
          'Accumulation strategies, annuities, and guaranteed income for a retirement with clear goals and less uncertainty.',
          'We explain concepts, scenarios, and decisions so you can move forward with confidence instead of urgency.'
        ],
        secondaryLabel: 'We also offer',
        secondaryItems: ['Income protection', 'Medicare', 'Annuities', 'Annual financial review']
      },
      modelo: {
        eyebrow: 'Retirement and wealth',
        title: 'Build retirement with <span class="gradient-text">clarity and discipline.</span>',
        desc: 'The goal is not only to save. It is to build a strategy that combines protection, accumulation, future income, and periodic reviews.'
      },
      agentes: {
        eyebrow: 'Career',
        title: 'An opportunity with a <span class="gradient-text">clear growth path</span>',
        desc: 'You can also explore IZZY’s professional path as a complementary opportunity within the ecosystem, from getting started through leadership development and agency building.',
        benefitTitles: ['Step-by-step route', 'Growth vision', 'Ready presentation', 'Consistent message', 'Commercial use', 'Bridge with IZZY'],
        benefitDescs: [
          'The presentation explains the progression from Trainee to Marketing Director in a simple way.',
          'It shows production, team development, and agency building in one connected route.',
          'The interactive deck is already prepared to use on Zoom or share as a visual resource.',
          'It helps explain the opportunity with a more structured and professional narrative.',
          'It works for first conversations, follow-up, and one-to-one or group presentations.',
          'Career stays connected to the main brand as a secondary opportunity without taking the homepage away from its financial focus.'
        ],
        ctas: ['I want Career information', 'Open presentation']
      },
      sistema: {
        eyebrow: 'IZZY System',
        title: 'Infrastructure to <span class="gradient-text">grow with order</span>',
        desc: 'The difference is follow-up. IZZY combines education, process, and support to turn a consultation into a long-term strategy.',
        itemTitles: ['Initial diagnosis', 'WhatsApp follow-up', 'Continuous education', 'Annual review', 'Bilingual explanation', 'Clear process'],
        itemDescs: [
          'We begin by understanding goals, budget, life stage, and real concerns.',
          'Clear messages to answer questions and maintain continuity after every conversation.',
          'Content and conversations focused on life, health, Medicare, and retirement.',
          'Periodic reviews to adapt your protection to family and financial changes.',
          'We translate processes and options into simple language that builds real trust.',
          'A consistent experience from the first question through the annual review.'
        ]
      },
      porque: {
        eyebrow: 'Our difference',
        title: 'Why <span class="gradient-text">IZZY</span>?',
        desc: 'Because we combine community trust with clarity, follow-up, and a more human financial experience.',
        itemTitles: ['100% Bilingual', 'Objective guidance', 'Structured process', 'Community focused'],
        itemDescs: [
          'Complete care in Spanish and English. We explain details without language barriers.',
          'We help you understand and compare options through a conversation centered on your real needs.',
          'We do not improvise follow-up. We organize each step so you always know what comes next.',
          'We primarily serve Latino families with empathy, patience, and respect.'
        ]
      },
      resultados: {
        eyebrow: 'Foundation of trust',
        title: 'We are in a <span class="gradient-text">launch phase</span>',
        desc: 'We are not publishing numeric metrics yet. We prefer full transparency while we build measurable results.',
        metricsStrong: ['Bilingual service', 'Active coverage', 'Initial consultation', 'Follow-up'],
        metricsDesc: ['Spanish and English', 'California and Florida', 'Clear guidance through WhatsApp or phone', 'Step-by-step process and annual review'],
        testimonialText: [
          'A family that wants to protect income and loved ones with a simple explanation and no pressure.',
          'A person who needs to understand Medicare or medical coverage and values clear guidance in their language.',
          'A client who wants to organize retirement through a more intentional, sustainable, and reviewable strategy.'
        ],
        testimonialRole: ['Use case · Life', 'Use case · Health', 'Use case · Retirement']
      },
      ctaFinal: {
        title: 'Start on the right path.',
        desc: 'Whether you want to protect your family, review your health coverage, or plan retirement, IZZY welcomes you with a clear conversation. And if you also want to explore the professional opportunity, Career is still available.',
        cards: ['Life insurance', 'Health & Medicare', 'Retirement'],
        cardSubs: ['Family protection and legacy', 'Medical coverage with clarity', 'Strategy, accumulation, and income'],
        careerInlineCopy: 'Also want to explore the opportunity? Open the interactive Career presentation.',
        careerInlineLink: 'Open Career'
      },
      footer: {
        tagline: 'Protecting families, building futures.',
        plataforma: 'Platform',
        serviciosClave: 'Key services',
        contacto: 'Contact',
        links1: ['Services', 'Career', 'Career deck', 'Solutions', 'IZZY System'],
        links2: ['Life insurance', 'Income protection', 'Individual health', 'Medicare', 'Annuities', 'Retirement planning'],
        contactMeta: ['California & Florida', 'Mon-Sat · By appointment'],
        disclaimer: 'IZZY Financial & Business Services offers general guidance on financial and insurance services. Some services may require licensing, authorization, independent professional review, or compliance with state and federal requirements. Availability may vary by state, provider, eligibility, and applicable regulation. Approvals, rates, coverages, savings, and results are not guaranteed. IZZY Financial & Business Services is not affiliated with, endorsed by, or approved by any government entity or carrier unless expressly stated in writing. © 2026 IZZY Financial & Business Services. All rights reserved.'
      },
      contactFormAria: 'Initial contact form',
      contactFormTitle: 'Tell us what you need',
      formName: 'Name',
      formPhone: 'Phone',
      formIntent: 'Priority',
      formState: 'State',
      formNamePlaceholder: 'Your name',
      formSubmit: 'Send via WhatsApp',
      eventForm: {
        aria: 'Sabor y Finanzas attendance confirmation form',
        title: 'Confirm your attendance for Sabor y Finanzas',
        context: 'Enter your name and phone number to register your attendance. Submitting will also open WhatsApp with your confirmation message.',
        submit: 'Confirm attendance'
      },
      callNow: 'Call now',
      states: ['California', 'Florida', 'Other'],
      intents: ['Family protection', 'Career', 'Retirement'],
      validation: {
        name: 'Enter your name.',
        phone: 'Enter a valid phone number (at least 10 digits).',
        intent: 'Select your priority.',
        state: 'Select your state.',
        review: 'Please review the highlighted fields before sending.',
        saving: 'Saving lead...',
        ok: 'Done: lead saved to Google Sheets and sent through WhatsApp.',
        fail: 'Sent through WhatsApp. Could not confirm save in Sheets.',
        savingEvent: 'Saving your confirmation...',
        okEvent: 'Done: attendance confirmed in Google Sheets and sent through WhatsApp.',
        failEvent: 'WhatsApp opened, but we could not confirm that your attendance was saved.'
      },
      wa: {
        hero: {
          cliente: { label: 'Start consultation', text: 'Hi, I want initial guidance about family protection.' },
          agente: { label: 'View health options', text: 'Hi, I want guidance about health and Medicare.' },
          oficina: { label: 'Plan my retirement', text: 'Hi, I want guidance about retirement and annuities.' }
        },
        formIntro: 'Hi, I want a consultation about financial services.',
        eventIntro: 'Hi, I am confirming my attendance for Sabor y Finanzas.',
        fields: { name: 'Name', phone: 'Phone', intent: 'Priority', state: 'State', event: 'Event' }
      }
    }
  };

  let currentLang = localStorage.getItem('izzy_lang') || DEFAULT_LANG;
  if (!t[currentLang]) currentLang = DEFAULT_LANG;
  const queryParams = new URLSearchParams(window.location.search);
  const eventSlug = (queryParams.get('evento') || queryParams.get('event') || '').trim().toLowerCase();
  const currentPath = (window.location.pathname || '').toLowerCase();
  const isSaborFinanzasPage = currentPath.endsWith('/sabor-y-finanzas.html') || currentPath.endsWith('sabor-y-finanzas.html');
  const isSaborFinanzasMode = eventSlug === 'sabor-y-finanzas' || isSaborFinanzasPage;

  const setText = (selector, value, html = false) => {
    const el = document.querySelector(selector);
    if (!el) return;
    if (html) el.innerHTML = value;
    else el.textContent = value;
  };

  const setListText = (selector, values) => {
    const els = document.querySelectorAll(selector);
    values.forEach((value, i) => {
      if (els[i]) els[i].textContent = value;
    });
  };

  const waLink = (text) => `https://wa.me/18182667038?text=${encodeURIComponent(text)}`;

  const langButtons = document.querySelectorAll('.lang-switch__btn');
  const intentButtons = document.querySelectorAll('.intent-switch__btn');
  const heroPrimaryCta = document.getElementById('cta-whatsapp-hero');
  const leadForm = document.getElementById('lead-form');
  const leadFormContext = document.getElementById('lead-form-context');
  const leadIntentField = document.getElementById('lead-intent-field');
  const leadStateField = document.getElementById('lead-state-field');

  const applyLeadFormMode = (lang) => {
    if (!leadForm) return;

    const L = t[lang];
    const submitBtn = leadForm.querySelector('.lead-form__submit');
    const intentSelect = document.getElementById('lead-intent');
    const stateSelect = document.getElementById('lead-state');

    if (isSaborFinanzasMode) {
      leadForm.setAttribute('aria-label', L.eventForm.aria);
      setText('#lead-form .lead-form__title', L.eventForm.title);
      if (leadFormContext) {
        leadFormContext.hidden = false;
        leadFormContext.textContent = L.eventForm.context;
      }
      if (leadIntentField) leadIntentField.hidden = true;
      if (leadStateField) leadStateField.hidden = true;
      if (intentSelect) {
        intentSelect.disabled = true;
        intentSelect.required = false;
      }
      if (stateSelect) {
        stateSelect.disabled = true;
        stateSelect.required = false;
      }
      if (submitBtn) submitBtn.textContent = L.eventForm.submit;
      return;
    }

    leadForm.setAttribute('aria-label', L.contactFormAria);
    setText('#lead-form .lead-form__title', L.contactFormTitle);
    if (leadFormContext) {
      leadFormContext.hidden = true;
      leadFormContext.textContent = '';
    }
    if (leadIntentField) leadIntentField.hidden = false;
    if (leadStateField) leadStateField.hidden = false;
    if (intentSelect) {
      intentSelect.disabled = false;
      intentSelect.required = true;
    }
    if (stateSelect) {
      stateSelect.disabled = false;
      stateSelect.required = true;
    }
    if (submitBtn) submitBtn.textContent = L.formSubmit;
  };

  const applyLanguage = (lang) => {
    const L = t[lang];
    document.documentElement.lang = lang;

    setText('#nav-servicios', L.navServicios);
    setText('#nav-modelo', L.navModelo);
    setText('#nav-agentes', L.navAgentes);
    setText('#nav-sistema', L.navSistema);
    setText('#nav-contacto', L.navContacto);
    setText('#hero-badge', L.heroBadge);
    setText('#hero-title', L.heroTitle, true);
    setText('#hero-subtitle', L.heroSubtitle);

    const intentSwitch = document.getElementById('intent-switch');
    if (intentSwitch) intentSwitch.setAttribute('aria-label', L.intentAria);

    if (intentButtons[0]) intentButtons[0].textContent = L.intentCliente;
    if (intentButtons[1]) intentButtons[1].textContent = L.intentAgente;
    if (intentButtons[2]) intentButtons[2].textContent = L.intentOficina;

    setText('#cta-agent-hero', L.heroCareerLink);

    const navDebt = document.getElementById('nav-debt');
    if (navDebt) {
      navDebt.textContent = L.navDebt;
      navDebt.href = waLink(L.navDebtWa);
    }

    setListText('#trust-strip span', L.trust);
    setListText('#hero-stats .stat__label', L.stats);

    setText('#visual-story .section__eyebrow', L.visualEyebrow);
    setText('#visual-story .section__title', L.visualTitle, true);
    setText('#visual-story .section__desc', L.visualDesc);
    setListText('#visual-story .visual-card__overlay h3', L.visualCards.titles);
    setListText('#visual-story .visual-card__overlay p', L.visualCards.descs);
    setListText('#categorias .category-chip', L.categories);

    setText('#caminos .section__eyebrow', L.caminos.eyebrow);
    setText('#caminos .section__title', L.caminos.title, true);
    setText('#caminos .section__desc', L.caminos.desc);
    setListText('#path-grid .path-card__label', L.caminos.labels);
    setListText('#path-grid .path-card__title', L.caminos.cardTitles);
    setListText('#path-grid .path-card__desc', L.caminos.cardDescs);
    setListText('#path-grid .path-card__link', L.caminos.links);

    setText('#servicios .section__eyebrow', L.servicios.eyebrow);
    setText('#servicios .section__title', L.servicios.title, true);
    setText('#servicios .section__desc', L.servicios.desc);
    setListText('#servicios .services-pill', L.servicios.pills);
    setListText('#services-grid .service-card__title', L.servicios.titles);
    setListText('#services-grid .service-card__desc', L.servicios.descs);
    setListText('#services-grid .service-card__link', Array(4).fill(L.servicios.link));
    setText('#services-secondary-label', L.servicios.secondaryLabel);
    setListText('#services-secondary .services-secondary__item', L.servicios.secondaryItems);

    setText('#modelo .section__eyebrow', L.modelo.eyebrow);
    setText('#modelo .section__title', L.modelo.title, true);
    setText('#modelo .section__desc', L.modelo.desc);

    setText('#agentes .section__eyebrow', L.agentes.eyebrow);
    setText('#agentes .section__title', L.agentes.title, true);
    setText('#agentes .section__desc', L.agentes.desc);
    setListText('#agent-grid .agent-benefit__title', L.agentes.benefitTitles);
    setListText('#agent-grid .agent-benefit__desc', L.agentes.benefitDescs);

    const agentWa = document.getElementById('cta-agent-wa');
    if (agentWa) agentWa.lastChild.textContent = ` ${L.agentes.ctas[0]}`;
    setText('#cta-office-model', L.agentes.ctas[1]);

    setText('#sistema .section__eyebrow', L.sistema.eyebrow);
    setText('#sistema .section__title', L.sistema.title, true);
    setText('#sistema .section__desc', L.sistema.desc);
    setListText('#system-grid .system-item h3', L.sistema.itemTitles);
    setListText('#system-grid .system-item p', L.sistema.itemDescs);

    setText('#por-que-izzy .section__eyebrow', L.porque.eyebrow);
    setText('#por-que-izzy .section__title', L.porque.title, true);
    setText('#por-que-izzy .section__desc', L.porque.desc);
    setListText('#why-grid .why-item__title', L.porque.itemTitles);
    setListText('#why-grid .why-item p', L.porque.itemDescs);

    setText('#resultados .section__eyebrow', L.resultados.eyebrow);
    setText('#resultados .section__title', L.resultados.title, true);
    setText('#resultados .section__desc', L.resultados.desc);
    setListText('#resultados .proof-metric strong', L.resultados.metricsStrong);
    setListText('#resultados .proof-metric span', L.resultados.metricsDesc);
    setListText('#resultados .testimonial-card p', L.resultados.testimonialText);
    setListText('#resultados .testimonial-card span', L.resultados.testimonialRole);

    setText('#cta-box .cta-box__title', L.ctaFinal.title);
    setText('#cta-box .cta-box__desc', L.ctaFinal.desc);
    setListText('#cta-box .cta-segment span', L.ctaFinal.cards);
    setListText('#cta-box .cta-segment strong', L.ctaFinal.cardSubs);
    setText('#career-inline-copy', L.ctaFinal.careerInlineCopy);
    setText('#career-inline-link', L.ctaFinal.careerInlineLink);

    setText('#lead-name-label', L.formName);
    setText('#lead-phone-label', L.formPhone);
    setText('#lead-intent-label', L.formIntent);
    setText('#lead-state-label', L.formState);

    const nameInput = document.getElementById('lead-name');
    if (nameInput) nameInput.placeholder = L.formNamePlaceholder;

    const ctaCallFinal = document.getElementById('cta-call-final');
    if (ctaCallFinal) ctaCallFinal.lastChild.textContent = ` ${L.callNow}`;

    const intentSelect = document.getElementById('lead-intent');
    if (intentSelect && intentSelect.options.length >= 3) {
      intentSelect.options[0].text = L.intents[0];
      intentSelect.options[1].text = L.intents[1];
      intentSelect.options[2].text = L.intents[2];
    }

    const stateSelect = document.getElementById('lead-state');
    if (stateSelect && stateSelect.options.length >= 3) {
      stateSelect.options[0].text = L.states[0];
      stateSelect.options[1].text = L.states[1];
      stateSelect.options[2].text = L.states[2];
    }

    if (heroPrimaryCta) {
      const activeIntent = document.querySelector('.intent-switch__btn.is-active')?.dataset.intent || 'cliente';
      const cfg = L.wa.hero[activeIntent];
      heroPrimaryCta.href = waLink(cfg.text);
      heroPrimaryCta.lastChild.textContent = ` ${cfg.label}`;
    }

    applyLeadFormMode(lang);

    setText('.footer__tagline', L.footer.tagline);
    setText('.footer__products .footer__heading', L.footer.plataforma);
    setText('.footer__links .footer__heading', L.footer.serviciosClave);
    setText('.footer__contact .footer__heading', L.footer.contacto);
    setListText('.footer__products .footer__list a', L.footer.links1);
    setListText('.footer__links .footer__list a', L.footer.links2);

    const footerMeta = document.querySelectorAll('.footer__contact .footer__list li span');
    if (footerMeta[0] && footerMeta[0].lastChild) footerMeta[0].lastChild.textContent = L.footer.contactMeta[0];
    if (footerMeta[1] && footerMeta[1].lastChild) footerMeta[1].lastChild.textContent = L.footer.contactMeta[1];
    setText('.footer__disclaimer', L.footer.disclaimer);

    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  };

  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mainNav.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  if (intentButtons.length && heroPrimaryCta) {
    intentButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const intent = button.dataset.intent;
        const cfg = t[currentLang].wa.hero[intent];
        if (!cfg) return;

        intentButtons.forEach((btn) => {
          btn.classList.remove('is-active');
          btn.setAttribute('aria-selected', 'false');
        });

        button.classList.add('is-active');
        button.setAttribute('aria-selected', 'true');
        heroPrimaryCta.href = waLink(cfg.text);
        heroPrimaryCta.lastChild.textContent = ` ${cfg.label}`;
      });
    });
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextLang = btn.dataset.lang;
      if (!t[nextLang] || nextLang === currentLang) return;
      currentLang = nextLang;
      localStorage.setItem('izzy_lang', currentLang);
      applyLanguage(currentLang);
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.style.color = isActive ? 'var(--c-gold-light)' : '';
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  document.querySelectorAll('a[href^="https://wa.me"]').forEach((link) => {
    link.addEventListener('touchstart', () => { link.style.transform = 'scale(.97)'; }, { passive: true });
    link.addEventListener('touchend', () => { link.style.transform = ''; }, { passive: true });
  });

  const leadStatus = document.getElementById('lead-form-status');
  if (leadForm) {
    const formFields = [
      { id: 'lead-name', key: 'name' },
      { id: 'lead-phone', key: 'phone' },
      { id: 'lead-intent', key: 'intent' },
      { id: 'lead-state', key: 'state' }
    ];

    const setStatus = (msg, type = '') => {
      if (!leadStatus) return;
      leadStatus.textContent = msg;
      leadStatus.classList.remove('is-error', 'is-success');
      if (type) leadStatus.classList.add(type);
    };

    const validateField = (fieldConfig) => {
      const field = document.getElementById(fieldConfig.id);
      const errorEl = document.getElementById(`${fieldConfig.id}-error`);
      if (!field) return true;
      if (field.disabled) {
        field.setAttribute('aria-invalid', 'false');
        if (errorEl) errorEl.textContent = '';
        return true;
      }

      let isValid = field.checkValidity();
      if (fieldConfig.id === 'lead-phone') {
        const normalized = (field.value || '').replace(/\D/g, '');
        isValid = normalized.length >= 10 && normalized.length <= 15;
      }

      field.setAttribute('aria-invalid', isValid ? 'false' : 'true');
      if (errorEl) errorEl.textContent = isValid ? '' : t[currentLang].validation[fieldConfig.key];
      return isValid;
    };

    formFields.forEach((fieldConfig) => {
      const field = document.getElementById(fieldConfig.id);
      if (!field) return;
      field.addEventListener('input', () => validateField(fieldConfig));
      field.addEventListener('change', () => validateField(fieldConfig));
      field.setAttribute('aria-invalid', 'false');
    });

    let isSubmitting = false;
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const activeFields = formFields.filter(({ id }) => {
        const field = document.getElementById(id);
        return field && !field.disabled;
      });
      const allValid = activeFields.every(validateField);
      if (!allValid) {
        setStatus(t[currentLang].validation.review, 'is-error');
        return;
      }

      const name = document.getElementById('lead-name')?.value.trim();
      const phone = document.getElementById('lead-phone')?.value.trim();
      const intentSelect = document.getElementById('lead-intent');
      const stateSelect = document.getElementById('lead-state');
      const intent = intentSelect?.value;
      const state = stateSelect?.value;
      const intentLabel = intentSelect?.options[intentSelect.selectedIndex]?.text || intent;
      const stateLabel = stateSelect?.options[stateSelect.selectedIndex]?.text || state;

      if (!name || !phone || (!isSaborFinanzasMode && (!intent || !state))) return;

      const payload = isSaborFinanzasMode
        ? {
            createdAt: new Date().toISOString(),
            source: 'Landing Sabor y Finanzas',
            formType: 'sabor_y_finanzas',
            eventName: 'Sabor y Finanzas',
            attendanceStatus: 'confirmed',
            language: currentLang,
            name,
            phone
          }
        : {
            createdAt: new Date().toISOString(),
            source: 'Landing IZZY',
            name,
            phone,
            intent: intentLabel,
            state: stateLabel
          };

      const submitBtn = leadForm.querySelector('.lead-form__submit');
      isSubmitting = true;
      if (submitBtn) submitBtn.disabled = true;

      const waPopup = window.open('', '_blank', 'noopener');

      let savedToSheet = false;
      if (LEADS_WEBHOOK_URL) {
        setStatus(isSaborFinanzasMode ? t[currentLang].validation.savingEvent : t[currentLang].validation.saving, '');
        try {
          const response = await fetch(LEADS_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
          });
          savedToSheet = response.ok;
        } catch (error) {
          savedToSheet = false;
        }
      }

      const i18nWa = t[currentLang].wa;
      const text = isSaborFinanzasMode
        ? [
            i18nWa.eventIntro,
            `${i18nWa.fields.event}: Sabor y Finanzas`,
            `${i18nWa.fields.name}: ${payload.name}`,
            `${i18nWa.fields.phone}: ${payload.phone}`
          ].join('\n')
        : [
            i18nWa.formIntro,
            `${i18nWa.fields.name}: ${payload.name}`,
            `${i18nWa.fields.phone}: ${payload.phone}`,
            `${i18nWa.fields.intent}: ${payload.intent}`,
            `${i18nWa.fields.state}: ${payload.state}`
          ].join('\n');

      const waUrl = waLink(text);
      if (waPopup) waPopup.location.href = waUrl;
      else window.location.href = waUrl;

      setStatus(
        savedToSheet
          ? (isSaborFinanzasMode ? t[currentLang].validation.okEvent : t[currentLang].validation.ok)
          : (isSaborFinanzasMode ? t[currentLang].validation.failEvent : t[currentLang].validation.fail),
        savedToSheet ? 'is-success' : 'is-error'
      );

      leadForm.reset();
      formFields.forEach(({ id }) => {
        const field = document.getElementById(id);
        const errorEl = document.getElementById(`${id}-error`);
        if (field) field.setAttribute('aria-invalid', 'false');
        if (errorEl) errorEl.textContent = '';
      });

      isSubmitting = false;
      if (submitBtn) submitBtn.disabled = false;
    });
  }

  applyLanguage(currentLang);
})();
