import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>React Shop</title>
        {/*
          - aqui van los script de Google Analytics 
          - consultar recomendaciones de NextJs
        */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};
