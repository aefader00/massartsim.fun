import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout/layout.js";
import styles from "../../styles/links.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Welcome!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className={styles.heading}>
        <a>Main Resources</a>
      </h3>
      <ul className={styles.list}>
        <li>
          <Link href="https://massartsim.org/">
            <a>Official Studio for Interrelated Media Website</a>
          </Link>
        </li>
        <li>
          <Link href="https://inside.massartsim.org/namesfaces">
            <a>Names/Faces Catalog</a>
          </Link>
        </li>
        <li>
          <Link href="https://classroom.google.com/c/MjI1MTU0NTcyMzgz?cjc=cotyc63">
            <a>Google Classroom</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.simtv.org/">
            <a>SIMtv Website</a>
          </Link>
        </li>

        <li>
          <Link href="http://massartsim.slack.com ">
            <a>SIM Slack</a>
          </Link>
        </li>
        <li>
          <Link href="https://discord.gg/NvrwEPa">
            <a>SIM Discord</a>
          </Link>
        </li>
      </ul>
      <h3 className={styles.heading}>
        <a>Other Links</a>
      </h3>
      <ul className={styles.list}>
        <li>
          <Link href="https://www.godinefamily.gallery/">
            <a>Godine Family Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="https://massarteventworks.com/">
            <a>Eventworks</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/massartsim/">
            <a>SIM Instagram</a>
          </Link>
        </li>
        <li>
          <Link href="https://vimeo.com/channels/396410">
            <a>SIM Vimeo</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/groups/StudioforInterrelatedMedia/">
            <a>SIM Facebook</a>
          </Link>
        </li>

        <li>
          <Link href="https://www.twitch.tv/massartsim">
            <a>SIM Twitch</a>
          </Link>
        </li>
        <li>
          <Link href="https://open.spotify.com/playlist/2yKE3eBpvibLM3fYt6ydm4">
            <a>SIM Spotify</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.flickr.com/photos/simstudio/">
            <a>SIM Flickr</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
