import "../styles/globals.css";
import React from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "store";
import Toast from "components/Toast";

interface IComponent {
  Component: {
    getLayout: (Component: React.ReactNode) => React.ReactNode;
  };
}

function MyApp({ Component, pageProps }: AppProps & IComponent) {
  const getLayout =
    Component.getLayout || (((page: JSX.Element) => page) as React.ReactNode);

  return (
    <Provider store={store}>
      <Toast />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default MyApp;
