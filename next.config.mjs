/** @type {import('next').NextConfig} */
const nextConfig = {
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
