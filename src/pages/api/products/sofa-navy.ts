import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = {
    id: "sofa-navy",
    name: "Luxury Sectional Sofa - Navy Blue",
    price: 1299.99,
    url: "/api/products/sofa-navy",
    description: "Premium sectional sofa in navy blue. Ultimate comfort for your living room.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    weight: 120,
    dimensions: "280cm x 180cm x 85cm"
  };

  res.status(200).json(product);
}
