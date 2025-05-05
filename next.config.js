/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/web-development",
        destination: "/internship/webdev",
      },
      {
        source: "/data-science",
        destination: "/internship/datascience",
      },
      {
        source: "/data-analyst",
        destination: "/internship/dataanalyst",
      },
      {
        source: "/business-analyst",
        destination: "/internship/businessanalyst",
      },
      {
        source: "/networking",
        destination: "/internship/networking",
      },
      {
        source: "/cyber-security",
        destination: "/internship/cybersecurity",
      },
      {
        source: "/privacy-policy",
        destination: "/terms/privacy-policy",
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms/terms-and-conditions",
      },
      {
        source: "/refund-policy",
        destination: "/terms/refund-policy",
      },
    ];
  },
};

module.exports = nextConfig;
