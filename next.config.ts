import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.discordapp.com",
      "res.cloudinary.com",
      "media.discordapp.net",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
