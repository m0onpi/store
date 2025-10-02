import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/cart';

const TestCart: React.FC = () => {
  const { state, dispatch } = useCart();
  const router = useRouter();

  useEffect(() => {
    // Listen for custom add to cart events
    const handleAddToCart = (event: CustomEvent) => {
      const { id, name, price, image } = event.detail;
      dispatch({
        type: 'ADD_ITEM',
        payload: { id, name, price, image }
      });
    };

    window.addEventListener('addToCart' as any, handleAddToCart);
    return () => window.removeEventListener('addToCart' as any, handleAddToCart);
  }, [dispatch]);

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => router.push('/cart')}
        className="appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
        aria-label="Cart"
      >
        {state.itemCount > 0 && (
          <span className="absolute bg-blue-500 rounded-full w-5 h-5 top-0 right-0 -mt-1 -mr-1 text-white text-xs flex items-center justify-center">
            {state.itemCount}
          </span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      </button>
    </>
  );
};

export default TestCart;
