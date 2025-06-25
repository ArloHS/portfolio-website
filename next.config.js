/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper handling of file paths on Windows
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
