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
          <NextScript />
{/* Widget - works in all Next.js versions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.FURNITURE_AI_CONFIG = {
                domain: 'chesspoop.fyi',
                domainId: 'cml7xscbm0007zyafq8hv4s4p'
              };
            `,
          }}
        />g
        <script src="https://furniture-ai.com/build/assets/app-BLb6Ezgx.js" async />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if (window.initAIFurnitureWidget) {
                  window.initAIFurnitureWidget(window.FURNITURE_AI_CONFIG);
                }
              });
            `,
          }}
        />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
