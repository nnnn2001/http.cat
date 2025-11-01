/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["cdn2.thecatapi.com", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/account123/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
