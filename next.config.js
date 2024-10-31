const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");
const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { dimensions: false },
        },
      ],
    });

    return config;
  },
};

if (process.env.NODE_ENV === 'development') {
  (async () => {
    await setupDevPlatform();
  })();
}

module.exports = nextConfig;
