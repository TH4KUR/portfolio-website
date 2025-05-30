import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={'true'}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Rubik:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-display  bg-dark container mx-auto w-full selection:bg-pink-600 selection:text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
