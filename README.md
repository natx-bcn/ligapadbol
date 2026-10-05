# Lliga Padbol Barcelona

Web oficial de la **Lliga Padbol Barcelona**.

🌐 **Web:** https://www.ligapadbol.es

## Funcionalidades

- Web responsive para escritorio y móvil.
- Idiomas CAT / ESP.
- Información general de la liga y FAQ.
- Acceso por WhatsApp.
- Clasificación individual.
- Selector de temporadas.
- Resultados de partidos por jornada.
- Selector de jornadas y navegación entre jornadas.
- Estadísticas y destacados por jornada.
- Evolución de pista y métricas de rendimiento.
- Galería de fotos y vídeos reales de la liga.
- Normativa de juego: puntuación, saque y balón en juego.
- Podio automático.
- Datos actualizados desde Google Sheets mediante Google Apps Script.
- Caché local para acelerar la carga de datos.
- Precarga de datos desde la portada.
- Favicon e imagen social para compartir la web.

## Temporadas

Actualmente disponibles:

- 2026/27
- 2025/26

Acceso directo a la clasificación:

```text
https://www.ligapadbol.es/clasificacion.html?temporada=2026-27
https://www.ligapadbol.es/clasificacion.html?temporada=2025-26
```

## Secciones principales

```text
https://www.ligapadbol.es/
https://www.ligapadbol.es/clasificacion.html
https://www.ligapadbol.es/partits.html
https://www.ligapadbol.es/estadistiques.html
https://www.ligapadbol.es/galeria.html
https://www.ligapadbol.es/normativa.html
```

## Estructura

```text
ligapadbol/
├── index.html
├── clasificacion.html
├── partits.html
├── estadistiques.html
├── galeria.html
├── normativa.html
├── CNAME
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── padbol-cabecera.webp
    ├── favicon.svg
    ├── social-padbol.jpg
    └── galeria/
        ├── padbol-galeria-01.jpg
        ├── padbol-galeria-02.jpg
        ├── ...
        ├── padbol-galeria-08.jpg
        ├── padbol-partit-01.jpg
        ├── padbol-partit-01.mp4
        └── padbol-video-poster.jpg
```

## Tecnologías

- HTML5
- CSS3
- JavaScript
- GitHub Pages
- Google Sheets
- Google Apps Script
- Google Drive

## Datos y actualización semanal

Normalmente solo hay que introducir los resultados de cada jornada en Google Sheets.

A partir de esos datos:

- La clasificación se recalcula automáticamente.
- La página de **Partits** muestra los resultados agrupados por jornada y pista.
- La página de **Estadístiques** calcula los destacados de cada jornada.
- La portada muestra automáticamente el resumen de la última jornada.
- La API de Google Apps Script devuelve los datos actualizados a la web.

No es necesario modificar GitHub después de cada jornada.

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
