/** @type {import('next').NextConfig} */

const nextConfig = {
  // Fix any image domain issues
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
