/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/photography',
        destination: '/photography/portreti',
        permanent: true
      },
      {
        source: '/videography',
        destination: '/videography/product',
        permanent: true
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = nextConfig
