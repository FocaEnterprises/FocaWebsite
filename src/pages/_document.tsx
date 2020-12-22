import React from 'react';
import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // eslint-disable-next-line no-undef
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link href="./favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu&display=swap" rel="stylesheet" />

          {/* SEO */}
          {/* Tags comentadas eu não sei como funcionam :) */}
          <meta name="google-site-verification" content="cqR-9eTLBmnbh0XpDXQQLZpzqUzCXFie71s6ohl1HsI" />

          <meta name="description" content="Site feito para a comunidade de programação Dinastia Foca" />
          <meta name="author" content="Miguel Ângelo" />
          <meta name="keywords" content="programação, diversão, comunidade, discord, c#, c++, js, javascript, ts, typescript, HTML, CSS, reactjs, nextsjs" />

          {/* <link rel="alternate" href="" hrefLang="pt-br" /> */}
          <meta name="robots" content="index, follow" />

          <meta property="og:url" content="https://github.com/foca-enterprises" />
          <meta property="og:title" content="Foca Enterprises" />
          <meta property="og:image" content="https://foca-site.vercel.app/foca_image.png" />
          <meta property="og:description" content="Comunidade de programação" />
          <meta name="theme-color" content="#34CB79" />

          {/* <meta property="business:contact_data:country_name" content="PAÍS" /> */}
          {/* <meta property="business:contact_data:website" content="URL" /> */}
          {/* <meta property="business:contact_data:region" content="SP" /> */}
          {/* <meta property="business:contact_data:email" content="EMAIL" /> */}
          {/* <meta property="business:contact_data:phone_number" content="TEL" /> */}

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="Comunidade de programação" />
          <meta name="twitter:title" content="Foca Enterprises" />
          <meta name="twitter:image" content="https://foca-site.vercel.app/foca_image.png" />
          <meta name="twitter:creator" content="@guel5g" />
          <meta name="twitter:site" content="@guel5g" />

          <meta name="geo.placename" content="Brasil" />
          <meta name="geo.region" content="BR" />
          <link rel="canonical" href="https://foca-site.vercel.app/" />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta name="format-detection" content="telephone=no" />
          {/* SEO */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
