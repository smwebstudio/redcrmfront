const nextConfig = {
    compiler: {
        styledComponents: {
            displayName: false,
            ssr: true,
        },
    },
    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        API_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        PUBLIC_URL: 'http://localhost:3000',
    },
    reloadOnPrerender: true,
    react: { useSuspense: false },
    debug: true,
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath: '/locales',
    reactStrictMode: false,
    output: 'standalone',
}

module.exports = nextConfig
