const description =
  "Premium furniture for your home - Modern, stylish, and affordable pieces for every room";
const title = "Furniture Test Store";
const url = "https://furniture-test-store.com";

const seo = {
  title,
  titleTemplate: "Furniture Test Store",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
};

export { seo as defaultSEO, url as defaultUrl };
