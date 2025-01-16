/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SECRET_KEY: process.env.SECRET_KEY,
    IMAGE_KEY: process.env.IMAGE_KEY,
    ADMIN_UID_01: process.env.ADMIN_UID_01,
    ADMIN_UID_02: process.env.ADMIN_UID_02,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  transpilePackages: ["crypto-js"],
};

module.exports = nextConfig;
