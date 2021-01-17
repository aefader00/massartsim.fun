import Link from "next/link";

import styles from "./activity.module.css";

export default function Activity({
  style,
  name,
  description,
  producers,
  faculty,
  link,
}) {
  return (
    <Link href={link}>
      <li className={styles.activity} style={style}>
        <h3>{name}</h3>
        {description}
        <br />
        <br />
        <b>Producers</b>: {producers}
        <br />
        <b>Faculty</b>: {faculty}
      </li>
    </Link>
  );
}
