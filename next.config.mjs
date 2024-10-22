/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/bank-landing-site" : "",
  reactStrictMode: true,
};

export default nextConfig;
