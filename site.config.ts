export const config = {
  siteMeta: {
    title: "Lean Links",
    description: "リーンスタートアップやPMFに関する情報キュレーションサイト",
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
