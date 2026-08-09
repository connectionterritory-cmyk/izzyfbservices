/**
 * Caicedo Team (IZZY Financial & Business Services) — script.js
 * Features: sticky header, mobile nav, scroll reveal, smooth scroll, i18n ES/EN
 */

(function () {
  'use strict';
  const LEADS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxSbryrhzhA58y5RoyY6bXXnagUE8WVFF5z0UDWDgMs7GXGrtQNvNXos-WoXzGJoKeNfQ/exec';
  const DEFAULT_LANG = 'es';

  const t = {
    es: {
      navVida: 'Vida', navSalud: 'Salud y Medicare', navRetiro: 'Retiro', navNosotros: 'Nosotros', navEquipo: 'Únete al equipo', navContacto: 'Contacto',
      heroBadge: 'Protección de vida, salud y retiro para la comunidad hispana',
      heroTitle: 'Protegemos lo que<br><span class="gradient-text">más importa.</span>',
      heroSubtitle: 'Soluciones personalizadas de seguros de vida, salud y retiro para proteger a tu familia y construir tu independencia financiera — con atención bilingüe y sin letra pequeña.',
      intentAria: 'Elige tu camino', intentCliente: 'Quiero proteger a mi familia', intentAgente: 'Quiero conocer la oportunidad',
      ctaSecondary: 'Ver todos los servicios', ctaTertiary: 'Habla con Moisés',
      trust: ['Atención bilingüe', 'California & Florida', 'Consulta sin costo', 'Agente independiente', 'Caicedo Team'],
      stats: ['Pilares', 'Estados', 'Equipo'],
      visualEyebrow: 'Atención real, imagen profesional',
      visualTitle: 'Una experiencia <span class="gradient-text">moderna y confiable</span>',
      visualDesc: 'Combinamos asesoría humana, tecnología y acompañamiento bilingüe para familias y para quienes quieren construir una carrera en seguros.',
      visualCards: {
        titles: ['Asesoría clara', 'Crecimiento con estructura', 'Resultados con seguimiento'],
        descs: [
          'Explicamos tus opciones de vida, salud y retiro sin tecnicismos.',
          'Un sistema serio para agentes que quieren construir su propio equipo.',
          'Procesos, CRM y acompañamiento continuo para avanzar con claridad.'
        ]
      },
      categories: ['Vida', 'Salud y Medicare', 'Retiro', 'Únete al equipo'],
      caminos: {
        eyebrow: 'Elige tu camino',
        title: 'Una plataforma para <span class="gradient-text">familias y agentes</span>',
        desc: 'Caicedo Team conecta protección esencial con entrenamiento, seguimiento y una visión profesional duplicable para la comunidad hispana.',
        labels: ['Soy Cliente', 'Soy Agente', 'Soy Líder'],
        cardTitles: ['Protege a tu familia y tu futuro.', 'Construye una carrera con estructura.', 'Desarrolla tu propio equipo.'],
        cardDescs: [
          'Orientación clara sobre seguro de vida, IUL, salud, Medicare y estrategias de retiro para proteger lo que más importa.',
          'Entrenamiento, seguimiento, referidos y una ruta profesional real para agentes de vida y salud que quieren crecer con un sistema serio.',
          'Un modelo duplicable con CRM, mentoría y procesos para pasar de productor a líder dentro de Caicedo Team.'
        ],
        links: ['Necesito protección →', 'Quiero crecer como agente →', 'Quiero liderar un equipo →']
      },
      servicios: {
        eyebrow: 'Nuestros pilares',
        title: 'Protección que ayuda a <span class="gradient-text">vivir, cuidarte y crecer</span>',
        desc: 'Organizamos la protección financiera en tres pilares simples: vida, salud y retiro.',
        pills: ['Atención bilingüe', 'California & Florida', 'Consulta inicial sin costo'],
        link: 'Consulta gratis →',
        titles: ['Vida', 'Salud y Medicare', 'Retiro'],
        descs: [
          'Seguro de término, vida entera, IUL y gastos finales para proteger a tu familia y tu legado.',
          'Medicare Advantage, Medicare Supplement y planes ACA explicados con claridad, sin letra pequeña.',
          'Anualidades y estrategias de retiro para construir ingresos garantizados a largo plazo.'
        ]
      },
      modelo: {
        eyebrow: 'Modelo de crecimiento',
        title: 'De agente independiente a <span class="gradient-text">líder de equipo.</span>',
        desc: 'El objetivo no es vender una póliza aislada. Es construir una cartera, generar seguimiento real y desarrollar tu propio equipo dentro de Caicedo Team.'
      },
      agentes: {
        eyebrow: 'Oportunidad profesional',
        title: 'Únete a <span class="gradient-text">Caicedo Team</span>',
        desc: 'Una oportunidad seria para agentes de vida y salud que quieren desarrollar una carrera real, con mejor seguimiento y una ruta clara hacia el liderazgo de equipo.',
        benefitTitles: ['Construye una cartera', 'Domina vida, salud y retiro', 'Entrenamiento y scripts', 'Sistema de seguimiento', 'Crecimiento acompañado', 'Modelo duplicable'],
        benefitDescs: [
          'Aprende a servir clientes con seguimiento, renovaciones, referidos y relaciones sostenibles.',
          'Desarrolla licencias y conocimiento en los tres pilares: vida, salud/Medicare y retiro.',
          'Producto, ventas, cumplimiento, mensajes de WhatsApp y conversaciones consultivas.',
          'CRM, etiquetas, recordatorios y campañas para no depender de memoria ni mensajes sueltos.',
          'Mentoría directa, revisión de oportunidades y enfoque en hábitos comerciales consistentes.',
          'Una ruta para pasar de productor a líder y construir tu propio equipo dentro de Caicedo Team.'
        ],
        ctas: ['Aplicar al equipo', 'Quiero más información']
      },
      sistema: {
        eyebrow: 'Sistema Caicedo Team',
        title: 'Infraestructura para <span class="gradient-text">crecer con orden</span>',
        desc: 'La diferencia está en el seguimiento. Combinamos protección, procesos y automatización para convertir conversaciones en relaciones de largo plazo.',
        itemTitles: ['Pipeline de leads', 'WhatsApp follow-up', 'Campañas por temporada', 'Referidos y renovaciones', 'Entrenamiento', 'Procesos duplicables'],
        itemDescs: [
          'Clientes y prospectos de equipo organizados por etapa, interés y próxima acción.',
          'Mensajes por intención: protección familiar u oportunidad profesional, con seguimiento claro y humano.',
          'Temporada de Medicare (AEP), revisiones de póliza y campañas de retiro con mensajes segmentados.',
          'Proceso para pedir referidos, revisiones anuales y renovaciones sin perder el contacto.',
          'Guías, scripts, sesiones y hábitos comerciales para agentes y equipos en crecimiento.',
          'Plantillas, checklist y estructura lista para que nuevos agentes se integren rápido.'
        ]
      },
      porque: {
        eyebrow: 'Nosotros',
        title: '¿Por qué <span class="gradient-text">Caicedo Team</span>?',
        desc: 'Porque combinamos confianza comunitaria con una mentalidad profesional moderna: protección, seguimiento y desarrollo de agentes bajo un mismo equipo.',
        itemTitles: ['100% Bilingüe', 'Agente Independiente', 'Mentalidad de Sistema', 'Enfocados en la Comunidad'],
        itemDescs: [
          'Atención completa en español e inglés. Explicamos los detalles sin barreras de idioma.',
          'No estamos atados a una sola compañía. Buscamos la mejor opción del mercado para ti.',
          'No improvisamos seguimiento. Organizamos leads, citas, renovaciones y oportunidades.',
          'Servimos principalmente a familias latinas y comunidades inmigrantes con empatía y respeto.'
        ],
        bioName: 'Moisés Caicedo',
        bioRole: 'Agente de Seguros de Vida y Salud · Fundador de Caicedo Team',
        bioText: '[Tu historia aquí: cuéntales por qué empezaste en seguros, a quién ayudas y qué te hace diferente. 2–4 líneas.]'
      },
      resultados: {
        eyebrow: 'Base de confianza',
        title: 'Estamos en fase de <span class="gradient-text">lanzamiento</span>',
        desc: 'Todavía no publicamos métricas numéricas. Preferimos transparencia total mientras construimos resultados medibles.',
        metricsStrong: ['Atención bilingüe', 'Cobertura activa', 'Consulta inicial', 'Seguimiento'],
        metricsDesc: ['Español e inglés', 'California y Florida', 'Orientación clara por WhatsApp o llamada', 'Proceso paso a paso por intención'],
        testimonialText: [
          'Familia que busca proteger su futuro con un seguro de vida claro, explicado en español y sin presión.',
          'Agente que empieza con una línea de vida y evoluciona hacia salud, Medicare y retiro con seguimiento real.',
          'Productor que decide liderar su propio equipo dentro de Caicedo Team con mentoría y procesos.'
        ],
        testimonialRole: ['Caso tipo · Cliente', 'Caso tipo · Agente', 'Caso tipo · Líder de equipo']
      },
      ctaFinal: {
        title: 'Empieza por el camino correcto.',
        desc: 'Ya sea que quieras proteger a tu familia o conocer la oportunidad profesional, Caicedo Team te recibe con una conversación clara.',
        cards: ['Quiero proteger a mi familia', 'Quiero conocer la oportunidad profesional'],
        cardSubs: ['Vida, salud y retiro', 'Entrenamiento, cartera y liderazgo']
      },
      footer: {
        tagline: 'Protegiendo familias, construyendo futuros.',
        plataforma: 'Plataforma',
        serviciosClave: 'Nuestros pilares',
        contacto: 'Contacto',
        links1: ['Servicios', 'Únete al equipo', 'Nosotros', 'Sistema Caicedo Team'],
        links2: ['Vida', 'Salud y Medicare', 'Retiro'],
        contactMeta: ['California & Florida', 'Lun-Sáb · Atención por cita'],
        disclaimer: 'Caicedo Team / IZZY Financial & Business Services ofrece orientación general y servicios de seguros de vida, salud y retiro. Algunos servicios pueden requerir licencia, autorización, appointment, revisión profesional independiente o cumplimiento de requisitos estatales y federales. La disponibilidad de servicios puede variar según el estado, proveedor, elegibilidad y regulación aplicable. No se garantizan aprobaciones, tarifas, coberturas, ahorros, ingresos ni resultados. Caicedo Team no está afiliado, respaldado ni aprobado por ninguna entidad gubernamental, programa federal, departamento estatal, carrier o compañía de seguros, salvo que se indique expresamente por escrito. © 2026 Caicedo Team. Todos los derechos reservados.'
      },
      contactFormTitle: 'Cuéntanos qué necesitas', formName: 'Nombre', formPhone: 'Teléfono', formIntent: '¿Qué buscas?', formState: 'Estado',
      formNamePlaceholder: 'Tu nombre', formSubmit: 'Enviar por WhatsApp', callNow: 'Llamar Ahora',
      states: ['California', 'Florida', 'Otro'],
      intents: ['Proteger a mi familia', 'Oportunidad profesional'],
      validation: {
        name: 'Ingresa tu nombre.',
        phone: 'Ingresa un teléfono válido (mínimo 10 dígitos).',
        intent: 'Selecciona qué buscas.',
        state: 'Selecciona tu estado.',
        review: 'Revisa los campos marcados antes de enviar.',
        saving: 'Guardando lead...',
        ok: 'Listo: lead guardado en Google Sheets y enviado por WhatsApp.',
        fail: 'Enviado por WhatsApp. No se pudo confirmar guardado en Sheets.'
      },
      wa: {
        hero: {
          cliente: { label: 'Agenda una consulta', text: 'Hola, quiero proteger a mi familia con un seguro de vida, salud o retiro.' },
          agente: { label: 'Habla con Moisés', text: 'Hola, quiero conocer la oportunidad profesional de Caicedo Team.' }
        },
        formIntro: 'Hola, quiero una consulta con Caicedo Team.',
        fields: { name: 'Nombre', phone: 'Teléfono', intent: 'Interés', state: 'Estado' }
      }
    },
    en: {
      navVida: 'Life', navSalud: 'Health & Medicare', navRetiro: 'Retirement', navNosotros: 'About', navEquipo: 'Join the Team', navContacto: 'Contact',
      heroBadge: 'Life, health, and retirement protection for the Hispanic community',
      heroTitle: 'We protect what<br><span class="gradient-text">matters most.</span>',
      heroSubtitle: 'Personalized life, health, and retirement insurance solutions to protect your family and build financial independence — bilingual service, no fine print.',
      intentAria: 'Choose your path', intentCliente: 'I want to protect my family', intentAgente: 'I want to learn about the opportunity',
      ctaSecondary: 'View all services', ctaTertiary: 'Talk to Moisés',
      trust: ['Bilingual service', 'California & Florida', 'Free consultation', 'Independent agent', 'Caicedo Team'],
      stats: ['Pillars', 'States', 'Team'],
      visualEyebrow: 'Real service, professional image',
      visualTitle: 'A <span class="gradient-text">modern and trusted</span> experience',
      visualDesc: 'We combine human guidance, technology, and bilingual support for families and for people who want to build a career in insurance.',
      visualCards: {
        titles: ['Clear guidance', 'Structured growth', 'Results with follow-up'],
        descs: [
          'We explain your life, health, and retirement options without the jargon.',
          'A serious system for agents who want to build their own team.',
          'Processes, CRM, and ongoing support to move forward with clarity.'
        ]
      },
      categories: ['Life', 'Health & Medicare', 'Retirement', 'Join the Team'],
      caminos: {
        eyebrow: 'Choose your path',
        title: 'One platform for <span class="gradient-text">families and agents</span>',
        desc: 'Caicedo Team connects essential protection with training, follow-up, and a scalable professional vision for the Hispanic community.',
        labels: ['I am a Client', 'I am an Agent', 'I am a Leader'],
        cardTitles: ['Protect your family and your future.', 'Build a career with structure.', 'Build your own team.'],
        cardDescs: [
          'Clear guidance on life insurance, IUL, health, Medicare, and retirement strategies to protect what matters most.',
          'Training, follow-up, referrals, and a real professional path for life and health agents who want to grow with a serious system.',
          'A scalable model with CRM, mentorship, and processes to move from producer to leader within Caicedo Team.'
        ],
        links: ['I need protection →', 'I want to grow as an agent →', 'I want to lead a team →']
      },
      servicios: {
        eyebrow: 'Our pillars',
        title: 'Protection that helps you <span class="gradient-text">live, care, and grow</span>',
        desc: 'We organize financial protection into three simple pillars: life, health, and retirement.',
        pills: ['Bilingual service', 'California & Florida', 'Free initial consultation'],
        link: 'Free consultation →',
        titles: ['Life', 'Health & Medicare', 'Retirement'],
        descs: [
          'Term, whole life, IUL, and final expense coverage to protect your family and your legacy.',
          'Medicare Advantage, Medicare Supplement, and ACA plans explained clearly, no fine print.',
          'Annuities and retirement strategies to build guaranteed long-term income.'
        ]
      },
      modelo: {
        eyebrow: 'Growth model',
        title: 'From independent agent to <span class="gradient-text">team leader.</span>',
        desc: 'The goal is not to sell a single policy. It is to build a portfolio, create real follow-up, and develop your own team within Caicedo Team.'
      },
      agentes: {
        eyebrow: 'Professional opportunity',
        title: 'Join <span class="gradient-text">Caicedo Team</span>',
        desc: 'A serious opportunity for life and health agents who want to build a real career, with stronger follow-up and a clear path to team leadership.',
        benefitTitles: ['Build a portfolio', 'Master life, health & retirement', 'Training and scripts', 'Follow-up system', 'Guided growth', 'Scalable model'],
        benefitDescs: [
          'Learn to serve clients with follow-up, renewals, referrals, and sustainable relationships.',
          'Build licensing and knowledge across the three pillars: life, health/Medicare, and retirement.',
          'Product, sales, compliance, WhatsApp messaging, and consultative conversations.',
          'CRM, tags, reminders, and campaigns so you do not depend on memory or scattered messages.',
          'Direct mentorship, opportunity review, and focus on consistent business habits.',
          'A path to move from producer to leader and build your own team within Caicedo Team.'
        ],
        ctas: ['Apply to join', 'I want more information']
      },
      sistema: {
        eyebrow: 'Caicedo Team System',
        title: 'Infrastructure to <span class="gradient-text">grow with order</span>',
        desc: 'The difference is follow-up. We combine protection, processes, and automation to turn conversations into long-term relationships.',
        itemTitles: ['Lead pipeline', 'WhatsApp follow-up', 'Seasonal campaigns', 'Referrals and renewals', 'Training', 'Scalable processes'],
        itemDescs: [
          'Clients and team prospects organized by stage, interest, and next action.',
          'Intent-based messaging: family protection or professional opportunity, with clear and human follow-up.',
          'Medicare AEP season, policy reviews, and retirement campaigns with segmented messaging.',
          'A process to request referrals, annual reviews, and renewals without losing touch.',
          'Guides, scripts, sessions, and sales habits for agents and growing teams.',
          'Templates, checklists, and structure ready for new agents to onboard quickly.'
        ]
      },
      porque: {
        eyebrow: 'About us',
        title: 'Why <span class="gradient-text">Caicedo Team</span>?',
        desc: 'Because we combine community trust with a modern professional mindset: protection, follow-up, and agent development under one team.',
        itemTitles: ['100% Bilingual', 'Independent Agent', 'System Mindset', 'Community Focused'],
        itemDescs: [
          'Full service in Spanish and English. We explain details without language barriers.',
          'We are not tied to a single carrier. We search for the best market option for you.',
          'We do not improvise follow-up. We organize leads, appointments, renewals, and opportunities.',
          'We primarily serve Latino families and immigrant communities with empathy and respect.'
        ],
        bioName: 'Moisés Caicedo',
        bioRole: 'Life & Health Insurance Agent · Founder of Caicedo Team',
        bioText: '[Your story here: tell them why you got into insurance, who you help, and what makes you different. 2–4 lines.]'
      },
      resultados: {
        eyebrow: 'Trust foundation',
        title: 'We are in a <span class="gradient-text">launch phase</span>',
        desc: 'We are not publishing numeric metrics yet. We prefer full transparency while we build measurable results.',
        metricsStrong: ['Bilingual service', 'Active coverage', 'Initial consultation', 'Follow-up'],
        metricsDesc: ['Spanish and English', 'California and Florida', 'Clear guidance via WhatsApp or phone', 'Step-by-step process by intent'],
        testimonialText: [
          'A family looking to protect their future with clear life insurance, explained in Spanish and without pressure.',
          'An agent who starts with one life line and grows into health, Medicare, and retirement with real follow-up.',
          'A producer who decides to lead their own team within Caicedo Team with mentorship and process.'
        ],
        testimonialRole: ['Case type · Client', 'Case type · Agent', 'Case type · Team Leader']
      },
      ctaFinal: {
        title: 'Start on the right path.',
        desc: 'Whether you want to protect your family or learn about the professional opportunity, Caicedo Team welcomes you with a clear conversation.',
        cards: ['I want to protect my family', 'I want to learn about the opportunity'],
        cardSubs: ['Life, health, and retirement', 'Training, portfolio, and leadership']
      },
      footer: {
        tagline: 'Protecting families, building futures.',
        plataforma: 'Platform',
        serviciosClave: 'Our pillars',
        contacto: 'Contact',
        links1: ['Services', 'Join the team', 'About', 'Caicedo Team System'],
        links2: ['Life', 'Health & Medicare', 'Retirement'],
        contactMeta: ['California & Florida', 'Mon-Sat · By appointment'],
        disclaimer: 'Caicedo Team / IZZY Financial & Business Services offers general guidance and life, health, and retirement insurance services. Some services may require licensing, authorization, appointment, independent professional review, or compliance with state and federal requirements. Availability of services may vary by state, provider, eligibility, and applicable regulations. Approvals, rates, coverages, savings, income, or results are not guaranteed. Caicedo Team is not affiliated with, endorsed by, or approved by any government entity, federal program, state department, carrier, or insurance company, unless expressly stated in writing. © 2026 Caicedo Team. All rights reserved.'
      },
      contactFormTitle: 'Tell us what you need', formName: 'Name', formPhone: 'Phone', formIntent: 'What are you looking for?', formState: 'State',
      formNamePlaceholder: 'Your name', formSubmit: 'Send via WhatsApp', callNow: 'Call Now',
      states: ['California', 'Florida', 'Other'],
      intents: ['Protect my family', 'Professional opportunity'],
      validation: {
        name: 'Please enter your name.',
        phone: 'Please enter a valid phone number (at least 10 digits).',
        intent: 'Please select what you are looking for.',
        state: 'Please select your state.',
        review: 'Please review the highlighted fields before submitting.',
        saving: 'Saving lead...',
        ok: 'Done: lead saved to Google Sheets and sent via WhatsApp.',
        fail: 'Sent via WhatsApp. Could not confirm save to Sheets.'
      },
      wa: {
        hero: {
          cliente: { label: 'Book a consultation', text: 'Hi, I want to protect my family with life, health, or retirement insurance.' },
          agente: { label: 'Talk to Moisés', text: 'Hi, I want to learn about the Caicedo Team professional opportunity.' }
        },
        formIntro: 'Hi, I would like a consultation with Caicedo Team.',
        fields: { name: 'Name', phone: 'Phone', intent: 'Interest', state: 'State' }
      }
    }
  };

  let currentLang = localStorage.getItem('izzy_lang') || DEFAULT_LANG;
  if (!t[currentLang]) currentLang = DEFAULT_LANG;

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

  const waLink = (text) => `https://wa.me/17866146546?text=${encodeURIComponent(text)}`;

  const langButtons = document.querySelectorAll('.lang-switch__btn');
  const intentButtons = document.querySelectorAll('.intent-switch__btn');
  const heroPrimaryCta = document.getElementById('cta-whatsapp-hero');

  const applyLanguage = (lang) => {
    const L = t[lang];
    document.documentElement.lang = lang;

    setText('#nav-vida', L.navVida);
    setText('#nav-salud', L.navSalud);
    setText('#nav-retiro', L.navRetiro);
    setText('#nav-nosotros', L.navNosotros);
    setText('#nav-equipo', L.navEquipo);
    setText('#nav-contacto', L.navContacto);
    setText('#hero-badge', L.heroBadge);
    setText('#hero-title', L.heroTitle, true);
    setText('#hero-subtitle', L.heroSubtitle);
    const intentSwitch = document.getElementById('intent-switch');
    if (intentSwitch) intentSwitch.setAttribute('aria-label', L.intentAria);

    if (intentButtons[0]) intentButtons[0].textContent = L.intentCliente;
    if (intentButtons[1]) intentButtons[1].textContent = L.intentAgente;

    const ctaAgentHero = document.getElementById('cta-agent-hero');
    if (ctaAgentHero) ctaAgentHero.lastChild.textContent = ` ${L.ctaSecondary}`;
    setText('#cta-office-hero', L.ctaTertiary);

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
    setListText('#services-grid .service-card__link', Array(3).fill(L.servicios.link));

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
    setText('#bio-name', L.porque.bioName);
    setText('#bio-role', L.porque.bioRole);
    setText('#bio-text', L.porque.bioText);

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

    setText('#lead-form .lead-form__title', L.contactFormTitle);
    setText('#lead-name-label', L.formName);
    setText('#lead-phone-label', L.formPhone);
    setText('#lead-intent-label', L.formIntent);
    setText('#lead-state-label', L.formState);

    const nameInput = document.getElementById('lead-name');
    if (nameInput) nameInput.placeholder = L.formNamePlaceholder;

    const submitBtn = document.querySelector('.lead-form__submit');
    if (submitBtn) submitBtn.textContent = L.formSubmit;
    const ctaCallFinal = document.getElementById('cta-call-final');
    if (ctaCallFinal) ctaCallFinal.lastChild.textContent = ` ${L.callNow}`;

    const intentSelect = document.getElementById('lead-intent');
    if (intentSelect && intentSelect.options.length >= 2) {
      intentSelect.options[0].text = L.intents[0];
      intentSelect.options[1].text = L.intents[1];
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

  /* ---- Sticky Header ---- */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile Nav Toggle ---- */
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

  /* ---- Scroll Reveal ---- */
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

  /* ---- Smooth Scroll ---- */
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

  /* ---- Intent switch ---- */
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

  /* ---- Language switch ---- */
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextLang = btn.dataset.lang;
      if (!t[nextLang] || nextLang === currentLang) return;
      currentLang = nextLang;
      localStorage.setItem('izzy_lang', currentLang);
      applyLanguage(currentLang);
    });
  });

  /* ---- Active Nav Link Highlighting ---- */
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

  /* ---- WhatsApp CTA Pulse on mobile ---- */
  document.querySelectorAll('a[href^="https://wa.me"]').forEach((link) => {
    link.addEventListener('touchstart', () => { link.style.transform = 'scale(.97)'; }, { passive: true });
    link.addEventListener('touchend', () => { link.style.transform = ''; }, { passive: true });
  });

  /* ---- Lead form ---- */
  const leadForm = document.getElementById('lead-form');
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

      let isValid = field.checkValidity();
      if (fieldConfig.id === 'lead-phone') {
        const normalized = (field.value || '').replace(/\D/g, '');
        isValid = normalized.length >= 10 && normalized.length <= 15;
      }

      field.setAttribute('aria-invalid', isValid ? 'false' : 'true');
      if (errorEl) {
        errorEl.textContent = isValid ? '' : t[currentLang].validation[fieldConfig.key];
      }
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

      const allValid = formFields.every(validateField);
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

      if (!name || !phone || !intent || !state) return;

      const payload = {
        createdAt: new Date().toISOString(),
        source: 'Landing Caicedo Team',
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
        setStatus(t[currentLang].validation.saving, '');
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
      const text = [
        i18nWa.formIntro,
        `${i18nWa.fields.name}: ${payload.name}`,
        `${i18nWa.fields.phone}: ${payload.phone}`,
        `${i18nWa.fields.intent}: ${payload.intent}`,
        `${i18nWa.fields.state}: ${payload.state}`
      ].join('\n');

      const waUrl = waLink(text);
      if (waPopup) {
        waPopup.location.href = waUrl;
      } else {
        window.location.href = waUrl;
      }
      setStatus(savedToSheet ? t[currentLang].validation.ok : t[currentLang].validation.fail, savedToSheet ? 'is-success' : 'is-error');

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
