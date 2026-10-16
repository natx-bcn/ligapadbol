#!/usr/bin/env python3
"""Ejecutar en la carpeta raíz del repositorio después de copiar los archivos del ZIP."""
from pathlib import Path
for name in ['index.html','clasificacion.html','partits.html','estadistiques.html','galeria.html']:
 p=Path(name)
 if not p.is_file():
  print('No encontrado:',p);continue
 s=p.read_text(encoding='utf-8')
 if 'rel="manifest"' not in s:
  s=s.replace('</head>','<link rel="manifest" href="/manifest.webmanifest"/>\n</head>',1)
 if 'app-navigation.js' not in s:
  s=s.replace('</body>','<script defer src="/assets/app-navigation.js"></script>\n</body>',1)
 p.write_text(s,encoding='utf-8')
 print('Preparado:',p)
