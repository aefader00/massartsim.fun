import Link from "next/link";

import styles from "../styles/components/activity.module.css";

export default function Activity({
  id,
  name,
  description,
  timeStart,
  timeEnd,
  week,
  producers,
  faculty,
  link,
}) {
  return (
    <Link href={link}>
      <a className={styles.activity}>
        <li>
          <h2>{name}</h2>
          <p>{description}</p>
          <ul className={styles.details}>
            <li>
              <b>Producers:</b> {producers}
            </li>
            <li>
              <b>Faculty:</b> {faculty}
            </li>
            <li>
              <b>Time:</b>{" "}
              {
                // prettier-ignore
                [String(timeStart).slice(0, 1), ":", String(timeStart).slice(1),].join("")
                    + " PM"
              }
              {" - "}
              {
                // prettier-ignore
                [String(timeEnd).slice(0, 1), ":", String(timeEnd).slice(1)].join("")
                    
                    + " PM"
              }
            </li>
            <li>
              <b>Link:</b> {link}
            </li>
          </ul>
          <br />
        </li>
      </a>
    </Link>
  );
}
