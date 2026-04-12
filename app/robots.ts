export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://sadc-traffic-api.vercel.app/sitemap.xml",
  };
}