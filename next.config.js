/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  images: {
    domains: ['avasus.ufrn.br', 'placehold.it'],
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  env: {
    API_URL: process.env.API_URL,
    MAPS_API_KEY: process.env.MAPS_API_KEY,
  },
};

module.exports = nextConfig;
