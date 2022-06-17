import { Html, Head, Main, NextScript } from 'next/document'
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
      <meta name="description" content="Random advice generator using Advice API" />
        <link rel="shortcut icon" href={prefix + "/favicon.ico"} type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href={prefix + "/apple-touch-icon.png"} />
        <link rel="icon" type="image/png" sizes="32x32" href={prefix + "/favicon-32x32.png"} />
        <link rel="icon" type="image/png" sizes="16x16" href={prefix + "/favicon-16x16.png"} />
        <link rel="manifest" href={prefix + "/site.webmanifest"} />
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}