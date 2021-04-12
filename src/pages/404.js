// Import modules.
import Head from "next/head";

// Import components.
import Header from "../../components/header.js";

// Import styles.
import styles from "../../styles/pages/home.module.css";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Render the header and navbar. */}
      <Header />
      {/* Render the title of the page. */}
      <div className={styles.blurb}>
        <h1>SORRY, THAT PAGE DOES NOT EXIST.</h1>
      </div>
    </div>
  );
}
