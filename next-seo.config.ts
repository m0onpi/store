const description =
  "Enhance your chess skills with personalized coaching!";
const title = "Chess Coaching Academy";
const url = "https://your-coaching-website.com";

const seo = {
  title,
  titleTemplate: "Chess Coaching Academy",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
};

export { seo as defaultSEO, url as defaultUrl };
