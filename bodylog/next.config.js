/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 새로고침 시  css 날라감 방지
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/join',
        destination: `https://bodylog1.duckdns.org/join`,
      },
      {
        source: '/api/login',
        destination: `https://bodylog1.duckdns.org/login`,
      },
      {
        source: '/api/meals',
        destination: `https://bodylog1.duckdns.org/meals`,
      },
    ];
  },
};

module.exports = nextConfig;
