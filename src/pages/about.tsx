function AboutPage() {
  return (
    <div className="bg-gray-50 p-8 md:p-16">
      <div className="max-w-4xl mx-auto prose prose-blue text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">About Our Furniture Store</h2>
        <p className="text-lg text-gray-600 mt-4">
          Welcome to Premium Furniture, where we specialize in bringing you the finest selection of high-quality furniture for your home and office. We believe that great furniture should combine exceptional craftsmanship, timeless design, and lasting comfort.
        </p>
        <p className="text-lg text-gray-600 mt-2">
          Our curated collection features carefully selected pieces from trusted manufacturers, ensuring that every item meets our high standards for quality and style. From modern sofas to elegant dining chairs and comfortable armchairs, we have everything you need to transform your living spaces.
        </p>
        <h3 className="text-3xl font-semibold mt-6">Why Choose Our Furniture?</h3>
        <ul className="list-disc pl-5 mt-4 text-left max-w-2xl mx-auto">
          <li>Premium materials and construction for lasting durability</li>
          <li>Contemporary designs that complement any decor style</li>
          <li>Comfort-focused engineering for everyday use</li>
          <li>Competitive pricing with exceptional value</li>
          <li>Expert customer service and support</li>
          <li>Free delivery on orders over $500</li>
        </ul>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Quality First</h4>
            <p className="text-gray-600">Every piece is inspected for quality and durability before reaching your home.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Style & Comfort</h4>
            <p className="text-gray-600">Beautiful designs that don&apos;t compromise on comfort and functionality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Customer Satisfaction</h4>
            <p className="text-gray-600">We stand behind our products with comprehensive warranties and support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;