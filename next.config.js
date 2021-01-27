module.exports = {
  images: {
    domains: [],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      // require('./scripts/generate-sitemap');
      // require('./scripts/generate-rss');
    }
    return config;
  },
};
