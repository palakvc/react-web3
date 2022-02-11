/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "pentas-bucket.s3.ap-southeast-1.amazonaws.com",
      "www.hyperui.dev",
      "i.pravatar.cc",
      "192.168.1.117",
    ],
  },
};

module.exports = nextConfig;
