/** @type {import('next').NextConfig} */
const nextConfig = {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose'],
    images: {
        domains: ['m.media-amazon.com']
    }
};

module.exports = nextConfig;
