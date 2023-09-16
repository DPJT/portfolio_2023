import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
            ></link>
          </Head>

          <body>
            <Main />
            {/* Here we will mount our modal portal */}
            <div id="modal_root" />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
