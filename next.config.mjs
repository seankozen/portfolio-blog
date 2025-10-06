/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false, // Disable tools and icon for Next.js
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // ✅ Sanity image CDN
        port: "",
        pathname: "/**", // allow all Sanity image paths
      },
      {
        protocol: "https",
        hostname: "seankozen.com", // your other domain
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "svgrepo.com", // for external SVG icons
        port: "",
        pathname: "/**",
      },
      // add more if needed
    ],
  },
};

export default nextConfig;
// const nextConfig = {
//   devIndicators: false, // Disable tools and icon for Next.js
//   images: {
//     domains: ["cdn.sanity.io"], // ✅ allow Sanity image CDN
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "example.com",
//         port: "",
//         pathname: "/**", // allow all paths under this domain
//       },
//       // add more patterns if needed
//     ],
//   },
// };

// export default nextConfig;
