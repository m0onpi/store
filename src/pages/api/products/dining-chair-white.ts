import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = {
    id: "dining-chair-white",
    name: "Minimalist Dining Chair - White",
    price: 149.99,
    url: "/api/products/dining-chair-white",
    description: "Elegant minimalist dining chair in white. Comfortable and stylish.",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop",
    weight: 8,
    dimensions: "45cm x 45cm x 85cm"
  };

  res.status(200).json(product);
}
