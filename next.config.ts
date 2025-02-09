import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable service worker if it's causing issues
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
