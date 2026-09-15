import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve original asset paths under /assets/*
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/projects/:slug",
        destination: "/project-details",
      },
      {
        source: "/blogs/:category/:slug",
        destination: "/blog-details",
      },
    ];
  },
};

export default nextConfig;
