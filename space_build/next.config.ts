/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    loader: 'custom',
    loaderFile: './src/lib/cloudinaryLoader.ts',
    minimumCacheTTL: 60 * 60 * 24 * 365,
    domains: [
    'res.cloudinary.com',
    'cdn-icons-png.flaticon.com',
    'images.unsplash.com',
    'plus.unsplash.com',
    'i.pinimg.com',
    'www.psdecor.in',
    'vasterior.com',
  ],
  },

  eslint: {
    ignoreDuringBuilds: true
  },

  async redirects() {
    return [
      { source: '/services/furniture-sourcing', destination: '/services', permanent: true },
      { source: '/services/interior-styling-and-material-consultation', destination: '/services', permanent: true },
      { source: '/services/paid-mahavastu-consultation', destination: '/services/mahavastu-consultation', permanent: true },
      { source: '/services/astro-vastu', destination: '/services', permanent: true },
      { source: '/services/smart-homes', destination: '/services', permanent: true },
      { source: '/services/spatial-planning', destination: '/services', permanent: true },
      { source: '/services/vastu-consultation', destination: '/services', permanent: true },
      { source: '/services/wedding-designing', destination: '/services', permanent: true },
    ];
  },
};

module.exports = nextConfig;