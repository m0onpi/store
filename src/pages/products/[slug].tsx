import React, { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { testFurnitureProducts } from "../../data/test-products";

interface ProductPageProps {
  product: {
    id: string;
    name: string;
    variants: Array<{
      external_id: string;
      name: string;
      retail_price: number;
      currency: string;
      files: Array<{
        type: string;
        preview_url: string;
      }>;
    }>;
    description: string;
    features: string[];
    specifications: {
      dimensions: string;
      weight: string;
      material: string;
      color: string;
    };
    images: string[];
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: selectedVariant.currency,
  }).format(selectedVariant.retail_price);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/">
          <a className="text-blue-600 hover:text-blue-800">
            ← Back to Products
          </a>
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.images[selectedImageIndex]}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`aspect-square relative overflow-hidden rounded-lg border-2 ${
                  selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12.5vw, 8vw"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-600">{formattedPrice}</p>
          </div>

          {/* Variant Selection */}
          {product.variants.length > 1 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Options</h3>
              <div className="space-y-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.external_id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`w-full text-left p-3 border rounded-lg transition ${
                      selectedVariant.external_id === variant.external_id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{variant.name}</span>
                      <span className="text-blue-600 font-semibold">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: variant.currency,
                        }).format(variant.retail_price)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              const event = new CustomEvent('addToCart', {
                detail: {
                  id: selectedVariant.external_id,
                  name: product.name,
                  price: selectedVariant.retail_price,
                  image: product.images[0]
                }
              });
              window.dispatchEvent(event);
            }}
            className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart - {formattedPrice}
          </button>

          {/* Description */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500">Dimensions</span>
                <p className="font-medium">{product.specifications.dimensions}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Weight</span>
                <p className="font-medium">{product.specifications.weight}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Material</span>
                <p className="font-medium">{product.specifications.material}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Color</span>
                <p className="font-medium">{product.specifications.color}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = testFurnitureProducts.map((product) => ({
    params: { slug: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = testFurnitureProducts.find((p) => p.id === params?.slug);
  
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
