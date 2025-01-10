// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.daisyui.com',
          pathname: '/images/**',
        },
        // Add any other domains you might need
        {
          protocol: 'https',
          hostname: '**',  // This is a fallback for any https domain
        }
      ],
      // Optional: Configure image optimization settings
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/webp'],
      minimumCacheTTL: 60,
    },
    // Other Next.js settings you might need
    reactStrictMode: true,
    swcMinify: true,
  };
  
  export default nextConfig;