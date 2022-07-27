/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "raw-loader"
    })

    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
        }
      ]
    })

    return config
  },

}