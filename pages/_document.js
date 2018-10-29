import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-54DHXVC');`}} />

          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54DHXVC" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />

          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
