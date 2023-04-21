/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: false },
  images: {
    domains: ['test2-ratnov2.vercel.app'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://test2-ratnov2.vercel.app/api/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `https://test2-ratnov2.vercel.app/uploads/:path*`,
      },
    ]
  },
  
}

module.exports = nextConfig
