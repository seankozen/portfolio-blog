/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // ✅ allow Sanity image CDN
  },
};

export default nextConfig;
