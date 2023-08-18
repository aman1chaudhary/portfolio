import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Aman Chaudhary, IIT Gandhinagar | Full Stack Developer" />
        <meta name="keywords" content="Aman Chaudhary, Web Developer, Freelance Web Developer" />
        <meta name="author" content="Aman Chaudhary" />
        <meta name="google-site-verification" content="MZTK0uf2XlaN0lQNV9tIfP56jnhWKCVj332CE7yK0PM" />
        <link rel="stylesheet" type="text/css" charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
