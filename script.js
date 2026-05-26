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
      navServicios: 'Orientación', navModelo: 'Taxes & ITIN', navAgentes: 'Agentes', navSistema: 'Oficinas', navContacto: 'Contáctanos',
      heroBadge: 'Launchpad financiero para la comunidad hispana',
      heroTitle: 'Todo lo que necesitas para<br><span class="gradient-text">proteger, organizar y crecer.</span>',
      heroSubtitle: 'Te ayudamos a entender tus opciones, organizar documentos y recibir orientación inicial en áreas como protección familiar, taxes, ITIN, registro de negocios y servicios administrativos.',
      intentAria: 'Elige tu intención', intentCliente: 'Soy cliente', intentAgente: 'Soy agente', intentOficina: 'Quiero oficina',
      ctaSecondary: 'Ver todos los servicios', ctaTertiary: 'Hablar con un asesor',
      trust: ['Atención bilingüe', 'California & Florida', 'Consulta sin costo', 'Apoyo administrativo', 'Modelo para agentes'],
      stats: ['Servicios', 'Estados', 'Sistema'],
      visualEyebrow: 'Atención real, imagen profesional',
      visualTitle: 'Una experiencia <span class="gradient-text">moderna y confiable</span>',
      visualDesc: 'Combinamos asesoría humana, estructura operativa y acompañamiento bilingüe para familias, agentes y emprendedores.',
      visualCards: {
        titles: ['Asesoría clara', 'Crecimiento estructurado', 'Resultados con seguimiento'],
        descs: [
          'Orientación inicial y servicios para familias y emprendedores.',
          'Modelo serio para agentes y oficinas multiservices.',
          'Procesos, CRM y acompañamiento continuo para avanzar.'
        ]
      },
      categories: ['Protección familiar', 'Taxes, ITIN y documentos', 'Apoyo administrativo', 'Modelo de oficina multiservices'],
      caminos: {
        eyebrow: 'Elige tu camino',
        title: 'Una plataforma para <span class="gradient-text">clientes, agentes y emprendedores</span>',
        desc: 'IZZY conecta servicios esenciales con entrenamiento, seguimiento y una visión empresarial duplicable para la comunidad hispana.',
        labels: ['Soy Cliente', 'Soy Agente', 'Quiero Emprender'],
        cardTitles: ['Protege y organiza tu vida financiera.', 'Construye una carrera con estructura.', 'Desarrolla una oficina multiservices.'],
        cardDescs: [
          'Apoyo inicial para personas que desean entender opciones de protección familiar, organización financiera, documentos y servicios de apoyo.',
          'Entrenamiento, seguimiento, referidos y expansión multiservices para agentes que quieren crecer con un sistema serio.',
          'Un modelo duplicable con CRM, marketing, procesos y múltiples líneas de servicio para crear presencia local.'
        ],
        links: ['Necesito servicios →', 'Quiero crecer como agente →', 'Quiero abrir una oficina →']
      },
      servicios: {
        eyebrow: 'Ecosistema de servicios',
        title: 'Servicios que ayudan a <span class="gradient-text">proteger, organizar y crecer</span>',
        desc: 'Reunimos protección, trámites y soporte empresarial para servir mejor a cada familia, cliente y emprendedor.',
        pills: ['Atención bilingüe', 'California & Florida', 'Consulta inicial sin costo'],
        link: 'Consulta gratis →',
        titles: ['Protección familiar', 'Orientación financiera inicial', 'Taxes', 'ITIN', 'Registro de negocios', 'Apoyo administrativo', 'Document Support', 'Servicios para pequeños negocios'],
        descs: [
          'Cobertura personal y comercial con comparación de opciones para elegir con claridad.',
          'Opciones de término, vida entera e IUL para proteger a tu familia y tu legado.',
          'Planes ACA y suplementarios con acompañamiento para encontrar el mejor ajuste.',
          'Asesoría en Advantage, Medigap y Parte D con explicación simple de costos y beneficios.',
          'Responsabilidad general, propiedad comercial y coberturas clave para operar con tranquilidad.',
          'Impuestos personales/comerciales, ITIN, registro y nómina en una sola ruta de servicio.',
          'Apoyo en trámites DMV y documentos con guía paso a paso, sin barrera de idioma.',
          'Estructura, orientación financiera y soporte práctico para emprender con base sólida.'
        ]
      },
      modelo: {
        eyebrow: 'Modelo multiservices',
        title: 'Un modelo de servicios para apoyar a la comunidad.',
        desc: 'El objetivo no es vender un producto aislado. Es construir una cartera, generar seguimiento, abrir nuevas líneas de servicio y desarrollar una operación local con procesos.'
      },
      agentes: {
        eyebrow: 'Oportunidad profesional',
        title: 'Para agentes con <span class="gradient-text">mentalidad empresarial</span>',
        desc: 'Una oportunidad seria para agentes de vida y salud que quieren desarrollar múltiples líneas de ingreso, mejor seguimiento y una ruta hacia el modelo multiservices.',
        benefitTitles: ['Construye una cartera', 'Desarrolla varias líneas', 'Entrenamiento y scripts', 'Sistema de seguimiento', 'Crecimiento acompañado', 'Modelo duplicable'],
        benefitDescs: [
          'Aprende a servir clientes con seguimiento, renovaciones, referidos y relaciones sostenibles.',
          'Conecta servicios administrativos y de apoyo según la necesidad real de la comunidad.',
          'Producto, ventas, cumplimiento, mensajes de WhatsApp y conversaciones consultivas.',
          'CRM, etiquetas, recordatorios y campañas para no depender de memoria ni mensajes sueltos.',
          'Mentoría, revisión de oportunidades y enfoque en hábitos comerciales consistentes.',
          'Una ruta para pasar de productor a líder, equipo y eventualmente oficina multiservices.'
        ],
        ctas: ['Aplicar como agente', 'Quiero el modelo de oficina']
      },
      sistema: {
        eyebrow: 'Sistema IZZY',
        title: 'Infraestructura para <span class="gradient-text">crecer con orden</span>',
        desc: 'La diferencia está en el seguimiento. IZZY combina servicios, procesos y automatización para convertir conversaciones en relaciones de largo plazo.',
        itemTitles: ['Pipeline de leads', 'WhatsApp follow-up', 'Campañas locales', 'Referidos y renovaciones', 'Entrenamiento', 'Procesos duplicables'],
        itemDescs: [
          'Clientes, agentes y prospectos de oficina organizados por etapa, interés y próxima acción.',
          'Mensajes por intención: consulta, agente u oficina, con seguimiento claro y humano.',
          'Temporadas de taxes y negocios con mensajes de orientación segmentados.',
          'Proceso para pedir reseñas, referidos, revisiones anuales y oportunidades cruzadas.',
          'Guías, scripts, sesiones y hábitos comerciales para agentes y equipos en crecimiento.',
          'Plantillas, checklist y estructura para futuras oficinas multiservices IZZY.'
        ]
      },
      porque: {
        eyebrow: 'Nuestra diferencia',
        title: '¿Por qué <span class="gradient-text">IZZY</span>?',
        desc: 'Porque combinamos confianza comunitaria con una mentalidad empresarial moderna: servicios, seguimiento y desarrollo de agentes bajo una misma marca.',
        itemTitles: ['100% Bilingüe', 'Agente Independiente', 'Mentalidad de Sistema', 'Enfocados en la Comunidad'],
        itemDescs: [
          'Atención completa en español e inglés. Explicamos los detalles sin barreras de idioma.',
          'No estamos atados a una sola compañía. Buscamos la mejor opción del mercado para ti.',
          'No improvisamos seguimiento. Organizamos leads, citas, renovaciones y oportunidades.',
          'Servimos principalmente a familias latinas y comunidades inmigrantes con empatía y respeto.'
        ]
      },
      resultados: {
        eyebrow: 'Base de confianza',
        title: 'Estamos en fase de <span class="gradient-text">lanzamiento</span>',
        desc: 'Todavía no publicamos métricas numéricas. Preferimos transparencia total mientras construimos resultados medibles.',
        metricsStrong: ['Atención bilingüe', 'Cobertura activa', 'Consulta inicial', 'Seguimiento'],
        metricsDesc: ['Español e inglés', 'California y Florida', 'Orientación clara por WhatsApp o llamada', 'Proceso paso a paso por intención'],
        testimonialText: [
          'Persona que busca resolver sus trámites y taxes en un solo lugar, con explicación simple y acompañamiento en español.',
          'Agente que empieza con una línea y evoluciona a una operación con seguimiento, cartera y servicios complementarios.',
          'Emprendedor que quiere abrir oficina multiservices con estructura comercial, procesos y soporte operativo.'
        ],
        testimonialRole: ['Caso tipo · Cliente', 'Caso tipo · Agente', 'Caso tipo · Oficina']
      },
      ctaFinal: {
        title: 'Empieza por el camino correcto.',
        desc: 'Ya sea que necesites servicios, quieras crecer como agente o estés explorando una oficina multiservices, IZZY te recibe con una conversación clara.',
        cards: ['Necesito servicios', 'Quiero crecer como agente', 'Quiero abrir una oficina'],
        cardSubs: ['Servicios para familias y emprendedores', 'Entrenamiento, cartera y seguimiento', 'Modelo multiservices duplicable']
      },
      footer: {
        tagline: 'Protegiendo familias, construyendo futuros.',
        plataforma: 'Plataforma',
        serviciosClave: 'Servicios clave',
        contacto: 'Contacto',
        links1: ['Servicios', 'Ruta para agentes', 'Modelo para oficinas', 'Sistema IZZY'],
        links2: ['Protección familiar', 'Orientación financiera inicial', 'Taxes', 'ITIN', 'Registro de negocios', 'Apoyo administrativo'],
        contactMeta: ['California & Florida', 'Lun-Sáb · Atención por cita'],
        disclaimer: 'IZZY Financial & Business Services ofrece orientación general y servicios administrativos. Algunos servicios pueden requerir licencia, autorización, appointment, revisión profesional independiente o cumplimiento de requisitos estatales y federales. La disponibilidad de servicios puede variar según el estado, proveedor, elegibilidad y regulación aplicable. No se garantizan aprobaciones, tarifas, coberturas, ahorros, ingresos ni resultados. IZZY Financial & Business Services no está afiliado, respaldado ni aprobado por ninguna entidad gubernamental, programa federal, departamento estatal, carrier o compañía de seguros, salvo que se indique expresamente por escrito. © 2026 IZZY Financial & Business Services. Todos los derechos reservados.'
      },
      contactFormTitle: 'Cuéntanos qué necesitas', formName: 'Nombre', formPhone: 'Teléfono', formIntent: 'Intención', formState: 'Estado',
      formNamePlaceholder: 'Tu nombre', formSubmit: 'Enviar por WhatsApp', callNow: 'Llamar Ahora',
      states: ['California', 'Florida', 'Otro'],
      intents: ['Soy cliente', 'Soy agente', 'Quiero oficina'],
      validation: {
        name: 'Ingresa tu nombre.',
        phone: 'Ingresa un teléfono válido (mínimo 10 dígitos).',
        intent: 'Selecciona tu intención.',
        state: 'Selecciona tu estado.',
        review: 'Revisa los campos marcados antes de enviar.',
        saving: 'Guardando lead...',
        ok: 'Listo: lead guardado en Google Sheets y enviado por WhatsApp.',
        fail: 'Enviado por WhatsApp. No se pudo confirmar guardado en Sheets.'
      },
      wa: {
        hero: {
          cliente: { label: 'Empezar consulta', text: 'Hola, quiero orientación inicial sobre servicios para familias o emprendedores.' },
          agente: { label: 'Aplicar como agente', text: 'Hola, quiero más información sobre IZZY Financial & Business Services.' },
          oficina: { label: 'Abrir mi oficina IZZY', text: 'Hola, quiero conocer el modelo multiservices de IZZY.' }
        },
        formIntro: 'Hola, quiero una consulta.',
        fields: { name: 'Nombre', phone: 'Teléfono', intent: 'Intención', state: 'Estado' }
      }
    },
    en: {
      navServicios: 'Guidance', navModelo: 'Taxes & ITIN', navAgentes: 'Agents', navSistema: 'Offices', navContacto: 'Contact Us',
      heroBadge: 'Financial launchpad for the Hispanic community',
      heroTitle: 'Everything you need to<br><span class="gradient-text">protect, organize, and grow.</span>',
      heroSubtitle: 'We help you understand your options, organize documents, and receive initial guidance in areas like family protection, taxes, ITIN, business registration, and administrative services.',
      intentAria: 'Choose your path', intentCliente: 'I am a client', intentAgente: 'I am an agent', intentOficina: 'I want an office',
      ctaSecondary: 'View all services', ctaTertiary: 'Talk to an advisor',
      trust: ['Bilingual service', 'California & Florida', 'Free consultation', 'Administrative Support', 'Agent growth model'],
      stats: ['Services', 'States', 'System'],
      visualEyebrow: 'Real service, professional image',
      visualTitle: 'A <span class="gradient-text">modern and trusted</span> experience',
      visualDesc: 'We combine human guidance, operational structure, and bilingual support for families, agents, and entrepreneurs.',
      visualCards: {
        titles: ['Clear guidance', 'Structured growth', 'Results with follow-up'],
        descs: [
          'Step-by-step guidance for family and business services.',
          'A serious model for agents and multi-services offices.',
          'Processes, CRM, and ongoing support to move forward.'
        ]
      },
      categories: ['Family Protection', 'Taxes, ITIN, and documents', 'Learning pathway', 'Multi-services office model'],
      caminos: {
        eyebrow: 'Choose your path',
        title: 'One platform for <span class="gradient-text">clients, agents, and entrepreneurs</span>',
        desc: 'IZZY connects essential services with training, follow-up, and a scalable business vision for the Hispanic community.',
        labels: ['I am a Client', 'I am an Agent', 'I want to Build'],
        cardTitles: ['Protect and organize your financial life.', 'Build a career with structure.', 'Develop a multi-services office.'],
        cardDescs: [
          'Initial support for people who want to understand options for family protection, financial organization, documents, and support services.',
          'Training, follow-up, referrals, and multi-service expansion for agents who want to grow with a serious system.',
          'A scalable model with CRM, marketing, processes, and multiple service lines to build local presence.'
        ],
        links: ['I need services →', 'I want to grow as an agent →', 'I want to open an office →']
      },
      servicios: {
        eyebrow: 'Service ecosystem',
        title: 'Services that help you <span class="gradient-text">protect, organize, and grow</span>',
        desc: 'We bring together protection, paperwork, and business support to serve every family, client, and entrepreneur better.',
        pills: ['Bilingual service', 'California & Florida', 'Free initial consultation'],
        link: 'Free consultation →',
        titles: ['Family Protection', 'Initial Financial Guidance', 'Taxes', 'ITIN', 'Business Registration', 'Administrative Support', 'Document Support', 'Small Business Support'],
        descs: [
          'Personal and commercial coverage with option comparisons so you can choose with clarity.',
          'Term, whole life, and IUL options to protect your family and legacy.',
          'ACA and supplemental plans with guidance to find the best fit.',
          'Guidance on Advantage, Medigap, and Part D with simple cost and benefit explanations.',
          'General liability, commercial property, and key coverages to operate with peace of mind.',
          'Personal/business taxes, ITIN, registration, and payroll in one service path.',
          'Support with DMV procedures and documents, step by step and without language barriers.',
          'Structure, financial guidance, and practical support to build with a solid foundation.'
        ]
      },
      modelo: {
        eyebrow: 'Multi-services model',
        title: 'A service model to support the community.',
        desc: 'The goal is not to sell a single product. It is to build a portfolio, create follow-up, open new service lines, and develop a local operation with processes.'
      },
      agentes: {
        eyebrow: 'Professional opportunity',
        title: 'For agents with an <span class="gradient-text">entrepreneurial mindset</span>',
        desc: 'A serious opportunity for life and health agents who want to develop multiple income lines, stronger follow-up, and a path toward the multi-services model.',
        benefitTitles: ['Build a portfolio', 'Develop multiple lines', 'Training and scripts', 'Follow-up system', 'Guided growth', 'Scalable model'],
        benefitDescs: [
          'Learn to serve clients with follow-up, renewals, referrals, and sustainable relationships.',
          'Connect administrative and support services based on real community needs.',
          'Product, sales, compliance, WhatsApp messaging, and consultative conversations.',
          'CRM, tags, reminders, and campaigns so you do not depend on memory or scattered messages.',
          'Mentorship, opportunity review, and focus on consistent commercial habits.',
          'A path to move from producer to leader, team, and eventually a multi-services office.'
        ],
        ctas: ['Apply as an agent', 'I want the office model']
      },
      sistema: {
        eyebrow: 'IZZY System',
        title: 'Infrastructure to <span class="gradient-text">grow with order</span>',
        desc: 'The difference is follow-up. IZZY combines services, processes, and automation to turn conversations into long-term relationships.',
        itemTitles: ['Lead pipeline', 'WhatsApp follow-up', 'Local campaigns', 'Referrals and renewals', 'Training', 'Scalable processes'],
        itemDescs: [
          'Clients, agents, and office prospects organized by stage, interest, and next action.',
          'Intent-based messaging: consultation, agent, or office, with clear and human follow-up.',
          'Tax season and business campaigns with segmented guidance messaging.',
          'A process to request reviews, referrals, annual check-ins, and cross-selling opportunities.',
          'Guides, scripts, sessions, and sales habits for agents and growing teams.',
          'Templates, checklists, and structure for future IZZY multi-services offices.'
        ]
      },
      porque: {
        eyebrow: 'Our difference',
        title: 'Why <span class="gradient-text">IZZY</span>?',
        desc: 'Because we combine community trust with a modern business mindset: services, follow-up, and agent development under one brand.',
        itemTitles: ['100% Bilingual', 'Independent Agent', 'System Mindset', 'Community Focused'],
        itemDescs: [
          'Full service in Spanish and English. We explain details without language barriers.',
          'We are not tied to a single carrier. We search for the best market option for you.',
          'We do not improvise follow-up. We organize leads, appointments, renewals, and opportunities.',
          'We primarily serve Latino families and immigrant communities with empathy and respect.'
        ]
      },
      resultados: {
        eyebrow: 'Trust foundation',
        title: 'We are in a <span class="gradient-text">launch phase</span>',
        desc: 'We are not publishing numeric metrics yet. We prefer full transparency while we build measurable results.',
        metricsStrong: ['Bilingual service', 'Active coverage', 'Initial consultation', 'Follow-up'],
        metricsDesc: ['Spanish and English', 'California and Florida', 'Clear guidance via WhatsApp or phone', 'Step-by-step process by intent'],
        testimonialText: [
          'A person looking to solve their paperwork and taxes in one place, with simple explanation and Spanish support.',
          'An agent who starts with one line and evolves into an operation with follow-up, portfolio, and complementary services.',
          'An entrepreneur who wants to open a multi-services office with commercial structure, processes, and operational support.'
        ],
        testimonialRole: ['Case type · Client', 'Case type · Agent', 'Case type · Office']
      },
      ctaFinal: {
        title: 'Start on the right path.',
        desc: 'Whether you need services, want to grow as an agent, or are exploring a multi-services office, IZZY welcomes you with a clear conversation.',
        cards: ['I need services', 'I want to grow as an agent', 'I want to open an office'],
        cardSubs: ['Services for families and entrepreneurs', 'Training, portfolio, and follow-up', 'Scalable multi-services office model']
      },
      footer: {
        tagline: 'Protecting families, building futures.',
        plataforma: 'Platform',
        serviciosClave: 'Key services',
        contacto: 'Contact',
        links1: ['Services', 'Agent pathway', 'Office model', 'IZZY System'],
        links2: ['Family Protection', 'Initial Financial Guidance', 'Taxes', 'ITIN', 'Business Registration', 'Administrative Support'],
        contactMeta: ['California & Florida', 'Mon-Sat · By appointment'],
        disclaimer: 'IZZY Financial & Business Services offers general guidance and administrative services. Some services may require licensing, authorization, appointment, independent professional review, or compliance with state and federal requirements. Availability of services may vary by state, provider, eligibility, and applicable regulations. Approvals, rates, coverages, savings, income, or results are not guaranteed. IZZY Financial & Business Services is not affiliated with, endorsed by, or approved by any government entity, federal program, state department, carrier, or insurance company, unless expressly stated in writing. © 2026 IZZY Financial & Business Services. All rights reserved.'
      },
      contactFormTitle: 'Tell us what you need', formName: 'Name', formPhone: 'Phone', formIntent: 'Intent', formState: 'State',
      formNamePlaceholder: 'Your name', formSubmit: 'Send via WhatsApp', callNow: 'Call Now',
      states: ['California', 'Florida', 'Other'],
      intents: ['I am a client', 'I am an agent', 'I want an office'],
      validation: {
        name: 'Please enter your name.',
        phone: 'Please enter a valid phone number (at least 10 digits).',
        intent: 'Please select your intent.',
        state: 'Please select your state.',
        review: 'Please review the highlighted fields before submitting.',
        saving: 'Saving lead...',
        ok: 'Done: lead saved to Google Sheets and sent via WhatsApp.',
        fail: 'Sent via WhatsApp. Could not confirm save to Sheets.'
      },
      wa: {
        hero: {
          cliente: { label: 'Start consultation', text: 'Hi, I want initial guidance on services for families or entrepreneurs.' },
          agente: { label: 'Apply as agent', text: 'Hi, I want more information about IZZY Financial & Business Services.' },
          oficina: { label: 'Open my IZZY office', text: 'Hi, I want to learn about the IZZY multiservices model.' }
        },
        formIntro: 'Hi, I want a consultation.',
        fields: { name: 'Name', phone: 'Phone', intent: 'Intent', state: 'State' }
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

  const waLink = (text) => `https://wa.me/18182667038?text=${encodeURIComponent(text)}`;

  const langButtons = document.querySelectorAll('.lang-switch__btn');
  const intentButtons = document.querySelectorAll('.intent-switch__btn');
  const heroPrimaryCta = document.getElementById('cta-whatsapp-hero');

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
    setListText('#services-grid .service-card__link', Array(8).fill(L.servicios.link));

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
