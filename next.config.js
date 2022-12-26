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
    domains: ['avasus.ufrn.br'],
  },
  pageExtensions: ['page.tsx', 'page.ts'],
};

module.exports = nextConfig;
