/**
 * IZZY Financial & Business Services — script.js
 * Features: sticky header, mobile nav, scroll reveal, smooth scroll
 */

(function () {
  'use strict';
  const LEADS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxSbryrhzhA58y5RoyY6bXXnagUE8WVFF5z0UDWDgMs7GXGrtQNvNXos-WoXzGJoKeNfQ/exec';

  /* ---- Sticky Header ---- */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ---- Mobile Nav Toggle ---- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav   = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close nav on outside click
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all elements immediately
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---- Smooth Scroll for Anchor Links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

  /* ---- Hero intent switch ---- */
  const intentButtons = document.querySelectorAll('.intent-switch__btn');
  const heroPrimaryCta = document.getElementById('cta-whatsapp-hero');

  if (intentButtons.length && heroPrimaryCta) {
    const intentConfig = {
      cliente: {
        label: 'Empezar consulta',
        href: 'https://wa.me/18182667038?text=Hola%2C%20quiero%20una%20consulta%20sobre%20los%20servicios%20de%20IZZY'
      },
      agente: {
        label: 'Aplicar como agente',
        href: 'https://wa.me/18182667038?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20oportunidad%20para%20agentes'
      },
      oficina: {
        label: 'Abrir mi oficina IZZY',
        href: 'https://wa.me/18182667038?text=Hola%2C%20quiero%20conocer%20el%20modelo%20para%20abrir%20una%20oficina%20IZZY'
      }
    };

    intentButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const { intent } = button.dataset;
        const config = intentConfig[intent];
        if (!config) return;

        intentButtons.forEach((btn) => {
          btn.classList.remove('is-active');
          btn.setAttribute('aria-selected', 'false');
        });

        button.classList.add('is-active');
        button.setAttribute('aria-selected', 'true');
        heroPrimaryCta.href = config.href;
        heroPrimaryCta.lastChild.textContent = ` ${config.label}`;
      });
    });
  }

  /* ---- Active Nav Link Highlighting ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__link[href^="#"]');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              const isActive = link.getAttribute('href') === `#${id}`;
              link.style.color = isActive ? 'var(--c-gold-light)' : '';
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  /* ---- WhatsApp CTA Pulse on mobile ---- */
  const waLinks = document.querySelectorAll('a[href^="https://wa.me"]');
  waLinks.forEach(link => {
    link.addEventListener('touchstart', () => {
      link.style.transform = 'scale(.97)';
    }, { passive: true });
    link.addEventListener('touchend', () => {
      link.style.transform = '';
    }, { passive: true });
  });

  /* ---- Lead form to WhatsApp ---- */
  const leadForm = document.getElementById('lead-form');
  const leadStatus = document.getElementById('lead-form-status');
  if (leadForm) {
    const formFields = [
      { id: 'lead-name', message: 'Ingresa tu nombre.' },
      { id: 'lead-phone', message: 'Ingresa un teléfono válido (mínimo 10 dígitos).' },
      { id: 'lead-intent', message: 'Selecciona tu intención.' },
      { id: 'lead-state', message: 'Selecciona tu estado.' }
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
        isValid = normalized.length >= 10;
      }

      field.setAttribute('aria-invalid', isValid ? 'false' : 'true');
      if (errorEl) errorEl.textContent = isValid ? '' : fieldConfig.message;
      return isValid;
    };

    formFields.forEach((fieldConfig) => {
      const field = document.getElementById(fieldConfig.id);
      if (!field) return;
      field.addEventListener('input', () => validateField(fieldConfig));
      field.addEventListener('change', () => validateField(fieldConfig));
      field.setAttribute('aria-invalid', 'false');
    });

    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const allValid = formFields.every(validateField);
      if (!allValid) {
        setStatus('Revisa los campos marcados antes de enviar.', 'is-error');
        return;
      }

      const name = document.getElementById('lead-name')?.value.trim();
      const phone = document.getElementById('lead-phone')?.value.trim();
      const intent = document.getElementById('lead-intent')?.value;
      const state = document.getElementById('lead-state')?.value;

      if (!name || !phone || !intent || !state) return;

      const payload = {
        createdAt: new Date().toISOString(),
        source: 'Landing IZZY',
        name,
        phone,
        intent,
        state
      };

      let savedToSheet = false;
      if (LEADS_WEBHOOK_URL) {
        setStatus('Guardando lead...', '');
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

      const text = [
        'Hola, quiero una consulta.',
        `Nombre: ${payload.name}`,
        `Teléfono: ${payload.phone}`,
        `Intención: ${payload.intent}`,
        `Estado: ${payload.state}`
      ].join('\n');

      const whatsappUrl = `https://wa.me/18182667038?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank', 'noopener');
      setStatus(
        savedToSheet
          ? 'Listo: lead guardado en Google Sheets y enviado por WhatsApp.'
          : 'Enviado por WhatsApp. No se pudo confirmar guardado en Sheets.',
        savedToSheet ? 'is-success' : 'is-error'
      );
      leadForm.reset();
      formFields.forEach(({ id }) => {
        const field = document.getElementById(id);
        const errorEl = document.getElementById(`${id}-error`);
        if (field) field.setAttribute('aria-invalid', 'false');
        if (errorEl) errorEl.textContent = '';
      });
    });
  }

})();
