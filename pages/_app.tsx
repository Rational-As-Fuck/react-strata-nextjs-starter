import { AppProps } from "next/app";
import { FC } from "react";
import "../components/bufferFill";
import { Header } from "../components/Header";
import { Providers } from "../components/Providers";

// Use require instead of import since order matters
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const myComponent = (pageProps: any) => {
  return {...pageProps}
}
const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Header />
      {/*
      // @ts-ignore */}
        <Component {...pageProps} />
    </Providers>
  );
};

export default App;
