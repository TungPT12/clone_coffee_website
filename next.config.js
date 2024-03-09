/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    domains: [
      "img.etimg.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // env: {
  //   base_url: "http://localhost:3001",
  // },
};

module.exports = nextConfig;
