import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from '@next/third-parties/google'


export default function Document() {
  return (
    <Html lang="tr">
      <Head>
      <GoogleAnalytics gaId="G-NLQG2QJMWB" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
