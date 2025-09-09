import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { testFurnitureProducts } from "../data/test-products";
import { PrintfulProduct } from "../types";

import ProductGrid from "../components/ProductGrid";

type IndexPageProps = {
  products: PrintfulProduct[];
};

const IndexPage: React.FC<IndexPageProps> = ({ products }) => (
  <>
    <div className="text-center pb-6 md:pb-12">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        Premium Furniture Collection
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Discover our curated selection of modern furniture pieces designed to transform your living space.
      </p>
    </div>

    <ProductGrid products={products} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  // Use test furniture products for development/testing
  const products: PrintfulProduct[] = testFurnitureProducts;

  return {
    props: {
      products: shuffle(products),
    },
  };
};

export default IndexPage;
