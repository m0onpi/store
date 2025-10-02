import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = {
    id: "lamp-brass",
    name: "Modern Desk Lamp - Brass Finish",
    price: 89.99,
    url: "/api/products/lamp-brass",
    description: "Modern desk lamp with brass finish. Perfect for your workspace.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    weight: 2,
    dimensions: "25cm x 15cm x 45cm"
  };

  res.status(200).json(product);
}
