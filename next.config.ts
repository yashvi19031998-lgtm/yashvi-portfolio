import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.thum.io",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/resume',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Yashvi_Shah_Resume.pdf"',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          }
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
      },
    ];
  },
};

export default nextConfig;
