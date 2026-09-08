import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const GA_ID = 'G-XGF4RPVJHR'

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

/** Snippet officiel dans le HTML de production : l'assistant Google ne
 *  exécute pas React, il cherche `gtag/js?id=G-…` dans la source. */
function googleTag() {
  const snippet = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { anonymize_ip: true, send_page_view: false });
    </script>`

  return {
    name: 'google-tag',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        if (ctx.server) return html.replace('<!-- gtag -->', '')
        return html.replace('<!-- gtag -->', snippet)
      },
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
      googleTag(),
    ],
  }
})
