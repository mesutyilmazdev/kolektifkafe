import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="tr">
      <Head>
      <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-NLQG2QJMWB`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NLQG2QJMWB');
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
