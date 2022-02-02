import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "store";

interface IComponent {
  Component: {
    getLayout: () => JSX.Element;
  };
}

function MyApp({ Component, pageProps }: AppProps & IComponent) {
  const getLayout =
    Component.getLayout || (((page: JSX.Element) => page) as React.ReactNode);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
