import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.100.18', 'localhost'],
  // Enable React strict mode for better error handling
  reactStrictMode: true,
};

export default nextConfig;