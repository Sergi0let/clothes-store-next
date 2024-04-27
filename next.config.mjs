/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "static.zara.net",
      },
      {
        hostname: "www.zara.com",
      },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "firebasestorage.googleapis.com" },
    ],
  },
};

export default nextConfig;
