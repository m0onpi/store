const description =
  "Premium furniture for your home - Modern, stylish, and affordable pieces for every room";
const title = "Premium Furniture Store";
const url = "https://premium-furniture-store.com";

const seo = {
  title,
  titleTemplate: "Premium Furniture Store",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
};

export { seo as defaultSEO, url as defaultUrl };
