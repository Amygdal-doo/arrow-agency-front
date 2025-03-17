import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "arrow.agency-spaces.fra1.digitaloceanspaces.com",
      "bucket-production-65dc.up.railway.app",
    ],
  },
};

export default nextConfig;
