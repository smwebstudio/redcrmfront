const { i18n } = require('./next-i18next.config')

const nextConfig = {
    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        API_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        PUBLIC_URL: 'http://localhost:3000'
    },
    i18n,
    reloadOnPrerender: true,
    react: { useSuspense: false },
    debug: true,
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath:  '/locales',
    reactStrictMode: false,
}

module.exports = nextConfig
