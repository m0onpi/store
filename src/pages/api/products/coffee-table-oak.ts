import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = {
    id: "coffee-table-oak",
    name: "Modern Wooden Coffee Table - Oak Finish",
    price: 299.99,
    url: "/api/products/coffee-table-oak",
    description: "Beautiful modern coffee table with oak finish. Perfect for any living room.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    weight: 25,
    dimensions: "120cm x 60cm x 45cm"
  };

  res.status(200).json(product);
}
