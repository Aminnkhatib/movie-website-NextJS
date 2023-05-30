/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname: 'image.tmdb.org',
        pathname: '/**',
        port: "",
      }
    ]
  }
}



module.exports = nextConfig
