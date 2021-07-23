import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
