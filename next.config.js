/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = {
  images: {
    domains: ["localhost", "https://digilligence.in", "digilligence.in"],
  },
};
// const withCSS = require("@zeit/next-css");
// module.exports = withCSS();
