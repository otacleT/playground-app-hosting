/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true, // ポイントはここ
  },
};

module.exports = nextConfig;
