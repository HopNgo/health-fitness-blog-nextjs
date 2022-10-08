/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  env: {
    MY_SECRET_REVALIDATE_TOKEN: process.env.MY_SECRET_REVALIDATE_TOKEN,
  },
};

module.exports = nextConfig;
