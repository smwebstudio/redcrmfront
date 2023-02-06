/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        API_URL: process.env.NEXT_PUBLIC_BACKEND_URL + '/api',
        PUBLIC_URL: 'http://localhost:3000'
    },
}

export default nextConfig
