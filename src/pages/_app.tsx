import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "tailwindcss/tailwind.css";
import "../styles/app.css";
import { Analytics } from '@vercel/analytics/react';

import { defaultSEO } from "../../next-seo.config";
<<<<<<< HEAD
import Layout from "../components/Hero";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <DefaultSeo {...defaultSEO} />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
=======
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

>>>>>>> c24e4893f1b511e7d570e1ea221e2ba54965abaf
  );
}

export default MyApp;
