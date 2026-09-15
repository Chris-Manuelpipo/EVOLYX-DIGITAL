import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function searchConsoleMeta(token) {
  const verification = /^[A-Za-z0-9_-]+$/.test(token || '') ? token : ''

  return {
    name: 'search-console-meta',
    transformIndexHtml(html) {
      if (!verification) return html.replace('<!-- gsc -->', '')
      return html.replace(
        '<!-- gsc -->',
        `<meta name="google-site-verification" content="${verification}" />`,
      )
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      tailwindcss(),
      searchConsoleMeta(env.VITE_GSC_VERIFICATION),
      {
        name: 'strip-gtag-placeholder',
        transformIndexHtml(html) {
          return html.replace('<!-- gtag -->', '')
        },
      },
    ],
  }
})
