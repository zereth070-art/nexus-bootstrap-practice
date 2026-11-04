# Nexus — Bootstrap 5 personalizado con Sass

Práctica de maquetación con **Bootstrap 5** y personalización mediante **Sass**. **Proyecto académico** (práctica de desarrollo web).

## Descripción

Página de tarjetas (Nexus: "Juega, valora, comparte") para practicar el grid y los componentes de Bootstrap 5, con variables personalizadas (paleta morada) compiladas con Sass.

## Tecnologías

- HTML5
- Bootstrap 5.3
- Sass
- JavaScript (mínimo)

## Cómo verla

```bash
cd nexus-bootstrap-practice
npm install          # solo la primera vez
npm run sass         # compila y queda escuchando cambios
```

Después abre `index.html` en el navegador. Mientras `npm run sass` esté activo, cada vez que guardes un `.scss` se regenera `scss/miestilo.css`.

Compilación puntual:

```bash
npm run sass:build
```

## Estructura

```text
nexus-bootstrap-practice/
├── index.html
├── scss/
│   ├── miestilo.scss
│   ├── _variables.scss
│   └── miestilo.css   # compilado (no editar a mano)
└── images/
```

## Tipo

Proyecto académico · Práctica de Bootstrap 5 y Sass.

## Qué he aprendido / qué mejorarías

- Personalización de Bootstrap mediante variables Sass.
- Grid responsive y componentes (cards, navbar).
- Compilación con Sass en modo watch.
