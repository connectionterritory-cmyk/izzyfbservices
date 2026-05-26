# IZZY Financial & Business Services

**Landing page estática para GitHub Pages**

🌐 **URL:** https://connectionterritory-cmyk.github.io/izzyfbservices/  
📞 **Teléfono / WhatsApp:** (818) 266-7038  
📍 **Área de servicio:** California & Florida

---

## Descripción

Landing page profesional, bilingüe y responsiva para IZZY Financial & Business Services. Diseñada para convertir visitantes en prospectos a través de WhatsApp y llamada directa, comunicando tanto los servicios al cliente como la oportunidad para agentes y productores.

### Secciones
1. **Hero** — Propuesta de valor principal con CTA doble
2. **Servicios** — 6 tarjetas de servicio con links directos a WhatsApp
3. **Oportunidad para agentes** — Programa de desarrollo profesional
4. **Nuestro método** — 6 pasos del proceso de formación
5. **Por qué IZZY** — Diferenciadores de la marca
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
| Teléfono | (818) 266-7038 |
| WhatsApp | https://wa.me/18182667038 |
| Área | California & Florida |

---

## Cómo editar

### Cambiar número de WhatsApp / teléfono
Busca `18182667038` en `index.html` y reemplaza con el número nuevo (formato internacional sin `+`).  
Busca `8182667038` para los links `tel:`.

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

---

© 2026 IZZY Financial & Business Services. Todos los derechos reservados.
