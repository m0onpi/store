export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  features: string[];
  dimensions: string;
  material: string;
  color: string;
}

export const furnitureProducts: Product[] = [
  {
    id: "luxury-sofa-3-seater",
    name: "Luxury 3-Seater Sofa",
    description: "Premium comfort meets elegant design in this spacious 3-seater sofa. Perfect for living rooms, this piece combines style and functionality with its plush cushions and sturdy construction.",
    price: 1299.99,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop&q=80"
    ],
    category: "Sofas",
    features: [
      "Premium fabric upholstery",
      "High-density foam cushions",
      "Solid wood frame",
      "Easy assembly required"
    ],
    dimensions: "220cm x 90cm x 85cm",
    material: "Premium Fabric & Solid Wood",
    color: "Charcoal Gray"
  },
  {
    id: "modern-dining-chair-set",
    name: "Modern Dining Chair Set (Set of 4)",
    description: "Contemporary dining chairs that blend modern aesthetics with exceptional comfort. These chairs feature ergonomic design and premium materials, perfect for any dining space.",
    price: 599.99,
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop&q=80"
    ],
    category: "Dining Chairs",
    features: [
      "Ergonomic back support",
      "Premium leather upholstery",
      "Stainless steel legs",
      "Weight capacity: 150kg per chair"
    ],
    dimensions: "45cm x 50cm x 95cm (per chair)",
    material: "Premium Leather & Stainless Steel",
    color: "Black Leather"
  },
  {
    id: "executive-armchair-brown",
    name: "Executive Armchair - Brown Leather",
    description: "Luxurious executive armchair designed for comfort and style. Perfect for home offices, reading corners, or as an accent piece in your living room. Features premium brown leather and elegant design.",
    price: 799.99,
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&q=80"
    ],
    category: "Armchairs",
    features: [
      "Premium brown leather upholstery",
      "High-back design for support",
      "Padded armrests",
      "Swivel base with 360° rotation"
    ],
    dimensions: "75cm x 80cm x 120cm",
    material: "Premium Brown Leather & Steel",
    color: "Rich Brown"
  }
];
