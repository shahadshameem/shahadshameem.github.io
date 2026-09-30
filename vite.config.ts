import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const devHtmlPlugin = (): Plugin => ({
  name: 'dev-html-plugin',
  transformIndexHtml(html, ctx) {
    if (ctx.server) {
      // In development server mode, load live TypeScript JSX source module with HMR
      let devHtml = html.replace(
        /<script type="module" crossorigin src="[^"]*assets\/index-[^"]+\.js"><\/script>/,
        '<script type="module" src="/src/main.tsx"></script>'
      );
      devHtml = devHtml.replace(
        /<link rel="stylesheet" crossorigin href="[^"]*assets\/index-[^"]+\.css">/,
        ''
      );
      return devHtml;
    }
    return html;
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    devHtmlPlugin(),
    react(),
    tailwindcss()
  ],
  base: './',
});
