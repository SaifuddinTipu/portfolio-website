import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/portfolio-website",
  assetPrefix: "/portfolio-website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
