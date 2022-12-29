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
  },
};

module.exports = nextConfig;
