# Lliga Padbol Barcelona

Web oficial de la **Lliga Padbol Barcelona**, una liga de Padbol con parejas rotativas, clasificación individual y seguimiento de estadísticas por jornada.

La web está pensada para ofrecer información de la liga, explicar su funcionamiento y consultar la clasificación actual e histórica.

## 🌐 Web

- Beta: https://beta.ligapadbol.es
- Producción: https://www.ligapadbol.es

> Mientras la nueva versión esté en beta, se mantiene `noindex,nofollow` para evitar su indexación en buscadores.

---

## ✨ Funcionalidades

- Web responsive para escritorio y móvil.
- Idiomas **CAT / ESP**.
- Portada con información de la liga.
- Acceso directo por WhatsApp.
- Información de horarios, ubicación y funcionamiento.
- FAQ.
- Clasificación individual.
- Selector de temporadas.
- Estadísticas por jugador.
- Podio automático.
- Fotos de jugadores.
- Datos actualizados desde Google Sheets.
- Caché local para acelerar la carga de la clasificación.
- Precarga de la clasificación desde la portada.
- Imagen social para compartir la web.
- Favicon personalizado.

---

## 🏆 Clasificación

La clasificación se genera automáticamente a partir de los datos almacenados en Google Sheets.

Actualmente están disponibles:

- **2026/27**
- **2025/26**

También se puede abrir directamente una temporada usando:

```text
clasificacion.html?temporada=2026-27
clasificacion.html?temporada=2025-26
```

Los datos se obtienen mediante una API publicada con **Google Apps Script**.

La página utiliza `localStorage` para:

- recordar el idioma seleccionado;
- recordar la temporada;
- guardar temporalmente la última clasificación;
- mostrar los datos más rápido mientras se actualizan en segundo plano.

---

## 📁 Estructura del proyecto

```text
ligapadbol-beta/
├── index.html
├── clasificacion.html
├── CNAME
├── README.md
└── assets/
    ├── padbol-cabecera.webp
    ├── favicon.svg
    └── social-padbol.jpg
```

### `index.html`

Página principal de la liga.

Incluye:

- presentación;
- funcionamiento;
- información práctica;
- FAQ;
- enlaces a clasificación;
- WhatsApp;
- selector CAT / ESP.

### `clasificacion.html`

Página de clasificación.

Incluye:

- clasificación general;
- podio;
- estadísticas por jugador;
- selector de temporada;
- datos obtenidos desde Google Apps Script;
- caché local para mejorar el rendimiento.

### `assets/`

Contiene los recursos gráficos de la web.

---

## ⚙️ Tecnologías

El proyecto está hecho sin frameworks.

- HTML5
- CSS3
- JavaScript
- GitHub Pages
- Google Sheets
- Google Apps Script
- Google Drive para algunas fotos de jugadores

---

## 🚀 Publicación

La web se publica mediante **GitHub Pages**.

El dominio de beta está configurado mediante:

```text
beta.ligapadbol.es
```

El archivo `CNAME` del repositorio contiene el dominio personalizado utilizado por GitHub Pages.

---

## 🔄 Actualización semanal

En condiciones normales no es necesario modificar la web.

El flujo habitual es:

1. Introducir los resultados de la jornada en Google Sheets.
2. Las fórmulas recalculan automáticamente la clasificación.
3. Google Apps Script devuelve los nuevos datos.
4. La web muestra la clasificación actualizada.

Por tanto, para actualizar resultados normalmente **no hace falta modificar GitHub ni el HTML**.

---

## 🧪 Beta y producción

Antes de publicar cambios en producción se prueban primero en:

```text
https://beta.ligapadbol.es
```

Durante esta fase las páginas mantienen:

```html
<meta name="robots" content="noindex,nofollow">
```

Al pasar la web definitivamente a producción será necesario:

- eliminar `noindex,nofollow`;
- actualizar `canonical`;
- actualizar Open Graph;
- cambiar las URLs de `beta.ligapadbol.es` a `www.ligapadbol.es`;
- actualizar el `CNAME`;
- cambiar el DNS de `www` para que apunte a GitHub Pages.

---

## 📱 Rendimiento

La web está optimizada para reducir el tiempo de carga.

Principales optimizaciones:

- imagen principal en WebP;
- recursos gráficos separados del HTML;
- reutilización de la imagen de cabecera;
- precarga de recursos;
- caché de clasificación mediante `localStorage`;
- actualización de datos en segundo plano;
- carga diferida de fotos de jugadores.

---

## 📍 Liga

**Lliga Padbol Barcelona · Temporada 2026/27**

- Jueves
- 20:00–22:00
- CEM Guinardó · Martinenc
- Barcelona

Las parejas se forman y rotan durante la jornada.  
La clasificación es individual.

---

## 📄 Licencia

Proyecto privado de la **Lliga Padbol Barcelona**.

El contenido, imágenes y datos de jugadores no deben reutilizarse sin autorización.
