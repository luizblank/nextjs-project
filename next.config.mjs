/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: 'https', hostname: 'rickandmortyapi.com'}],
    },
    rewrites: () => {
        return [
            {
                source: '/',
                destination: '/home'
            },
            {
                source: '/not-a-hook',
                destination: '/hook-page'
            },
        ]
    }
};

export default nextConfig;
