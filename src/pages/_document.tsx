import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

        </Head>

        <body className="antialiased">
          
          <Main />
          <script src="https://cdn.jsdelivr.net/gh/aifurniture/ai-furniture-widget@main/integrations/bigcommerce/loader.js?domainId=cml7xscbm0007zyafq8hv4s4p" async></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
