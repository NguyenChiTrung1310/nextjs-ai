import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {hostname: 'firebasestorage.googleapis.com'},
    ],
  },
  reactStrictMode: false,
}

export default nextConfig
