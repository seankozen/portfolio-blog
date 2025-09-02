/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false, // Disable tools and icon for Next.js
  images: {
    domains: ["cdn.sanity.io"], // ✅ allow Sanity image CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**", // allow all paths under this domain
      },
      // add more patterns if needed
    ],
  },
};

export default nextConfig;
