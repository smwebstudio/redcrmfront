const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        API_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        PUBLIC_URL: process.env.PUBLIC_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'redgroup-public.s3.eu-central-1.amazonaws.com',
            },
            {
                protocol: 'https',
                hostname: 'redgroup-storage.s3.eu-central-1.amazonaws.com',
            },
            {
                protocol: 'https',
                hostname: 'localhost',
            },
        ],
    },
    reactStrictMode: false,
    output: 'standalone',
}

module.exports = nextConfig
