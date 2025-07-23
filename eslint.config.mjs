// eslint.config.js

/*
Using the node: protocol is more explicit and signals that the imported module belongs to Node.js.

- https://biomejs.dev/linter/rules/use-nodejs-import-protocol/
- https://dev.to/yenyih/new-nodejs-protocol-imports-3pnf
- https://2ality.com/2021/12/node-protocol-imports.html
- https://nodejs.org/api/esm.html#node-imports
*/
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

// Necesario para que funcione __dirname con ESM (Next.js usa ESM por defecto)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Compatibilidad con configuración antigua basada en extends
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // Integración con Prettier
  ),
  {
    rules: {
      // Ejemplo de reglas personalizadas que puedes adaptar a tu estilo
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off', // innecesario con React 17+
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];

export default eslintConfig;
