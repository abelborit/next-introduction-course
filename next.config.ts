/* https://www.timsanteford.com/posts/how-to-use-biome-with-next-js-for-linting-and-formatting/ */
/* https://github.com/vercel/next.js/discussions/59347 */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  /* Por defecto, Next.js usa ESLint durante el proceso de compilación. Como decidí usar Biome como mi linter, no quería que ESLint interfiriera ni generara advertencias innecesarias durante las compilaciones de producción. Afortunadamente, Next.js facilita la desactivación de las comprobaciones de ESLint en las compilaciones, que fue exactamente lo que hice */
  /* Con esta configuración, ESLint no bloqueará las compilaciones de producción, incluso si detecta problemas. Esto es especialmente importante para que el proceso de compilación se desarrolle sin problemas, ya que Biome ahora gestiona todas las tareas de linting */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
