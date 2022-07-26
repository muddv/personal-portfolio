/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  webpack: (config) => {
    config.module.rules.push({
      test:/\.md$/,
      loader: "raw-loader"
    })
    return config
  },

}