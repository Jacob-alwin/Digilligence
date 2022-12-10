/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["localhost", "https://digilligence.in"],
  },
};
// const withCSS = require("@zeit/next-css");
// module.exports = withCSS();
