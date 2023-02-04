/* eslint-disable no-process-env */
/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {urlImports: ['https://themer.sanity.build/']},

  images: {
    remotePatterns: [
      {hostname: 'cdn.sanity.io'},
      {hostname: 'source.unsplash.com'},
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
}