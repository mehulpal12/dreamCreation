import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This allows any HTTPS website
      },
      {
        protocol: "http",
        hostname: "**", // This allows any HTTP website (less secure)
      },
    ],
  },
};

export default nextConfig;