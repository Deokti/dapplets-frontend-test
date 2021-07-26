import App, { AppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { wrapper } from '../redux/store';
import '../styles/globals.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Component {...pageProps} />
        <Toaster />
      </React.Fragment>
    );
  }
}

export default wrapper.withRedux(MyApp);
