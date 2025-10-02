import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = {
    id: "bookshelf-black",
    name: "Industrial Bookshelf - Black Metal",
    price: 449.99,
    url: "/api/products/bookshelf-black",
    description: "Industrial style bookshelf in black metal. Perfect for organizing your books and decor.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    weight: 35,
    dimensions: "180cm x 30cm x 200cm"
  };

  res.status(200).json(product);
}
