const { headers } = require('next/dist/client/components/headers')

/** @type {import('next').NextConfig} */
const url = true
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: false },
  images: {
    domains: [
      'test2-ratnov2.vercel.app',
      'downloader.disk.yandex.ru',
      'cloud-api.yandex.net',
      'downloader.disk.yandex.ru',
    ],
  },
  // https://uploader24g.disk.yandex.net/
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: !url
          ? `https://test2-ratnov2.vercel.app/api/:path*`
          : 'http://localhost:4200/api/:path*',
      },
      {
        source: '/disk/:path*',
        destination: `https://cloud-api.yandex.net/v1/disk/:path*`,
      },
      {
        source: '/_next/:path*',
        destination: `http://localhost:4200/_next/:path*`,
      },
      // {
      //   source: '/image/:path*',
      //   destination: `path*`,
      // },
      // {
      //   source: '/:path*',
      //   destination: `/:path*`,

      // },
    ]
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/disk/',
  //       headers: [
  //         { key: 'Access-Control-Allow-Credentials', value: 'true' },
  //         { key: 'Access-Control-Allow-Origin', value: '*' },
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value:
  //             'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  //         },
  //       ],
  //     },
  //   ]
  // },
}

module.exports = nextConfig
