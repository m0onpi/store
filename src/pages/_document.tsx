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
          <script src="https://aifurniture.ai/api/script?domain=chesspoop.fyi" async></script>
          <script src="https://aifurniture.ai/api/order-tracker?domain=chesspoop.fyi" async></script>
          <script src="https://aifurniture.ai/api/tracking/script?domain=chesspoop.fyi" async></script>
        </Head>

        <body className="antialiased">
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
