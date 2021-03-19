import { HTTP_ENDPOINT, WWW_URL, head, dev, tailwindcss, PORT } from './config'
const server = dev ? `http://localhost:${PORT}` : WWW_URL
import { I18N } from './config/lang'

const whitelistPatterns = [/(slick-)/]
export default {
  head,
  plugins: [{ src: '~/plugins/agora.js', ssr: false }],
  components: true,
  buildModules: [
    '@nuxtjs/apollo',
    '@nuxtjs/component-cache',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    'nuxt-webfontloader',
    '@nuxtjs/google-analytics',
  ],
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    ['nuxt-i18n', I18N],
  ],
  purgeCSS: {
    // whitelist,
    whitelistPatterns,
  },
  tailwindcss,
  webfontloader: {
    google: {
      families: [
        'Inter:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      ],
    },
  },
  axios: {
    browserBaseURL: server,
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: server + '/graphql',
        // wsEndpoint: server.replace('http', 'ws') + '/graphql',
      },
    },
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
  },
  proxy: {
    '/graphql': HTTP_ENDPOINT,
    '/api': HTTP_ENDPOINT,
  },
}
