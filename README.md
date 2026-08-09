# Caicedo Team (IZZY Financial & Business Services)

**Landing page estática para GitHub Pages**

🌐 **URL:** https://connectionterritory-cmyk.github.io/izzyfbservices/  
📞 **Teléfono / WhatsApp:** (786) 614-6546  
📍 **Área de servicio:** California & Florida

---

## Descripción

Landing page profesional, bilingüe y responsiva para Caicedo Team, agencia independiente de seguros de vida, salud/Medicare y retiro. Diseñada para convertir visitantes en prospectos a través de WhatsApp y llamada directa, comunicando tanto la protección al cliente como la oportunidad profesional para agentes.

### Secciones
1. **Hero** — Propuesta de valor principal con CTA doble (proteger a mi familia / oportunidad profesional)
2. **Nuestros pilares** — Vida, Salud y Medicare, Retiro con links directos a WhatsApp
3. **Modelo de crecimiento** — Roadmap de agente independiente a líder de equipo
4. **Únete a Caicedo Team** — Oportunidad profesional para agentes
5. **Nosotros** — Diferenciadores de la marca + bio de Moisés Caicedo
6. **CTA Final** — WhatsApp y llamada directa
7. **Footer** — Contacto y disclaimer legal

---

## Tecnología

- **HTML5** estático, sin frameworks
- **CSS3** con variables custom, animaciones y diseño responsivo (mobile-first)
- **JavaScript** puro — sin dependencias externas
- **Google Fonts** — Playfair Display + Inter
- Compatible con **GitHub Pages** sin configuración adicional

---

## Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura completa de la página |
| `styles.css` | Todo el diseño visual y responsivo |
| `script.js` | Header sticky, nav móvil, scroll suave, reveal animations |
| `README.md` | Este archivo |

---

## Contacto configurado

| Canal | Valor |
|---|---|
| Teléfono | (786) 614-6546 |
| WhatsApp | https://wa.me/17866146546 |
| Área | California & Florida |

---

## Cómo editar

### Cambiar número de WhatsApp / teléfono
Busca `17866146546` en `index.html` y reemplaza con el número nuevo (formato internacional sin `+`).  
Busca `7866146546` para los links `tel:`.

### Conectar leads a Google Sheets
1. Crea una hoja de cálculo en Google Sheets.
2. Ve a `Extensiones > Apps Script`.
3. Pega el contenido de [google-apps-script.gs](/Users/connectionworldwidemoisescaicedo/Desktop/izzy%20Financial%20Business%20Services/google-apps-script.gs).
4. `Deploy > New deployment > Web app`.
5. Ejecutar como: `Me`; Acceso: `Anyone`.
6. Copia la URL del Web App.
7. En [script.js](/Users/connectionworldwidemoisescaicedo/Desktop/izzy%20Financial%20Business%20Services/script.js), pega esa URL en `LEADS_WEBHOOK_URL`.
8. Publica cambios en GitHub Pages.

### Cambiar textos
Edita directamente en `index.html` — los textos están en español y son fáciles de localizar.

### Cambiar colores
En `styles.css` las primeras líneas tienen las variables:
```css
--c-navy:  #0d1f3c;
--c-gold:  #c9a030;
```

---

## Notas de cumplimiento

- No se prometen resultados específicos
- No se afirma ser aseguradora oficial
- Disclaimer legal visible en el footer
- Todos los servicios sujetos a licencia y elegibilidad
- Sin logos ni marcas de terceros

---

## Historial de versiones

| Versión | Descripción |
|---|---|
| v1.0 | Lanzamiento inicial — servicios básicos |
| v2.0 | Rediseño completo — servicios + oportunidad de agente + método profesional |
| v3.0 | Rebranding a Caicedo Team — pilares Vida/Salud/Retiro, sección Nosotros con bio, WhatsApp (786) 614-6546 |

---

## Pendiente antes de publicar

- [ ] Reemplazar la foto placeholder en `#bio-card` (`index.html`) por una foto real de Moisés Caicedo
- [ ] Reemplazar el texto `bioText` en `script.js` (objetos `t.es.porque` y `t.en.porque`) por la historia real
- [ ] Confirmar si el logo (`assets/izzy-eagle-logo.png`) se reemplaza por un logo propio de Caicedo Team
- [ ] Confirmar colores de marca finales (actualmente se mantiene la paleta navy/verde-azulado existente)

---

© 2026 Caicedo Team. Todos los derechos reservados.
