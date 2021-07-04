export const config = {
  siteMeta: {
    title: "Team Blog Hub",
    teamName: "catnose Inc.",
    description: "RSS based blog starter kit for teams.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
  ],
};
