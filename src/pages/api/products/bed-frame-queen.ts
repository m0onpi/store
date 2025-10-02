import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = {
    id: "bed-frame-queen",
    name: "Elegant Bed Frame - Queen Size Oak",
    price: 799.99,
    url: "/api/products/bed-frame-queen",
    description: "Elegant bed frame in oak finish. Queen size for ultimate comfort.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop",
    weight: 45,
    dimensions: "160cm x 200cm x 25cm"
  };

  res.status(200).json(product);
}
