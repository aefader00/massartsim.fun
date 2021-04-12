import Link from "next/link";
import styles from "../styles/components/header.module.css";

export default function Header() {
  // An array of images from the /public/banners folder.
  var banners = [
    "/banners/1.gif",
    "/banners/2.gif",
    "/banners/3.gif",
    "/banners/4.gif",
  ];
  // Randomly choose one to be the banner.
  const banner = banners[Math.floor(Math.random() * banners.length)];

  return (
    <div>
      {/* The banner at the top of the header. */}
      <Link href="/">
        <a>
          <div
            className={styles.banner}
            style={{
              backgroundImage: `url(${banner})`,
              backgroundAttachment: "fixed",
              backgroundSize: "auto 16rem",
            }}
          >
            <img
              src={"/logo.png"}
              style={{
                display: "block",
                margin: "auto",
                padding: "1rem",
              }}
            />
          </div>
        </a>
      </Link>

      {/* The navbar at the bottom of the header. */}
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link href="/activities">
              <a>Thursday Activities</a>
            </Link>
          </li>
          <li>
            <Link href="/map">
              <a>Collaboration Map</a>
            </Link>
          </li>
          <li>
            <Link href="/links">
              <a>Quick Links</a>
            </Link>
          </li>
          <li>
            <Link href="https://discord.gg/NvrwEPa">
              <a>Discord Server</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
