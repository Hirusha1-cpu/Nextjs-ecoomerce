/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol: 'https',
            hostname:"images.unsplash.com",
            // hostname:"unsplash.com",
            port: '',
            pathname:'/photos/**'
        },
        {
            hostname:"lh3.googleusercontent.com"
        }
    ],
        domains: ['images.unsplash.com'],
    },
    experimental:{
        serverActions: true
    }
}

module.exports = nextConfig
