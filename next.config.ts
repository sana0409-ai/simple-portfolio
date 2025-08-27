import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/mda/:path*", // e.g. /mda, /mda/about, etc.
        destination: "https://multimodal-depression-analysis.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
