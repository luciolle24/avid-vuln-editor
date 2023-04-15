import Layout from "../components/header/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <title>AVID Backend</title>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
