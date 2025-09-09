import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "tailwindcss/tailwind.css";
import "../styles/app.css";
import { Analytics } from '@vercel/analytics/react';

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import { CartProvider } from "../context/cart";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <WishlistProvider>
      <CartProvider>
        <Layout>
          <DefaultSeo {...defaultSEO} />
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </CartProvider>
    </WishlistProvider>

  );
}

export default MyApp;
