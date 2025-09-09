import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = {
    id: "bed-frame-king",
    name: "Elegant Bed Frame - King Size Oak",
    price: 999.99,
    url: "/api/products/bed-frame-king",
    description: "Elegant bed frame in oak finish. King size for ultimate comfort.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop",
    weight: 55,
    dimensions: "180cm x 200cm x 25cm"
  };

  res.status(200).json(product);
}
