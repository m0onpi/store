import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = {
    id: "sofa-gray",
    name: "Luxury Sectional Sofa - Charcoal Gray",
    price: 1299.99,
    url: "/api/products/sofa-gray",
    description: "Premium sectional sofa in charcoal gray. Ultimate comfort for your living room.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    weight: 120,
    dimensions: "280cm x 180cm x 85cm"
  };

  res.status(200).json(product);
}
