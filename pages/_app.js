import '../styles/global.scss'
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/styledComponents/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Stumpf Balloons</title>
      <link
        rel="icon"
        href="/images/favicon/favicon-32x32.png"
        sizes="32x32"
      />
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
