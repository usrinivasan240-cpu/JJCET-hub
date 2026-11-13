/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: [],
  },
  async redirects() {
    return [
      // Focus Areas and Infrastructure are now sections inside About Us
      { source: "/focus-sectors", destination: "/about#focus-areas", permanent: true },
      { source: "/focus-sectors/:slug*", destination: "/about#focus-areas", permanent: true },
      { source: "/facilities", destination: "/about#infrastructure", permanent: true },
      { source: "/facilities/:slug*", destination: "/about#infrastructure", permanent: true },
      // Programs folded into Achievements & Announcements
      { source: "/events", destination: "/programs", permanent: true },
      { source: "/events/:slug*", destination: "/programs", permanent: true },
    ];
  },
};

export default nextConfig;
