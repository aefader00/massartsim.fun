// Import modules.
import Head from "next/head";
import Link from "next/link";

// Import components.
import Header from "../../components/header.js";

// Import functions and variables.

// Import styles.
import styles from "../../styles/pages/links.module.css";

export default function Links() {
  return (
    <div>
      <Head>
        <title>Quick Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Render the header and navbar. */}
      <Header />
      {/* Render the title of the page and a brief description. */}
      <div className={styles.blurb}>
        <h1>QUICK LINKS</h1>
      </div>
      <h2 style={{ textAlign: "center" }}>Main Resources</h2>
      <ul className={styles.list}>
        <Link href="https://massartsim.org/">
          <a>
            <li>Official Studio for Interrelated Media Website</li>
          </a>
        </Link>

        <Link href="https://inside.massartsim.org/namesfaces">
          <a>
            <li>Names/Faces Catalog</li>
          </a>
        </Link>
        <Link href="https://classroom.google.com/c/MjI1MTU0NTcyMzgz?cjc=cotyc63">
          <a>
            <li>Google Classroom</li>
          </a>
        </Link>
        <Link href="https://www.simtv.org/">
          <a>
            <li>SIMtv Website</li>
          </a>
        </Link>

        <Link href="http://massartsim.slack.com ">
          <a>
            <li>SIM Slack</li>
          </a>
        </Link>
        <Link href="https://discord.gg/NvrwEPa">
          <a>
            <li>SIM Discord</li>
          </a>
        </Link>
      </ul>
      <h2 style={{ textAlign: "center" }}>Other Links</h2>
      <ul className={styles.list}>
        <Link href="https://www.godinefamily.gallery/">
          <a>
            <li>Godine Family Gallery</li>
          </a>
        </Link>

        <Link href="https://massarteventworks.com/">
          <a>
            <li>Eventworks</li>
          </a>
        </Link>

        <Link href="https://www.instagram.com/massartsim/">
          <a>
            <li>SIM Instagram</li>
          </a>
        </Link>

        <Link href="https://vimeo.com/channels/396410">
          <a>
            <li>SIM Vimeo</li>
          </a>
        </Link>

        <Link href="https://www.facebook.com/groups/StudioforInterrelatedMedia/">
          <a>
            <li>SIM Facebook</li>
          </a>
        </Link>

        <Link href="https://www.twitch.tv/massartsim">
          <a>
            <li>SIM Twitch</li>
          </a>
        </Link>

        <Link href="https://open.spotify.com/playlist/2yKE3eBpvibLM3fYt6ydm4">
          <a>
            <li>SIM Spotify</li>
          </a>
        </Link>

        <Link href="https://www.flickr.com/photos/simstudio/">
          <a>
            <li>SIM Flickr</li>
          </a>
        </Link>
      </ul>
    </div>
  );
}
