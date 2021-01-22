import Link from "next/link";

import styles from "./activity.module.css";

export default function Activity({
  style,
  name,
  description,
  timeStart,
  timeEnd,
  producers,
  faculty,
  link,
}) {
  // const producersObject = JSON.parse(producers);

  // var producersArray = [];

  // for (var i in producersObject) producersArray.push(producersObject[i]);

  return (
    <Link href={link}>
      <li className={styles.activity} style={style}>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
        <br />
        <b>Time</b>:{" "}
        {[String(timeStart).slice(0, 1), ":", String(timeStart).slice(1)].join(
          ""
        )}{" "}
        PM -{" "}
        {[String(timeEnd).slice(0, 1), ":", String(timeEnd).slice(1)].join("")}{" "}
        PM
        <br />
        <br />
        <b>Producers</b>: {producers}
        {/* {producersArray.map(
          ({
            userName = element[1].userName,
            displayName = element[1].displayName,
          }) => {
            return (
              <div style={{ display: "inline" }}>
                <Link
                  href={`https://inside.massartsim.org/profile/${userName}`}
                >
                  <a>{displayName}</a>
                </Link>{" "}
              </div>
            );
          }
        )} */}
        <br />
        <b>Faculty</b>: {faculty}
      </li>
    </Link>
  );
}
