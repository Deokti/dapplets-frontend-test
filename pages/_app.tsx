import { AppProps } from 'next/app';
import { FC } from 'react';
import { wrapper } from '../redux/store';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
