import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <Link href="/">
        <a>
          <div className={styles.banner}></div>
        </a>
      </Link>
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
