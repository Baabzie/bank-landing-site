/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/bank-landing-site" : "",
  assetPrefix: isProd ? "/bank-landing-site/" : "",
  reactStrictMode: true,
  output: "export",
  distDir: "out",
};

export default nextConfig;
