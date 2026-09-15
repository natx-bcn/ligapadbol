# Lliga Padbol Barcelona

Web oficial de la **Lliga Padbol Barcelona**.

🌐 **Web:** https://www.ligapadbol.es

## Funcionalidades

- Web responsive para escritorio y móvil.
- Idiomas CAT / ESP.
- Información de la liga y FAQ.
- Acceso por WhatsApp.
- Clasificación individual.
- Selector de temporadas.
- Estadísticas por jugador.
- Podio automático.
- Datos actualizados desde Google Sheets mediante Google Apps Script.
- Caché local para acelerar la clasificación.
- Precarga de datos desde la portada.
- Favicon e imagen social para compartir la web.

## Temporadas

Actualmente disponibles:

- 2026/27
- 2025/26

Acceso directo:

```text
https://www.ligapadbol.es/clasificacion.html?temporada=2026-27
https://www.ligapadbol.es/clasificacion.html?temporada=2025-26
```

## Estructura

```text
ligapadbol/
├── index.html
├── clasificacion.html
├── CNAME
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── padbol-cabecera.webp
    ├── favicon.svg
    └── social-padbol.jpg
```

## Tecnologías

- HTML5
- CSS3
- JavaScript
- GitHub Pages
- Google Sheets
- Google Apps Script
- Google Drive

## Actualización semanal

Normalmente solo hay que introducir los resultados en Google Sheets.

Las fórmulas recalculan la clasificación, la API de Apps Script devuelve los datos actualizados y la web los muestra automáticamente. No es necesario modificar GitHub cada jornada.

## Publicación

La web se publica con GitHub Pages y utiliza el dominio personalizado:

```text
www.ligapadbol.es
```

El dominio raíz `ligapadbol.es` redirige a `www.ligapadbol.es`.

## Liga

**Lliga Padbol Barcelona · Temporada 2026/27**

- Jueves
- 20:00–22:00
- CEM Guinardó · Martinenc
- Barcelona

Las parejas rotan durante la jornada y la clasificación es individual.

## Licencia

Proyecto privado de la **Lliga Padbol Barcelona**.

El contenido, las imágenes y los datos de jugadores no deben reutilizarse sin autorización.
