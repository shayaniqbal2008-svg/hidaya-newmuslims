// The install manifest: "Hidaya", or "Daily" on a device in discreet mode (lib/brand.ts).
import { appName } from "@/lib/brand-server";

export async function GET() {
  const name = await appName();
  return Response.json(
    {
      name,
      short_name: name,
      description: "A five-minute lesson a day.",
      start_url: "/today",
      scope: "/",
      display: "standalone",
      background_color: "#f6f8fb",
      theme_color: "#0f9a86",
      icons: [
        { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
        { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      ],
    },
    { headers: { "content-type": "application/manifest+json", "cache-control": "private, no-store" } },
  );
}
