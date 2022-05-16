// Next.js
import type { AppProps } from "next/app";

// Global Styles
import "@styles/global.css";

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default Application;
