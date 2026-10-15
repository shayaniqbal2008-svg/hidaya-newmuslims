import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache Components is off on purpose: every page reads the signed-in user, so pages render per request.
  // That keeps the code closer to most Next.js docs and examples. See README.
  cacheComponents: false,
  // Lets a phone on the same Wi-Fi load the dev server by the Mac's local IP (checkpoint 4 testing).
  allowedDevOrigins: ["10.*.*.*", "192.168.*.*", "172.*.*.*", "*.local"],
  // Lessons are read from content/ at runtime; make sure Vercel ships those files with every route.
  outputFileTracingIncludes: { "/**": ["./content/**/*"] },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
