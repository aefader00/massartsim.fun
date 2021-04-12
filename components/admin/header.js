import Link from "next/link";
import styles from "../../styles/components/admin/header.module.css";

export default function Header() {
  return (
    <div>
      {/* The navbar, minus the banner. */}
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link href="/admin/activities">
              <a>Thursday Activities</a>
            </Link>
          </li>
          <li>
            <Link href="/admin/map">
              <a>Collaboration Map</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
