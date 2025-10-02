import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "tailwindcss/tailwind.css";
import "../styles/app.css";
import { Analytics } from '@vercel/analytics/react';

import { defaultSEO } from "../../next-seo.config";
import Layout from "../components/Hero";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <DefaultSeo {...defaultSEO} />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
  );
}

export default MyApp;
