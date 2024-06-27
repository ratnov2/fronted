const { headers } = require('next/dist/client/components/headers')


/** @type {import('next').NextConfig} */
const url = true
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: false },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },

      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: url
  //         ? `https://test2-ratnov2.vercel.app/api/:path*`
  //         : 'http://localhost:4200/api/:path*',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
// module.exports = {
//   plugins: [new BundleAnalyzerPlugin()],
// }

// module.exports = nextConfig
