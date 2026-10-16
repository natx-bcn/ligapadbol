
(() => {
  const standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    document.referrer.startsWith('android-app://');

  if (!standalone) return;

  const icons = {
    home: '<path d="m3 10 9-7 9 7v11H3z"/><path d="M9 21v-8h6v8"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v3a4 4 0 0 0 4 4M17 6h3v3a4 4 0 0 1-4 4"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h3"/>',
    stats: '<path d="M4 20V12h4v8M10 20V4h4v16M16 20v-11h4v11"/>',
    gallery: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>'
  };

  const links = [
    ['Inici', '/', 'home'],
    ['Classif.', '/clasificacion.html', 'trophy'],
    ['Partits', '/partits.html', 'calendar'],
    ['Estad.', '/estadistiques.html', 'stats'],
    ['Galeria', '/galeria.html', 'gallery']
  ];

  const style = document.createElement('style');

  style.textContent = `
    @media (max-width: 800px) {
      body {
        padding-bottom: calc(86px + env(safe-area-inset-bottom, 0px)) !important;
      }

      .lp-app-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99999;
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        padding: 10px 4px calc(10px + env(safe-area-inset-bottom, 0px));
        background: #081523;
        border-top: 1px solid rgba(255,255,255,.12);
        box-shadow: 0 -5px 25px rgba(0,0,0,.2);
      }

      .lp-app-nav a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        min-height: 54px;
        color: #a5b7c8;
        font: 600 11px system-ui, sans-serif;
        text-decoration: none;
      }

      .lp-app-nav svg {
        width: 23px;
        height: 23px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.9;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .lp-app-nav a[aria-current="page"] {
        color: #8de34f;
      }

      .lp-app-nav a[aria-current="page"] svg {
        filter: drop-shadow(0 0 5px rgba(141,227,79,.3));
      }
    }

    @media (min-width: 801px) {
      .lp-app-nav { display: none; }
    }
  `;

  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'lp-app-nav';
  nav.setAttribute('aria-label', 'Navegació de la Lliga');

  const path = window.location.pathname;

  links.forEach(([label, url, icon]) => {
    const a = document.createElement('a');
    a.href = url;

    const svg = document.createElementNS(
      'http://www.w3.org/2000/svg', 'svg'
    );

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = icons[icon];

    const span = document.createElement('span');
    span.textContent = label;

    a.append(svg, span);

    if (path === url) {
      a.setAttribute('aria-current', 'page');
    }

    nav.appendChild(a);
  });

  document.body.appendChild(nav);
})();
