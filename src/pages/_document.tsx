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
        <script src="https://cdn.jsdelivr.net/gh/aifurniture/ai-furniture-widget@main/embed.js?domain=mirage-furniture.myshopify.com&domainId=cmlo70t2k0001s8ychvp7yk6j" async></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
