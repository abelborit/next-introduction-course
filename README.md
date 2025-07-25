This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

| Script     | Acciones                                                             |
| ---------- | -------------------------------------------------------------------- |
| lint       | Corre ESLint para verificar errores de código                        |
| lint:fix   | Corre ESLint y arregla automáticamente errores si es posible         |
| format     | Verifica si el código cumple con las reglas de Prettier (modo check) |
| format:fix | Formatea todo el código con Prettier (modo write)                    |
| check      | Verifica tanto ESLint como Prettier (sin modificar archivos)         |
| fix        | Arregla errores con ESLint y formatea el código con Prettier         |

---

### https://biomejs.dev/es/guides/migrate-eslint-prettier/

| Terminal                                    | Acciones                                    |
| ------------------------------------------- | ------------------------------------------- |
| npx @biomejs/biome migrate eslint --write   | Migrar la configuración de ESLint a Biome   |
| npx @biomejs/biome migrate prettier --write | Migrar la configuración de Prettier a Biome |

| Script                                    | Acciones                                             |
| ----------------------------------------- | ---------------------------------------------------- |
| npx @biomejs/biome format --write         | Format all files                                     |
| npx @biomejs/biome format --write <files> | Format specific files                                |
| npx @biomejs/biome lint --write           | Lint files and apply safe fixes to all files         |
| npx @biomejs/biome lint --write <files>   | Lint files and apply safe fixes to specific files    |
| npx @biomejs/biome check --write          | Format, lint, and organize imports of all files      |
| npx @biomejs/biome check --write <files>  | Format, lint, and organize imports of specific files |

---

# NOTA:

Al querer ejecutar _npx @biomejs/biome migrate eslint --write_ sale un error similar a:

```
$ npx @biomejs/biome migrate eslint --write
migrate ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × Migration has encountered an error: `node` was invoked to resolve './eslint.config.mjs'. This invocation failed with the following error:
    C:\Users\prueba\node_modules\@rushstack\eslint-patch\lib\_patch-base.js:244
                throw new Error('Failed to patch ESLint because the calling module was not recognized.\n' +
                      ^

    Error: Cannot read config file: C:\Users\prueba\node_modules\eslint-config-next\index.js
    Error: Failed to patch ESLint because the calling module was not recognized.
    If you are using a newer ESLint version that may be unsupported, please create a GitHub issue:
    https://github.com/microsoft/rushstack/issues
    Referenced from: C:\Users\prueba\node_modules\eslint-config-next\core-web-vitals.js
        at Object.<anonymous> (C:\Users\prueba\node_modules\@rushstack\eslint-patch\lib\_patch-base.js:244:19)
        at Module._compile (node:internal/modules/cjs/loader:1565:14)
        at Object..js (node:internal/modules/cjs/loader:1708:10)
        at Module.load (node:internal/modules/cjs/loader:1318:32)
        at Function._load (node:internal/modules/cjs/loader:1128:12)
        at TracingChannel.traceSync (node:diagnostics_channel:322:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
        at Module.require (node:internal/modules/cjs/loader:1340:12)
        at require (node:internal/modules/helpers:138:16)
        at Object.<anonymous> (C:\Users\prueba\node_modules\@rushstack\eslint-patch\lib\modern-module-resolution.js:11:23)

    Node.js v22.12.0
```

Indica que Biome no puede migrar tu configuración de ESLint porque uno de los presets que usas (eslint-config-next) usa un parche llamado @rushstack/eslint-patch, y ese parche falla al ejecutarse en un entorno ESM (como eslint.config.mjs o eslint.config.js con type: module).

Biome trata de leer tu eslint.config.mjs, pero al cargar eslint-config-next, este intenta usar @rushstack/eslint-patch, que solo funciona con .eslintrc clásico (CommonJS), no con Flat Config ni ESM.

### En resumen:

- eslint-config-next no es compatible con eslint.config.js en formato Flat Config + ESM cuando usas herramientas como Biome.
- Y @rushstack/eslint-patch lanza error porque no puede reconocer tu entorno o versión de ESLint.

### Soluciones posibles

- Opción 1: Volver temporalmente a .eslintrc.js para que Biome funcione
  - Crea .eslintrc.js temporalmente:

  ```
  module.exports = {
    extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  }
  ```

- Opción 2: No uses eslint-config-next con Biome
  - Si ya vas a usar Biome, no necesitas ESLint ni eslint-config-next, ya que Biome tiene su propio sistema de lint + format. Podrías desinstalar ESLint por completo y usar solo Biome

- Opción 3: https://github.com/biomejs/biome/issues/2935#issuecomment-2133008414
- Después usar: _npx @biomejs/biome migrate eslint --write_
- Después usar (incluir reglas customizadas): _npx @biomejs/biome migrate eslint --write --include-inspired_

---

# Biome

Biome es una cadena de herramientas integral para proyectos web que incluye un linter y un formateador. Sus reglas de JavaScript están diseñadas para aplicar el estilo del código, identificar posibles problemas y mejorar su calidad y rendimiento. Estas reglas se clasifican en diferentes grupos, cada uno de los cuales aborda un área específica:

- Accessibility (a11y) - (Accesibilidad):
  Reglas enfocadas en prevenir problemas de accesibilidad en aplicaciones web, como garantizar los atributos correctos de los elementos HTML para las tecnologías de asistencia.

- Complexity (Complejidad):
  Reglas que ayudan a identificar y simplificar estructuras de código excesivamente complejas que podrían ser difíciles de entender o mantener.

- Correctness (Corrección):
  Reglas que detectan código que se garantiza que es incorrecto o inútil, lo que ayuda a detectar errores de programación comunes.

- Nursery (Enfermería):
  Nuevas reglas en desarrollo que aún pueden ser inestables. No están habilitadas por defecto en las versiones estables y requieren una aceptación explícita.

- Performance (Rendimiento):
  Reglas destinadas a identificar maneras de escribir código JavaScript más eficiente y de ejecución más rápida.

- Security (Seguridad):
  Reglas que detectan posibles vulnerabilidades de seguridad en el código base.

- Style (Estilo):
  Reglas que imponen una forma consistente e idiomática de escribir código JavaScript, lo que promueve la legibilidad y el mantenimiento en todo el proyecto.

- Suspicious (Sospechoso):
  Reglas que detectan código que probablemente sea incorrecto o inútil, incluso si no se trata estrictamente de un error de sintaxis.

Las reglas de Biome se pueden configurar en el archivo biome.json, lo que permite a los usuarios habilitar o deshabilitar reglas específicas, ajustar su gravedad (p. ej., error, advertencia) y personalizar su comportamiento para adaptarlo a los requisitos del proyecto. Biome también ofrece acciones de código (correcciones) para muchas reglas, que pueden resolver automáticamente los problemas detectados.

---

# Next JS & TypeScript - Next Introduction Course

## Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- En esta sección veremos como desplegar nuestra aplicación de Next en distintos lugares.

### \* PASOS A REALIZAR:

1. Generar el build de producción / distribución

2. Probar el procedimiento de construcción y ejecución

3. Desplegar la aplicación en Vercel (Creado por la misma gente de Next.js)

4. Generar una imagen de Docker

5. Crear la imagen de Docker siguiendo las prácticas recomendadas por Next

6. Correr la aplicación desde Docker Desktop

### \* NOTAS:

- Docker - Construcción recomendada:
  - https://nextjs.org/docs/pages/getting-started/deploying#docker-image
  - https://nextjs.org/docs/app/getting-started/deploying#docker
- ejemplo
- ejemplo

---
