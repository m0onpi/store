import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
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
          
<Script
  src="https://cdn.jsdelivr.net/gh/aifurniture/ai-furniture-widget@main/embed.js?domain=chesspoop.fyi&domainId=cml7xscbm0007zyafq8hv4s4p"
  strategy="afterInteractive"
/>        </body>
      </Html>
    );
  }
}

export default MyDocument;
