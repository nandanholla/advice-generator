/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/advice-generator",
  assetPrefix: "/advice-generator"
}

module.exports = nextConfig
