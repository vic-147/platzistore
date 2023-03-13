/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'images.unsplash.com', 'api.escuelajs.co', 'asds.com', 'asdsadasdasdsad.com', 'asdasdsa.com','encrypted-tbn0.gstatic.com', 'th.bing.com', 'cdn.ckitchen.com', 'd1sv0k1gy5tr77.cloudfront.net']
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);