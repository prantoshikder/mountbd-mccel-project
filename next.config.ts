import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "mountbd.org",
        pathname: "/static/media/**",
      },
    ],
  },
};

export default nextConfig;
