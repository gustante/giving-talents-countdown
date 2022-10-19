import '../styles/globals.css'
import ReactGA from 'react-ga';

ReactGA.initialize('G-593Q4LDDYG');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
