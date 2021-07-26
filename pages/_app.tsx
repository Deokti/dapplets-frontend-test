import App, { AppContext } from 'next/app';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
        <Toaster />
      </DndProvider>
    );
  }
}

export default wrapper.withRedux(MyApp);
