import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep development and production artifacts isolated. Running `next build`
  // while `next dev` is open must never remove the dev server's manifests.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next-build',

  webpack(config, { dev }) {
    // Windows can fail Webpack's temporary-pack rename when a watcher,
    // antivirus scanner, or another process briefly holds the file. The cache
    // is only a development speed optimization, so keep it in memory instead
    // of repeatedly emitting ENOENT rename warnings.
    if (dev) {
      config.cache = false;
    }

    return config;
  },

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
    'space build.com',
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
