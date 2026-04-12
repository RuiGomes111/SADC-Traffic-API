export default function sitemap() {
  return [
    {
      url: "https://sadc-traffic-api.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://sadc-traffic-api.vercel.app/api",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://sadc-traffic-api.vercel.app/api/sinais",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,

    },
  ];
}